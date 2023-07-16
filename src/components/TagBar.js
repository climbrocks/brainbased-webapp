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

    const handleTagSelect = (tagId) => {
        const updatedTags = selectedTags.includes(tagId)
            ? selectedTags.filter((id) => id !== tagId)
            : [...selectedTags, tagId];

        onTagSelect(updatedTags);
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
                            {tag.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TagBar;
