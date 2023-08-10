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
                <h2>Oh no!</h2>
                <p>
                    You do not have an active subscription to view this video.
                </p>
                <a href="https://brainbased-wellness.com/membership/">
                    Subscribe Now
                </a>
                <button onClick={onClose}>Exit</button>
            </div>
        </div>
    );
};
export default AccessDeniedModal;
