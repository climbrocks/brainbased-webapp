// SCSS Imports

// React Imports
import React, { useState } from "react";

// Component Imports
import FilterBar from "../components/FilterBar.js";
import VideoGrid from "../components/VideoGrid.js";

const Home = () => {
    const videos = [
        {
            id: 1,
            title: "Video 1",
            categories: ["category1", "category2"],
            url: "https://archive.org/download/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4",
        },
        {
            id: 2,
            title: "Video 2",
            categories: ["category2", "category3"],
            url: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        },
        // Add more video objects as needed
    ];

    const allFilters = ["category1", "category2", "category3", "category4"];

    // State to keep track of selected filters
    const [selectedFilters, setSelectedFilters] = useState([]);

    // Handler for filter selection
    const handleFilterSelect = (selectedFilters) => {
        setSelectedFilters(selectedFilters);
    };

    return (
        <>
            <FilterBar
                filters={allFilters}
                selectedFilters={selectedFilters}
                onFilterSelect={handleFilterSelect}
            />
            <VideoGrid videos={videos} filters={selectedFilters} />
        </>
    );
};
export default Home;
