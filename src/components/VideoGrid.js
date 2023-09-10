import React, { useEffect, useState } from "react";
import { Storage, API, graphqlOperation, Auth } from "aws-amplify";
import { useParams } from "react-router-dom";

import { getTeacher, listCategories } from "../graphql/queries";

import "./VideoGrid.scss";
import Thumbnail from "./Thumbnail";
import VideoPlayer from "../pages/VideoPlayer";
import VideoPlayerData from "./VideoPlayerData";
import AccessDeniedModal from "./AccessDeniedModal";
import useFavorites from "../FavoritesUtils";

const VideoGrid = ({
    videos,
    filters,
    //initialFavorites,
    videoId,
    onFavoriteToggle,
    selectedTags,
    videoTags,
    isOpen,
    instructors,
    favorites,
    toggleFavorites,
}) => {
    const [filteredVideos, setFilteredVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isPlayerVisible, setPlayerVisible] = useState(false);
    const [showAccessDeniedModal, setShowAccessDeniedModal] = useState(false);

    //const { favorites, toggleFavorite } = useFavorites(initialFavorites);
    //const { favorites, toggleFavorite } = useFavorites({ CognitoData });

    const getVideoDurationInMinutes = (duration) => {
        return parseInt(duration, 10);
    };

    useEffect(() => {
        const fetchVideoData = async () => {
            const categoriesResponse = await API.graphql(
                graphqlOperation(listCategories)
            );
            const categories = categoriesResponse.data.listCategories.items;
            const categoryIds = categories.map((category) => category.id);

            const filteredVideos = videos.filter((video) =>
                categoryIds.includes(video.categoryVideosId)
            );

            const videosWithImageUrls = await Promise.all(
                filteredVideos.map(async (video) => {
                    try {
                        const imageUrl = await Storage.get(video.poster, {
                            level: "public",
                        });
                        const instructor = instructors.find(
                            (instructor) =>
                                instructor.id === video.teacherVideosId
                        );

                        const instructorImage = await fetchInstructorImage(
                            instructor.image
                        );
                        const videoWithImageUrl = {
                            ...video,
                            imageUrl,
                            instructor,
                            instructorImage,
                        };
                        return videoWithImageUrl;
                    } catch (error) {
                        console.log(
                            "Error fetching image or instructor data:",
                            error
                        );
                        return { ...video, imageUrl: "", instructor: null };
                    }
                })
            );

            const filteredVideosByFilters = videosWithImageUrls.filter(
                (video) => {
                    // Filter by categories
                    if (
                        filters.category.length > 0 &&
                        !filters.category.includes(video.categoryVideosId)
                    ) {
                        return false;
                    }

                    // Filter by tags
                    if (selectedTags.length > 0) {
                        const videoTagsIds = videoTags
                            .filter((tag) => tag.video.id === video.id)
                            .map((tag) => tag.tag.id);

                        //console.log("Video ID:", video.id);
                        //console.log("Video Tags IDs:", videoTagsIds);
                        //console.log(
                        //  "Selected Tags:",
                        // selectedTags.map((tag) => tag.id)
                        //);

                        if (
                            !selectedTags.every((tag) =>
                                videoTagsIds.includes(tag.id)
                            )
                        ) {
                            return false;
                        }
                    }

                    // Filter by duration
                    if (filters.duration.length > 0) {
                        const videoDuration = getVideoDurationInMinutes(
                            video.duration
                        );

                        // Check if the video duration falls within the selected range
                        if (
                            !filters.duration.some((selectedDuration) => {
                                if (
                                    selectedDuration === "<15" &&
                                    videoDuration < 15
                                ) {
                                    return true;
                                }
                                if (
                                    selectedDuration === "15-30" &&
                                    videoDuration >= 15 &&
                                    videoDuration <= 30
                                ) {
                                    return true;
                                }
                                if (
                                    selectedDuration === "30-60" &&
                                    videoDuration >= 30 &&
                                    videoDuration <= 60
                                ) {
                                    return true;
                                }
                                if (
                                    selectedDuration === ">60" &&
                                    videoDuration > 60
                                ) {
                                    return true;
                                }
                                return false;
                            })
                        ) {
                            return false;
                        }
                    }

                    // Filter by teachers
                    if (filters.teacher.length > 0) {
                        const videoTeacherIds =
                            video.teacherVideosId.split(",");
                        if (
                            !filters.teacher.some((teacherId) =>
                                videoTeacherIds.includes(teacherId)
                            )
                        ) {
                            return false;
                        }
                    }
                    if (filters.favorites && !favorites.includes(video.id)) {
                        return false;
                    }

                    return true;
                }
            );

            filteredVideosByFilters.sort((a, b) => {
                if (a.date > b.date) return -1; // descending order
                if (a.date < b.date) return 1;
                return 0;
            });

            setFilteredVideos(filteredVideosByFilters);
        };

        fetchVideoData();
    }, [videos, filters, selectedTags]);

    /*
    const fetchInstructorData = async (teacherVideosId) => {
        try {
            const response = await API.graphql(
                graphqlOperation(getTeacher, { id: teacherVideosId })
            );
            const { getTeacher: teacher } = response.data;
            return teacher;
        } catch (error) {
            console.log("Error fetching instructor data:", error);
            return null;
        }
    };
*/
    const fetchInstructorImage = async (image) => {
        try {
            const imageUrl = await Storage.get(image, { level: "public" });
            return imageUrl;
        } catch (error) {
            console.log("Error fetching instructor image:", error);
            return "";
        }
    };

    const fetchSubtitleUrl = async () => {
        try {
            const subtitleUrl = await Storage.get(
                `Subtitles/GMT20230718-123349_Recording_640x360_Mp4_Avc_Aac_16x9_1280x720p_24Hz_4.5Mbps_qvbr.mp4.vtt`,
                { level: "public" }
            );
            return subtitleUrl;
        } catch (error) {
            console.log("Error fetching subtitle:", error);
            return "";
        }
    };

    const handleVideoSelect = async (video) => {
        try {
            // Fetch the current user, bypassing the cache to ensure the most recent information
            const user = await Auth.currentAuthenticatedUser({
                bypassCache: true,
            });
            const token = user.signInUserSession.idToken.jwtToken; // Extract the JWT token

            const myInit = {
                headers: {
                    Authorization: token, // Include the token in the Authorization header
                },
            };

            // Make the API call to check access
            const response = await API.get(
                "bbwvideoauthapi",
                "/videoaccess",
                myInit
            );

            if (response !== "Access granted") {
                //alert("You do not have access to this video.");

                setShowAccessDeniedModal(true);
                return; // Exit the function early if access is not granted
            }

            // If access is granted, proceed with fetching the video details
            const videoUrl = await Storage.get(video.url, { level: "public" });
            const imageUrl = await Storage.get(video.poster, {
                level: "public",
            });

            // Instead of fetching instructor data, use the data from the instructors state
            const instructor = instructors.find(
                (instructor) => instructor.id === video.teacherVideosId
            );
            const instructorImage = await fetchInstructorImage(
                instructor.image
            );

            const captionsUrl = await fetchSubtitleUrl();
            const selectedVideoWithUrls = {
                ...video,
                url: videoUrl,
                imageUrl: imageUrl,
                captions: captionsUrl,
                instructor: {
                    ...instructor,
                    image: instructorImage,
                },
            };

            setSelectedVideo(selectedVideoWithUrls);
            setPlayerVisible(true);
        } catch (error) {
            console.log("Error fetching video or image:", error);
        }
    };

    useEffect(() => {
        const selectedVideo = videos.find((video) => video.id === videoId);
        if (selectedVideo) {
            handleVideoSelect(selectedVideo);
        } else {
            setSelectedVideo(null);
            setPlayerVisible(false);
        }
    }, [videos, videoId]);

    const closeVideoPlayer = () => {
        setPlayerVisible(false);
        setTimeout(() => {
            setSelectedVideo(null);
        }, 300); // Delay the reset of selectedVideo to allow the fade-out animation to complete
    };

    /*
    const handleFavoriteClick = (videoId, isFavorite) => {
        if (isFavorite) {
            toggleFavorite(videoId, true); // Call toggleFavorite with the videoId and true
        } else {
            toggleFavorite(videoId, false); // Call toggleFavorite with the videoId and false
        }
    };
    */

    const handleFavoriteClick = (videoId, isFavorite) => {
        // Call the toggleFavorite function and pass the correct value of isFavorite
        onFavoriteToggle(videoId, !isFavorite);
    };

    return (
        <>
            <div className="video-grid-container">
                {showAccessDeniedModal && (
                    <AccessDeniedModal
                        onClose={() => setShowAccessDeniedModal(false)}
                    />
                )}
                <div className="video-grid">
                    {filteredVideos.map((video, index) => (
                        <Thumbnail
                            key={index}
                            video={video}
                            title={video.title}
                            date={video.date}
                            duration={video.duration}
                            image={video.imageUrl}
                            instructor={
                                video.instructor ? video.instructor.name : ""
                            }
                            instructorImage={video.instructorImage}
                            favorites={favorites}
                            toggleFavorites={toggleFavorites}
                            isFavorite={favorites.includes(video.id)}
                            onFavoriteToggle={handleFavoriteClick}
                            onClick={() => handleVideoSelect(video)}
                        />
                    ))}
                </div>
                {selectedVideo && (
                    <div
                        className={`video-player-fullscreen ${
                            isPlayerVisible ? "visible" : ""
                        }`}
                    >
                        <VideoPlayerData
                            video={selectedVideo}
                            instructor={
                                selectedVideo.instructor
                                    ? selectedVideo.instructor.name
                                    : ""
                            }
                            isFavorite={favorites.includes(selectedVideo.id)}
                            favorites={favorites}
                            onFavoriteToggle={handleFavoriteClick}
                        />
                        <VideoPlayer
                            videoUrl={selectedVideo.url}
                            poster={selectedVideo.imageUrl}
                            captions={selectedVideo.captions}
                        />
                        <button
                            className="close-button"
                            onClick={closeVideoPlayer}
                        >
                            X
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default VideoGrid;
