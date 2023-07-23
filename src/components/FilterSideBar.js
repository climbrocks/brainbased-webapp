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
    instructors,
}) => {
    const [selectedDurationFilters, setSelectedDurationFilters] = useState([]);

    const handleFilterSelect = (filter) => {
        if (filter.type === "duration") {
            // Update the duration filter in the parent component
            const updatedDurationFilters = selectedDurationFilters.includes(
                filter.value
            )
                ? selectedDurationFilters.filter(
                      (duration) => duration !== filter.value
                  )
                : [...selectedDurationFilters, filter.value];

            setSelectedDurationFilters(updatedDurationFilters);

            // Create a new selectedFilters object with updated duration filters
            const updatedFilters = {
                ...selectedFilters,
                duration: updatedDurationFilters,
            };

            onFilterSelect(updatedFilters); // Pass the updated filters to the parent component
        } else if (filter.type === "teacher") {
            // Update the teacher filter in the parent component
            const updatedTeachers = selectedFilters.teacher.includes(
                filter.value
            )
                ? selectedFilters.teacher.filter(
                      (teacherId) => teacherId !== filter.value
                  )
                : [...selectedFilters.teacher, filter.value];

            onFilterSelect({
                ...selectedFilters,
                teacher: updatedTeachers,
            });
        } else {
            // Handle other filters (categories)
            const updatedFilters = {
                ...selectedFilters,
                category: [...selectedFilters.category], // Create a copy of selected category filters
            };

            if (updatedFilters.category.includes(filter.id)) {
                // Filter already exists, remove it
                const index = updatedFilters.category.indexOf(filter.id);
                updatedFilters.category.splice(index, 1);
            } else {
                // Filter doesn't exist, add it
                updatedFilters.category.push(filter.id);
            }

            onFilterSelect(updatedFilters); // Pass the updated filters to the parent component
        }
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
                                        selectedFilters.category.includes(
                                            filter.id
                                        ) // Check if filter.id is in the category filter array
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleFilterSelect({
                                            type: "category",
                                            ...filter,
                                        })
                                    }
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
                                <input
                                    type="checkbox"
                                    checked={selectedDurationFilters.includes(
                                        "<15"
                                    )}
                                    onChange={() =>
                                        handleFilterSelect({
                                            type: "duration",
                                            value: "<15",
                                        })
                                    }
                                />
                                &#60; 15 min
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    checked={selectedDurationFilters.includes(
                                        "15-30"
                                    )}
                                    onChange={() =>
                                        handleFilterSelect({
                                            type: "duration",
                                            value: "15-30",
                                        })
                                    }
                                />
                                15 - 30 min
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    checked={selectedDurationFilters.includes(
                                        "30-60"
                                    )}
                                    onChange={() =>
                                        handleFilterSelect({
                                            type: "duration",
                                            value: "30-60",
                                        })
                                    }
                                />
                                30 - 60 min
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    checked={selectedDurationFilters.includes(
                                        ">60"
                                    )}
                                    onChange={() =>
                                        handleFilterSelect({
                                            type: "duration",
                                            value: ">60",
                                        })
                                    }
                                />
                                &#62; 60 min
                            </li>
                        </ul>
                    </div>
                    <div className="filter-section teacher">
                        <h3>Teachers</h3>
                        <ul>
                            {instructors.map((instructor, index) => (
                                <li key={index}>
                                    <input
                                        type="checkbox"
                                        checked={selectedFilters.teacher.includes(
                                            instructor.id
                                        )}
                                        onChange={() =>
                                            handleFilterSelect({
                                                type: "teacher",
                                                value: instructor.id,
                                            })
                                        }
                                    />
                                    {instructor.name}
                                </li>
                            ))}
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
