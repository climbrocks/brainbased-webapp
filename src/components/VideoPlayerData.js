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
import {
    faHeart,
    faEnvelope,
    faE,
    faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

// Share Buttons
const MyFacebookShareButton = ({ url }) => {
    return (
        <FacebookShareButton
            className="social-button"
            resetButtonStyle={false}
            url={url}
            quote="Check Out this Video from Brainbased Wellness"
        >
            <FontAwesomeIcon className="social-icon" icon={faFacebook} />
            <span className="social-text">Share on Facebook</span>
        </FacebookShareButton>
    );
};
const MyTwitterShareButton = ({ url }) => {
    return (
        <TwitterShareButton
            className="social-button"
            resetButtonStyle={false}
            url={url}
            title="Check Out this Video from Brainbased Wellness"
        >
            <FontAwesomeIcon className="social-icon" icon={faTwitter} />
            <span className="social-text">Share on Twitter</span>
        </TwitterShareButton>
    );
};

const MyEmailShareButton = ({ url }) => {
    return (
        <EmailShareButton
            className="social-button"
            resetButtonStyle={false}
            url={url}
            subject="Check Out this Video from Brainbased Wellness"
            body={url}
        >
            <FontAwesomeIcon className="social-icon" icon={faEnvelope} />
            <span className="social-text">Share with Email</span>
        </EmailShareButton>
    );
};

const VideoPlayerData = ({
    video,
    instructor,
    isFavorite,
    favorites,
    //toggleFavorite,
    onFavoriteToggle,
}) => {
    /* Change tab title */
    useEffect(() => {
        if (video) {
            document.title = `Brain Based Wellness | ${video.title}`;
        }
    }, [video]);
    const [favoriteStatus, setFavoriteStatus] = useState(
        favorites ? favorites.includes(video.id) : isFavorite
    );

    const handleFavoriteClick = (e) => {
        try {
            setFavoriteStatus(!favoriteStatus);
            onFavoriteToggle(video.id, !isFavorite);
        } catch (error) {
            console.log("Error updating favorite status:", error);
        }
    };

    /*
    const handleFavoriteClick = async () => {
        // Use the toggleFavorite function from the Home component to update favorites
        try {
            setFavoriteStatus(!favoriteStatus);
            await toggleFavorite(video.id, favoriteStatus);
        } catch (error) {
            console.log("Error updating favorite status:", error);
        }
    };
    */
    const handleShareClick = () => {
        const shareUrl = `${window.location.origin}/play/${video.id}`;

        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareUrl);
            alert("Share link copied to clipboard!");
        } else {
            // Fallback for browsers that don't support clipboard API
            alert(`Share link: ${shareUrl}`);
        }
    };

    if (!video) {
        return null; // Return null if video is undefined
    }

    const { title, description } = video;

    // Social Sharing Buttons
    const urlForShareButtons = `${window.location.origin}/play/${video.id}`;

    /*
    <MyFacebookShareButton url={urlForShareButtons} />
    <MyTwitterShareButton url={urlForShareButtons} />
    <MyEmailShareButton url={urlForShareButtons} />
    */

    return (
        <div className="video-data-container">
            <div className="video-data">
                <div className="video-title-instructor">
                    <h1 className="video-title">{title}</h1>
                    <h3 className="video-instructor">
                        Instructor: {instructor}
                    </h3>
                </div>
                <p className="video-description">{description}</p>
                <div className="video-social-buttons">
                    <button
                        className="social-button"
                        onClick={handleFavoriteClick}
                    >
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
                    {
                        <button
                            className="social-button"
                            onClick={handleShareClick}
                        >
                            <FontAwesomeIcon
                                className={`social-icon ${
                                    favoriteStatus ? "favorite" : ""
                                }`}
                                icon={faLink}
                            />
                            <span className="social-text"> Copy Link </span>
                        </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default VideoPlayerData;
