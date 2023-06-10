import "./MainNavigation.scss";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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

    return (
        <div className="navigation-container">
            <nav className="navigation-bar">
                <img className="logo" src={logo} />
                <div className="links">
                    <Link to="/"></Link>
                    <Link to="/about"></Link>
                    <Link to="/contact"></Link>
                </div>
                <div className="dropdowns" ref={dropdownRef}>
                    <div
                        className={`dropdown account-dropdown ${
                            isAccountDropdownOpen ? "active" : ""
                        }`}
                    >
                        <button
                            className="dropdown-button"
                            onClick={toggleAccountDropdown}
                        >
                            <FontAwesomeIcon
                                className="dropdown-icon"
                                icon={faUserCircle}
                            />
                        </button>
                        <div className="dropdown-content">
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
                        <div className="dropdown-content">
                            <Link
                                className="dropdown-content-link"
                                to="/dropdown3"
                            >
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
