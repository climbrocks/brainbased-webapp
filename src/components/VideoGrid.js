import React, { useEffect, useState } from "react";
import { Storage, API, graphqlOperation, Auth } from "aws-amplify";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import brainAnimation from "../images/brain-lottie.json";
import { getTeacher, listCategories, listVideoURLs } from "../graphql/queries";

import "./VideoGrid.scss";
import Thumbnail from "./Thumbnail";
import VideoPlayer from "../pages/VideoPlayer";
import VideoPlayerData from "./VideoPlayerData";
import AccessDeniedModal from "./AccessDeniedModal";
import useFavorites from "../FavoritesUtils";

const VideoGrid = ({
    videos,
    filters,
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
    const [noMatchingVideos, setNoMatchingVideos] = useState(false);
    const [videoURLsData, setVideoURLsData] = useState(false);
    const [isLoadingVideos, setIsLoadingVideos] = useState(true);
    const [isLoadingVideoURLs, setIsLoadingVideoURLs] = useState(true);
    const [initialLoadComplete, setInitialLoadComplete] = useState(false);

    const getVideoDurationInMinutes = (duration) => {
        return parseInt(duration, 10);
    };

    useEffect(() => {
        if (!isLoadingVideos && videoId) {
            const foundVideo = videos.find((video) => video.id === videoId);
            //console.log("orig: ", videoId);
            //console.log("found: ", foundVideo);
            if (foundVideo) {
                handleVideoSelect(foundVideo);
            }
        }
    }, [videos, videoId, isLoadingVideos]);

    useEffect(() => {
        const fetchAllVideoURLs = async (
            nextToken = null,
            accumulatedItems = []
        ) => {
            try {
                const response = await API.graphql(
                    graphqlOperation(listVideoURLs, { limit: 10000, nextToken })
                );
                //console.log("API response:", response); // Log the API response

                const items = response.data.listVideoURLs.items;
                const newNextToken = response.data.listVideoURLs.nextToken;

                // Accumulate items
                const currentItems = accumulatedItems.concat(items);

                if (newNextToken) {
                    // If there's more data, fetch the next page
                    return await fetchAllVideoURLs(newNextToken, currentItems);
                } else {
                    // If there's no more data, return the accumulated items
                    return currentItems;
                }
            } catch (error) {
                console.error("Error fetching video URLs:", error);
                return [];
            }
        };

        fetchAllVideoURLs().then((fullList) => {
            setVideoURLsData(fullList); // Set the full list of items
            setIsLoadingVideoURLs(false);
            //console.log("Full list of items:", fullList); // Log the full list
        });
    }, [videoId]);

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
                        const category = categories.find(
                            (c) => c.id === video.categoryVideosId
                        );
                        const categoryName = category ? category.name : "";
                        const videoWithImageUrl = {
                            ...video,
                            imageUrl,
                            instructor,
                            instructorImage,
                            category: categoryName,
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

            //filter in descending order
            filteredVideosByFilters.sort((a, b) => {
                if (a.date > b.date) return -1; // descending order
                if (a.date < b.date) return 1;
                return 0;
            });

            setFilteredVideos(filteredVideosByFilters);

            // Update the state to indicate if there are no matching videos
            setNoMatchingVideos(filteredVideosByFilters.length === 0);
        };

        fetchVideoData().then(() => {
            setInitialLoadComplete(true);
        });
    }, [videos, filters, selectedTags]);

    const fetchInstructorImage = async (image) => {
        try {
            const imageUrl = await Storage.get(image, { level: "public" });
            setIsLoadingVideos(false);
            return imageUrl;
        } catch (error) {
            console.log("Error fetching instructor image:", error);
            return "";
        }
    };

    const fetchSubtitleUrl = async (video) => {
        try {
            const videoSplit = video.url.split("/")[1];
            const subtitleUrl = await Storage.get(
                "Subtitles/" + videoSplit + ".vtt",
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
            const user = await Auth.currentAuthenticatedUser({
                bypassCache: true,
            });
            const token = user.signInUserSession.idToken.jwtToken;

            const myInit = {
                headers: {
                    Authorization: token,
                },
            };

            const response = await API.get(
                "bbwvideoauthapi",
                "/videoaccess",
                myInit
            );

            if (response !== "Access granted") {
                setShowAccessDeniedModal(true);
                return;
            }

            //const videoUrl = await Storage.get(video.url, { level: "public" });
            //console.log("current format:", videoURLsData);
            /*const videoURLsList = videoURLsData;

            let videoUrl = "";
            const urlParts = video.url.split("/");
            const filenamePart = urlParts[urlParts.length - 1]; // Extracts the last part of the URL

            const matchedVideo = videoURLsList.find((item) => {
                const itemUrlParts = item.MP4.split("/");
                const itemFilenamePart = itemUrlParts[itemUrlParts.length - 1]; // Extracts the filename part of the item URL
                return itemFilenamePart === filenamePart; // Compares the filename parts
            });

            // If a match is found, set videoUrl to the .CMAF value
            if (matchedVideo) {
                videoUrl = matchedVideo.HLS;
                //console.log("successful match: ", videoUrl);
            } else {
                videoUrl = await Storage.get(video.url, { level: "public" }); // Fallback to original URL
                
            }
            */

            const videoURLsList = videoURLsData;
            let videoUrl = "";
            const urlParts = video.url.split("/");
            const filenamePart = urlParts[urlParts.length - 1]; // Extracts the last part of the URL

            const matchedVideo = videoURLsList.find((item) => {
                const itemUrlParts = item.MP4.split("/");
                const itemFilenamePart = itemUrlParts[itemUrlParts.length - 1]; // Extracts the filename part of the item URL
                return itemFilenamePart === filenamePart; // Compares the filename parts
            });

            // If a match is found, set videoUrl to the .CMAF value
            if (matchedVideo) {
                videoUrl = matchedVideo.HLS;
                //console.log("successful match: ", videoUrl);
            } else {
                videoUrl = await Storage.get(video.url, { level: "public" }); // Fallback to original URL
            }

            const imageUrl = await Storage.get(video.poster, {
                level: "public",
            });

            const instructor = instructors.find(
                (instructor) => instructor.id === video.teacherVideosId
            );
            const instructorImage = await fetchInstructorImage(
                instructor.image
            );

            const captionsUrl = await fetchSubtitleUrl(video);
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
            const playUrl = `${window.location.origin}/play/${video.id}`;
            window.history.pushState({}, "", playUrl);
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
        }, 300);
        localStorage.removeItem("redirectToAfterLogin");
        const newUrl = window.location.origin;
        window.history.pushState({}, document.title, newUrl);
    };

    const handleFavoriteClick = (videoId, isFavorite) => {
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
                {(isLoadingVideos || isLoadingVideoURLs) && (
                    <div className="loading-videos">
                        Loading videos...
                        <Lottie
                            animationData={brainAnimation}
                            style={{
                                width: 200,
                                height: 200,
                            }}
                        />
                    </div> // This is the placeholder/loader
                )}
                {!isLoadingVideos &&
                    !isLoadingVideoURLs &&
                    initialLoadComplete && (
                        <>
                            {noMatchingVideos &&
                                filteredVideos.length === 0 && (
                                    <div className="no-matching-videos-message">
                                        Sorry! There are no videos with this
                                        specific combination of tags. <br></br>
                                        To get videos to populate, remove a few
                                        of the tags. We love to create
                                        programming around your needs! If you
                                        would like a class to focus on this
                                        specific group of topics, please email
                                        support@brainbased-wellness.com and let
                                        us know what you want a class on. We
                                        will create it for you soon!
                                    </div>
                                )}

                            {filteredVideos.length > 0 && (
                                <div className="video-grid">
                                    {filteredVideos.map((video, index) => (
                                        <Thumbnail
                                            key={index}
                                            video={video}
                                            title={video.title}
                                            category={video.category}
                                            date={video.date}
                                            duration={video.duration}
                                            image={video.imageUrl}
                                            instructor={
                                                video.instructor
                                                    ? video.instructor.name
                                                    : ""
                                            }
                                            instructorImage={
                                                video.instructorImage
                                            }
                                            favorites={favorites}
                                            toggleFavorites={toggleFavorites}
                                            isFavorite={favorites.includes(
                                                video.id
                                            )}
                                            onFavoriteToggle={
                                                handleFavoriteClick
                                            }
                                            onClick={() =>
                                                handleVideoSelect(video)
                                            }
                                        />
                                    ))}
                                </div>
                            )}

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
                                        isFavorite={favorites.includes(
                                            selectedVideo.id
                                        )}
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
                        </>
                    )}
            </div>
        </>
    );
};

export default VideoGrid;
