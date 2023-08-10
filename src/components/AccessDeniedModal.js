// SCSS Imports
import "./AccessDeniedModal.scss";

// React Imports
import React, { useState } from "react";

// Component Imports

// Image Imports

// Font Awesome Icons

const AccessDeniedModal = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="exit-button" onClick={onClose}>
                    X
                </button>
                <p>
                    You do not have an active subscription to view this video.
                </p>
                <a href="https://brainbased-wellness.com/membership/">
                    Subscribe Now
                </a>
            </div>
        </div>
    );
};
export default AccessDeniedModal;
