// React Imports
import React, { useEffect, useState, useRef } from "react";
import { Amplify, DataStore, Storage } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { Flex, View, Button } from "@aws-amplify/ui-react";
import { Category, Video } from "../models";
import awsconfig from "../aws-exports";

// Component Imports
import FilterBar from "../components/FilterBar.js";
import VideoGrid from "../components/VideoGrid.js";

Amplify.configure(awsconfig);

const Home = () => {
    const [videos, setVideos] = useState([]);

    const allFilters = ["category1", "category2", "category3", "category4"];

    // State to keep track of selected filters
    const [selectedFilters, setSelectedFilters] = useState([]);

    // Handler for filter selection
    const handleFilterSelect = (selectedFilters) => {
        setSelectedFilters(selectedFilters);
    };

    useEffect(() => {
        const fetchVideos = async () => {
            const fetchedVideos = await DataStore.query(Video);
            setVideos(fetchedVideos);
        };

        fetchVideos();
    }, []);

    console.log(videos);

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
