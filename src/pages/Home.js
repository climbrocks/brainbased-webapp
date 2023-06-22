// React Imports
import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";

import { listVideos, listCategories } from "../graphql/queries";

// Component Imports
import FilterBar from "../components/FilterBar";
import VideoGrid from "../components/VideoGrid";

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const videosResponse = await API.graphql(
                    graphqlOperation(listVideos)
                );
                const videosData = videosResponse.data.listVideos.items;
                setVideos(videosData);
            } catch (error) {
                console.log("Error fetching videos:", error);
            }
        };

        const fetchCategories = async () => {
            try {
                const categoriesResponse = await API.graphql(
                    graphqlOperation(listCategories)
                );
                const categoriesData =
                    categoriesResponse.data.listCategories.items;
                setCategories(categoriesData);
            } catch (error) {
                console.log("Error fetching categories:", error);
            }
        };

        fetchVideos();
        fetchCategories();
    }, []);

    const handleFilterSelect = (filters) => {
        setSelectedFilters(filters);
    };

    const filters = categories.map((category) => ({
        id: category.id, // Add the id property
        name: category.name,
    }));

    return (
        <>
            <FilterBar
                filters={filters}
                selectedFilters={selectedFilters}
                onFilterSelect={handleFilterSelect}
            />
            <VideoGrid videos={videos} filters={selectedFilters} />
        </>
    );
};

export default Home;
