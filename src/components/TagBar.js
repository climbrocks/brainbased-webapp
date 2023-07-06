// SCSS Imports
import "./TagBar.scss";

// React Imports
import React, { useRef, useEffect } from "react";

const TagBar = ({ tags, selectedTags, onTagSelect }) => {
    const scrollableDivRef = useRef(null);

    useEffect(() => {
        const scrollableDiv = scrollableDivRef.current;

        const handleScroll = (e) => {
            const isMouseOverScrollableDiv =
                e.target === scrollableDiv || scrollableDiv.contains(e.target);

            if (isMouseOverScrollableDiv) {
                e.preventDefault();
                const scrollAmount = e.deltaY;
                scrollableDiv.scrollLeft += scrollAmount;
            }
        };

        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    const handleTagSelect = (tag) => {
        const updatedTags = selectedTags.includes(tag)
            ? selectedTags.filter((t) => t !== tag) // Remove the tag if it exists in the selectedTags
            : [...selectedTags, tag]; // Add the tag if it doesn't exist in the selectedTags

        onTagSelect(updatedTags); // Pass the updated tags to the parent component
    };

    return (
        <div className="tag-bar-container">
            <div className="tag-bar">
                <span>Tags:</span>
                <div className="tags scrollableDiv" ref={scrollableDivRef}>
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
        </div>
    );
};

export default TagBar;
