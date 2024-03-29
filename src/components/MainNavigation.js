// SCSS Imports
import "./MainNavigation.scss";

// React Imports
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CognitoData from "./CognitoData";

// Image Imports
import logo from "../images/logo-large.png";
import smallLogo from "../images/logo-small.png";

//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserCircle,
    faBars,
    faCog,
    faUser,
    faWindowClose,
    faHome,
    faAngleDoubleLeft,
    faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

import { Auth } from "aws-amplify";
import { faRev } from "@fortawesome/free-brands-svg-icons";

const Navigation = ({ isOpen, handleToggle, onSignOut }) => {
    const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);
    const [isMainMenuOpen, setMainMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigationBarRef = useRef(null);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const user = CognitoData(); // Fetching user data from CognitoData component
    const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(isOpen);
    const toggleFilterSidebar = () => {
        const newOpenState = !isFilterSidebarOpen;
        setIsFilterSidebarOpen(newOpenState);
        handleToggle(newOpenState);
    };
    const handleSignOut = async () => {
        try {
            await Auth.signOut();
            onSignOut(); // Call the callback passed from App.js
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        setIsFilterSidebarOpen(isOpen);
    }, [isOpen]);

    const toggleAccountDropdown = () => {
        setAccountDropdownOpen(!isAccountDropdownOpen);
        if (isMainMenuOpen) {
            setMainMenuOpen(false);
        }
    };

    const toggleMainMenu = () => {
        setMainMenuOpen(!isMainMenuOpen);
        if (isAccountDropdownOpen) {
            setAccountDropdownOpen(false);
        }
    };

    const closeDropdowns = () => {
        setAccountDropdownOpen(false);
        setMainMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                closeDropdowns();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const calculateRightAttribute = () => {
        if (navigationBarRef.current) {
            // Replace 'otherComponentWidth' with the actual width of the other component
            const navigationBarWidth = navigationBarRef.current.offsetWidth;

            // Calculate the value for the 'right' CSS attribute
            const rightValue = (viewportWidth - navigationBarWidth) / 2;

            return `${rightValue}px`;
        }
        return "auto";
    };

    const redirectHome = () => {
        //window.location.href =
        //  "https://brainbased-prod-ssotest.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=3flqa7mpf4l5g969mbq34vuph0&response_type=token&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fbrainbased-wellness.com%2Fcognito-intermediate%2F";

        let idToken = null;
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (/CognitoIdentityServiceProvider\..*\.idToken/.test(key)) {
                idToken = localStorage.getItem(key);
                console.log(idToken);
                break; // Assuming you need only one token, break the loop once found
            }
        }
        if (idToken) {
            // Construct the URL with the idToken
            const redirectUrl = `https://brainbased-wellness.com/cognito-intermediate/#id_token=${encodeURIComponent(
                idToken
            )}`;
            window.location.href = redirectUrl;
        } else {
            // Handle the case where the idToken is not found
            console.error("idToken not found in localStorage");
            // Optional: Redirect to a fallback URL or show an error message
        }
    };

    return (
        <div className="navigation-container">
            <nav ref={navigationBarRef} className="navigation-bar">
                <img
                    className="logo"
                    src={viewportWidth <= 460 ? smallLogo : logo}
                    alt="Logo"
                />
                <div className="links">
                    {/* SAVED FOR LATER 
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                    */}
                </div>
                <div className="dropdowns" ref={dropdownRef}>
                    <div
                        className={`dropdown account-dropdown ${
                            isAccountDropdownOpen ? "active" : ""
                        }`}
                    >
                        <button
                            /* UNCOMMENT WHEN USED AS A DROPDOWN
                            className="dropdown-button"
                            onClick={toggleAccountDropdown}
                            */
                            className="account-button"
                        >
                            <span className="dropdown-button-text">
                                {user ? user.username : "Loading..."}
                            </span>

                            <FontAwesomeIcon
                                className="dropdown-icon"
                                icon={faUserCircle}
                            />
                        </button>
                        <div
                            className="dropdown-content"
                            style={{ right: calculateRightAttribute() }}
                        >
                            <Link
                                className="dropdown-content-link"
                                to="/UserAccount"
                            >
                                <FontAwesomeIcon
                                    className="dropdown-content-link-icon"
                                    icon={faUser}
                                />
                                Account
                            </Link>
                            <Link className="dropdown-content-link" to="">
                                <FontAwesomeIcon
                                    className="dropdown-content-link-icon"
                                    icon={faCog}
                                />
                                Account Settings
                            </Link>
                        </div>
                    </div>
                    <div
                        className={`dropdown main-menu ${
                            isMainMenuOpen ? "active" : ""
                        }`}
                    >
                        <button
                            className="dropdown-button"
                            onClick={toggleMainMenu}
                        >
                            <FontAwesomeIcon
                                className="dropdown-icon"
                                icon={faBars}
                            />
                        </button>
                        <div
                            className="dropdown-content"
                            style={{ right: calculateRightAttribute() }}
                        >
                            <Link
                                className="dropdown-content-link"
                                onClick={toggleFilterSidebar}
                            >
                                <FontAwesomeIcon
                                    className="dropdown-content-link-icon"
                                    icon={
                                        isFilterSidebarOpen
                                            ? faAngleDoubleLeft
                                            : faAngleDoubleRight
                                    }
                                />
                                {isFilterSidebarOpen
                                    ? "Hide Filters"
                                    : "Show Filters"}
                                {/* May change to Library with new icon */}
                            </Link>
                            <Link
                                className="dropdown-content-link"
                                to="/"
                                onClick={redirectHome}
                            >
                                <FontAwesomeIcon
                                    className="dropdown-content-link-icon"
                                    icon={faHome}
                                />
                                Go Home
                            </Link>
                            <Link
                                className="dropdown-content-link"
                                onClick={handleSignOut}
                            >
                                <FontAwesomeIcon
                                    className="dropdown-content-link-icon"
                                    icon={faWindowClose}
                                />
                                Log Out
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
