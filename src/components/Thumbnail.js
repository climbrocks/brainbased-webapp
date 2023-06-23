// Image Imports
//import instructorimg from "../images/instructor.png";

// SCSS Imports
import "./Thumbnail.scss";

// React Imports
import React from "react";

const Thumbnail = ({ title, instructor, image, instructorImage, onClick }) => {
    const thumbnailStyle = {
        backgroundImage: `linear-gradient(-90deg, transparent, rgba(0, 0, 0, .7)), url(${image})`,
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
