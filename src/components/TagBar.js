// SCSS Imports
import "./TagBar.scss";

// React Imports
import React from "react";

const TagBar = ({ tags, selectedTags, onTagSelect }) => {
    const handleTagSelect = (tag) => {
        const updatedTags = selectedTags.includes(tag)
            ? selectedTags.filter((t) => t !== tag) // Remove the tag if it exists in the selectedTags
            : [...selectedTags, tag]; // Add the tag if it doesn't exist in the selectedTags

        onTagSelect(updatedTags); // Pass the updated tags to the parent component
    };

    return (
        <div className="tag-bar-container">
            <div className="tag-bar">
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        className={`tag-item ${
                            selectedTags.includes(tag) ? "active" : ""
                        }`}
                        onClick={() => handleTagSelect(tag)}
                    >
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TagBar;
