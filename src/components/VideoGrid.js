// React Imports
import React from "react";

// SCSS Imports
import "./VideoGrid.scss";

// Component Imports
import Thumbnail from "./Thumbnail";
import VideoPlayer from "../pages/VideoPlayer";

const VideoGrid = ({ videos, filters }) => {
    const filteredVideos = videos.filter((video) => {
        return (
            filters.length === 0 ||
            video.categories.some((category) => filters.includes(category))
        );
    });

    const [selectedVideo, setSelectedVideo] = React.useState(null);
    const [isPlayerVisible, setPlayerVisible] = React.useState(false);

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
        setPlayerVisible(true);
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
                        <VideoPlayer
                            videoUrl={selectedVideo.url}
                            video={selectedVideo}
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
