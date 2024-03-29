import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "./Thumbnail.scss";
import useFavorites from "../FavoritesUtils";

const Thumbnail = ({
    video,
    title,
    category,
    instructor,
    date,
    duration,
    image,
    instructorImage,
    onClick,
    isFavorite,
    onFavoriteToggle,
    favorites,
    toggleFavorites,
}) => {
    const thumbnailStyle = {
        backgroundImage: `linear-gradient(-90deg, transparent, rgba(0, 0, 0, .7)), url(${image})`,
    };

    //const { favorites, toggleFavorite } = useFavorites(); // Use useFavorites without passing any props

    //const isFavorite = favorites.includes(video.id);
    //const [localIsFavorite, setLocalIsFavorite] = useState(isFavorite); // I think this is dead?

    const handleButtonClicked = (e) => {
        e.stopPropagation();
        onFavoriteToggle(video.id, !isFavorite);
    };

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const formattedDate = new Date(dateString).toLocaleDateString(
            undefined,
            options
        );
        return formattedDate;
    };

    return (
        <div
            className="thumbnail-container"
            style={thumbnailStyle}
            onClick={onClick}
        >
            <div className="thumbnail-content">
                <h3 className="date-and-duration">
                    {formatDate(date)} | {duration} min
                    <br></br>
                    {category}
                </h3>
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
