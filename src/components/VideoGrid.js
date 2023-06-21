// React Imports
import React, { useEffect, useState } from "react";
import { Storage, API, graphqlOperation } from "aws-amplify";

import { getTeacher } from "../graphql/queries";

// SCSS Imports
import "./VideoGrid.scss";

// Component Imports
import Thumbnail from "./Thumbnail";
import VideoPlayer from "../pages/VideoPlayer";
import VideoPlayerData from "./VideoPlayerData";

const VideoGrid = ({ videos, filters }) => {
    const [filteredVideos, setFilteredVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isPlayerVisible, setPlayerVisible] = useState(false);
    const [instructorData, setInstructorData] = useState(null);

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

    useEffect(() => {
        const fetchVideoData = async () => {
            const videosWithImageUrls = await Promise.all(
                videos.map(async (video) => {
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
            setFilteredVideos(videosWithImageUrls);
        };

        fetchVideoData();
    }, [videos]);

    const handleVideoSelect = async (video) => {
        try {
            const file = await Storage.get(video.url, { level: "public" });
            const selectedVideoWithImageUrl = {
                ...video,
                url: file,
                imageUrl: video.imageUrl,
            };
            setSelectedVideo(selectedVideoWithImageUrl);
            setPlayerVisible(true);
        } catch (error) {
            console.log("Error fetching video:", error);
        }
    };

    const closeVideoPlayer = () => {
        setPlayerVisible(false);
        setTimeout(() => {
            setSelectedVideo(null);
        }, 300); // Delay the reset of selectedVideo to allow the fade-out animation to complete
    };

    return (
        <>
            <div className="video-grid-container">
                <div className="video-grid">
                    {filteredVideos.map((video, index) => (
                        <Thumbnail
                            key={index}
                            title={video.title}
                            image={video.imageUrl}
                            instructor={
                                video.instructor ? video.instructor.name : ""
                            }
                            instructorImage={video.instructorImage}
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
