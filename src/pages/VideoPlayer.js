// SCSS Imports
import "./VideoPlayer.scss";

// React Imports
import React from "react";

// Component Imports
import VideoPlayerData from "../components/VideoPlayerData.js";

// Image Imports

// Font Awesome Icons

const VideoPlayer = ({ videoUrl, poster }) => {
    return (
        <div className="video-player-container">
            <div className="video-container">
                <video poster={poster} autoPlay controls className="video">
                    <source src={videoUrl} type="video/mp4" />
                    <track
                        src=""
                        label="English"
                        kind="captions"
                        srclang="en-us"
                        default
                    ></track>
                </video>
            </div>
            <VideoPlayerData />
        </div>
    );
};
export default VideoPlayer;
