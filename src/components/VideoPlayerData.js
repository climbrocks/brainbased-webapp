// SCSS Imports
import "./VideoPlayerData.scss";

// React Imports
import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
    EmailIcon,
    FacebookIcon,
    TwitterIcon,
} from "react-share";

// Component Imports
import { createUserData, updateUserData } from "../graphql/mutations";
import { listUserData } from "../graphql/queries";
import CognitoData from "./CognitoData";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare } from "@fortawesome/free-solid-svg-icons";

const MyFacebookShareButton = ({ url }) => {
    return (
        <FacebookShareButton url={url}>
            <FacebookIcon />
        </FacebookShareButton>
    );
};

const VideoPlayerData = ({
    video,
    instructor,
    isFavorite,
    favorites,
    toggleFavorite,
}) => {
    const [favoriteStatus, setFavoriteStatus] = useState(
        favorites ? favorites.includes(video.id) : isFavorite
    );

    const handleFavoriteClick = async () => {
        // Use the toggleFavorite function from the Home component to update favorites
        try {
            setFavoriteStatus(!favoriteStatus);
            await toggleFavorite(video.id, favoriteStatus);
        } catch (error) {
            console.log("Error updating favorite status:", error);
        }
    };

    const handleShareClick = () => {
        const shareUrl = `${window.location.origin}/play/${video.id}`;

        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareUrl);
            //alert("Share link copied to clipboard!");
        } else {
            // Fallback for browsers that don't support clipboard API
            //alert(`Share link: ${shareUrl}`);
        }
    };

    if (!video) {
        return null; // Return null if video is undefined
    }

    const { title, description } = video;

    // Social Sharing Buttons
    const urlForShareButtons = `${window.location.origin}/play/${video.id}`;

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
                    <button onClick={handleFavoriteClick}>
                        <FontAwesomeIcon
                            className={`social-icon ${
                                favoriteStatus ? "favorite" : ""
                            }`}
                            icon={faHeart}
                        />
                        <span className="social-text">
                            {favoriteStatus
                                ? "Remove Favorite"
                                : "Add Favorite"}
                        </span>
                    </button>
                    <button onClick={handleShareClick}>
                        <FontAwesomeIcon
                            className="social-icon"
                            icon={faShare}
                        />
                        <span className="social-text">Share</span>
                    </button>

                    <MyFacebookShareButton url={urlForShareButtons} />
                </div>
            </div>
        </div>
    );
};

export default VideoPlayerData;
