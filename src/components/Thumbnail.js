// React Imports
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// SCSS Imports
import "./Thumbnail.scss";
import useFavorites from "../FavoritesUtils";
import CognitoData from "./CognitoData"; // Import CognitoData

const Thumbnail = ({
    video,
    title,
    instructor,
    image,
    instructorImage,
    //isFavorite,
    //onFavoriteToggle,
    onClick,
}) => {
    const thumbnailStyle = {
        backgroundImage: `linear-gradient(-90deg, transparent, rgba(0, 0, 0, .7)), url(${image})`,
    };

    //const [favorite, setFavorite] = useState(isFavorite);
    const { favorites, toggleFavorite } = useFavorites({ CognitoData }); // Use useFavorites and pass CognitoData as a prop

    //const handleButtonClicked = (e) => {
    //  e.stopPropagation();
    //const updatedFavoriteStatus = !favorite;
    //setFavorite(updatedFavoriteStatus);
    //if (onFavoriteToggle) {
    //    onFavoriteToggle(video.id, updatedFavoriteStatus);
    //}
    //};

    const isFavorite = favorites.includes(video.id);

    const handleButtonClicked = (e) => {
        e.stopPropagation();
        toggleFavorite(video.id, isFavorite);
    };

    return (
        <div
            className="thumbnail-container"
            style={thumbnailStyle}
            onClick={onClick}
        >
            <div className="thumbnail-content">
                <h3 className="date-and-duration">April 01, 2023 | 53:43</h3>
                <button
                    className="thumbnail-favorite-button"
                    onClick={handleButtonClicked}
                >
                    <FontAwesomeIcon
                        className="heart-icon"
                        icon={faHeart}
                        color={isFavorite ? "#ae564a" : "rgba(0,0,0,0.5)"}
                        strokeWidth={isFavorite ? 0 : 2}
                    />
                </button>
                <div className="title-and-instructor-container">
                    <h1 className="video-title">{title}</h1>
                    <h3 className="instructor-name">
                        Instructor: {instructor}
                    </h3>
                </div>
                <img
                    className="instructor-image"
                    src={instructorImage}
                    alt="Instructor"
                />
            </div>
        </div>
    );
};

export default Thumbnail;
