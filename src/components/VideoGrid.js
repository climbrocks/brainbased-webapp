import React, { useEffect, useState } from "react";
import { Storage, API, graphqlOperation } from "aws-amplify";
import { useParams } from "react-router-dom";

import { getTeacher, listCategories } from "../graphql/queries";

import "./VideoGrid.scss";
import Thumbnail from "./Thumbnail";
import VideoPlayer from "../pages/VideoPlayer";
import VideoPlayerData from "./VideoPlayerData";
import useFavorites from "../FavoritesUtils";

const VideoGrid = ({
    videos,
    filters,
    initialFavorites,
    videoId,
    onFavoriteToggle,
    selectedTags,
    videoTags,
}) => {
    const [filteredVideos, setFilteredVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isPlayerVisible, setPlayerVisible] = useState(false);

    const { favorites, toggleFavorite } = useFavorites(initialFavorites);

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
                        const instructor = await fetchInstructorData(
                            video.teacherVideosId
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
                        filters.length > 0 &&
                        !filters.includes(video.categoryVideosId)
                    ) {
                        return false;
                    }

                    // Filter by tags
                    if (selectedTags.length > 0) {
                        const videoTagsIds = videoTags
                            .filter((tag) => tag.video.id === video.id)
                            .map((tag) => tag.tag.id);

                        console.log("Video ID:", video.id);
                        console.log("Video Tags IDs:", videoTagsIds);
                        console.log(
                            "Selected Tags:",
                            selectedTags.map((tag) => tag.id)
                        );

                        if (
                            !selectedTags.every((tag) =>
                                videoTagsIds.includes(tag.id)
                            )
                        ) {
                            return false;
                        }
                    }

                    return true;
                }
            );

            setFilteredVideos(filteredVideosByFilters);
        };

        fetchVideoData();
    }, [videos, filters, selectedTags]);

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

    const fetchInstructorImage = async (image) => {
        try {
            const imageUrl = await Storage.get(image, { level: "public" });
            return imageUrl;
        } catch (error) {
            console.log("Error fetching instructor image:", error);
            return "";
        }
    };

    const handleVideoSelect = async (video) => {
        try {
            const videoUrl = await Storage.get(video.url, { level: "public" });
            const imageUrl = await Storage.get(video.poster, {
                level: "public",
            });

            const instructor = await fetchInstructorData(video.teacherVideosId);
            const instructorImage = await fetchInstructorImage(
                instructor.image
            );

            const selectedVideoWithUrls = {
                ...video,
                url: videoUrl,
                imageUrl: imageUrl,
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

    const handleFavoriteClick = (videoId, isFavorite) => {
        if (isFavorite) {
            toggleFavorite(videoId, true); // Call toggleFavorite with the videoId and true
        } else {
            toggleFavorite(videoId, false); // Call toggleFavorite with the videoId and false
        }
    };

    return (
        <>
            <div className="video-grid-container">
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
                        />
                        <VideoPlayer
                            videoUrl={selectedVideo.url}
                            poster={selectedVideo.imageUrl}
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
