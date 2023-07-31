// SCSS Imports
import "./NotFound.scss";

// React Imports
import React from "react";
import { Link } from "react-router-dom";

// Component Imports

// Image Imports
import yoga from "../images/not-found.webp";

// Font Awesome Icons

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <div className="not-found">
                    <img
                        src={yoga}
                        alt="The page you are looking for was not found"
                    />
                    <h2>
                        We apologize. It appears the page you are looking for is
                        not here.
                    </h2>

                    <Link className="go-home" to="/home">
                        Go to Video Library
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default NotFound;
