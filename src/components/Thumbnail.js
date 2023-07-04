// Image Imports
//import instructorimg from "../images/instructor.png";

// SCSS Imports
import "./Thumbnail.scss";

// React Imports
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Thumbnail = ({
    title,
    instructor,
    image,
    instructorImage,
    isFavorite,
    onClick,
}) => {
    const thumbnailStyle = {
        backgroundImage: `linear-gradient(-90deg, transparent, rgba(0, 0, 0, .7)), url(${image})`,
    };

    const [favorite, setFavorite] = useState(isFavorite);

    const handleFavoriteToggle = () => {
        setFavorite((prevFavorite) => !prevFavorite);
    };

    const handleButtonClicked = (e) => {
        e.stopPropagation();
        handleFavoriteToggle();
    };

    //console.log(instructorImage);
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
                        color={favorite ? "#ae564a" : "rgba(0,0,0,0.5)"}
                        strokeWidth={favorite ? 0 : 2}
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
