// SCSS Imports
import "./FilterSideBar.scss";

// React Imports
import React, { useState } from "react";

// Component Imports

// Image Imports

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const FilterSideBar = ({ isOpen, handleToggle }) => {
    return (
        <div
            className={`filter-side-bar-container ${
                isOpen ? "open" : "closed"
            }`}
        >
            <div className="left">
                <div className="filter-side-bar-content">
                    <div className="filter-section favorites">
                        <p>
                            <FontAwesomeIcon
                                style={{ marginRight: "5px" }}
                                icon={faHeart}
                            />
                            My Favorites
                        </p>
                    </div>
                    <div className="filter-section class-type">
                        <h3>Class-Type</h3>
                        <div className="pill-box">
                            <p className="pill">WOrds</p>
                            <p className="pill">More Words</p>
                            <p className="pill">Longer Word</p>
                            <p className="pill">Wat up</p>
                            <p className="pill">Longer Word</p>
                            <p className="pill">Short</p>
                            <p className="pill">Neuro Stuff</p>
                        </div>
                    </div>
                    <div className="filter-section duration">
                        <h3>Duration</h3>
                        <ul>
                            <li>
                                <input type="checkbox" />
                                &#60;15min
                            </li>
                            <li>
                                <input type="checkbox" />
                                15 - 30min
                            </li>
                            <li>
                                <input type="checkbox" />
                                30 - 45min
                            </li>
                            <li>
                                <input type="checkbox" />
                                45 - 15min
                            </li>
                            <li>
                                <input type="checkbox" />
                                &#62;60min
                            </li>
                        </ul>
                    </div>
                    <div className="filter-section teacher">
                        <h3>Teachers</h3>
                        <ul>
                            <li>
                                <input type="checkbox" />
                                Elisabeth Kristof
                            </li>
                            <li>
                                <input type="checkbox" />
                                Jennifer Wallace
                            </li>
                            <li>
                                <input type="checkbox" />
                                Jennifer Simpson
                            </li>
                        </ul>
                    </div>
                    <div className="filter-section class-focus">
                        <h3>Class Focus</h3>
                        <div className="pill-box">
                            <p className="pill">WOrds</p>
                            <p className="pill">More Words</p>
                            <p className="pill">Longer Word</p>
                            <p className="pill">Wat up</p>
                            <p className="pill">Longer Word</p>
                            <p className="pill">Short</p>
                            <p className="pill">Neuro Stuff</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                {/* Toggle button */}
                <button className="filter-toggle-button" onClick={handleToggle}>
                    {isOpen ? "<" : " >"}
                </button>
            </div>
        </div>
    );
};
export default FilterSideBar;
