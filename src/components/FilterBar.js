// SCSS Imports
import "./FilterBar.scss";

// React Imports
import React from "react";

// Component Imports

// Image Imports

// Font Awesome Icons

const FilterBar = ({ filters, selectedFilters, onFilterSelect }) => {
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

    return (
        <div className="filter-bar-container">
            <div className="filter-bar">
                {filters.map((filter, index) => (
                    <div
                        key={index}
                        className={`filter-item ${
                            selectedFilters.includes(filter.id) ? "active" : ""
                        }`}
                        onClick={() => handleFilterSelect(filter)}
                    >
                        {filter.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterBar;
