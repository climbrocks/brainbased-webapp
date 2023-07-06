// SCSS Imports
import "./MainNavigation.scss";

// React Imports
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CognitoData from "./CognitoData";

// Image Imports
import logo from "../images/logo.png";

//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserCircle,
    faBars,
    faCog,
    faUser,
    faWindowClose,
    faHome,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
    const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);
    const [isMainMenuOpen, setMainMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigationBarRef = useRef(null);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const user = CognitoData(); // Fetching user data from CognitoData component

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

    return (
        <div className="navigation-container">
            <nav ref={navigationBarRef} className="navigation-bar">
                <img className="logo" src={logo} alt="Logo" />
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
                            <Link
                                className="dropdown-content-link"
                                to="/dropdown2"
                            >
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
                            <Link className="dropdown-content-link" to="/">
                                <FontAwesomeIcon
                                    className="dropdown-content-link-icon"
                                    icon={faHome}
                                />
                                Home
                            </Link>
                            <Link
                                className="dropdown-content-link"
                                to="/dropdown3"
                            >
                                <FontAwesomeIcon
                                    className="dropdown-content-link-icon"
                                    icon={faWindowClose}
                                />
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
