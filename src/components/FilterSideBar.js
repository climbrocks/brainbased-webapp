// SCSS Imports
import "./FilterSideBar.scss";

// React Imports
import React, { useState } from "react";

// Component Imports

// Image Imports

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const FilterSideBar = ({
    isOpen,
    handleToggle,
    filters,
    selectedFilters,
    onFilterSelect,
    tags,
    selectedTags,
    onTagSelect,
}) => {
    const handleFilterSelect = (filter) => {
        const updatedFilters = [...selectedFilters]; // Create a copy of selectedFilters

        if (updatedFilters.includes(filter.id)) {
            // Filter already exists, remove it
            const index = updatedFilters.indexOf(filter.id);
            updatedFilters.splice(index, 1);
        } else {
            // Filter doesn't exist, add it
            updatedFilters.push(filter.id);
        }

        onFilterSelect(updatedFilters); // Pass the updated filters to the parent component
    };

    const handleTagSelect = (tagId) => {
        const updatedTags = selectedTags.includes(tagId)
            ? selectedTags.filter((id) => id !== tagId)
            : [...selectedTags, tagId];

        onTagSelect(updatedTags);
    };

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
                            {filters.map((filter, index) => (
                                <div
                                    key={index}
                                    className={`pill ${
                                        selectedFilters.includes(filter.id)
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() => handleFilterSelect(filter)}
                                >
                                    {filter.name}
                                </div>
                            ))}
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
                            {tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className={`pill ${
                                        selectedTags.includes(tag)
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() => handleTagSelect(tag)}
                                >
                                    {tag.name}
                                </div>
                            ))}
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
