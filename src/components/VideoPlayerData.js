// SCSS Imports
import "./VideoPlayerData.scss";

// React Imports
import React from "react";

// Component Imports

// Image Imports

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare } from "@fortawesome/free-solid-svg-icons";

const VideoPlayerData = ({ video, instructor }) => {
    if (!video) {
        return; // Return null if video is undefined
    }

    const { title, description } = video;

    return (
        <div className="video-data-container">
            <div className="video-data">
                <div className="video-title-instructor">
                    <h4 className="breadcrumbs">Videos / Categories</h4>
                    <h1 className="video-title">{title}</h1>
                    <h3 className="video-instructor">
                        Instructor: {instructor}
                    </h3>
                </div>
                <p className="video-description">{description}</p>
                <div className="video-social-buttons">
                    <button>
                        <FontAwesomeIcon
                            className="social-icon"
                            icon={faHeart}
                        />
                        <span className="social-text">Favorite</span>
                    </button>
                    <button>
                        <FontAwesomeIcon
                            className="social-icon"
                            icon={faShare}
                        />
                        <span className="social-text">Share</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayerData;
