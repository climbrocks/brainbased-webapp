// React Imports
import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";

import { listVideos, listCategories } from "../graphql/queries";

// Component Imports
import FilterBar from "../components/FilterBar";
import TagBar from "../components/TagBar";
import VideoGrid from "../components/VideoGrid";
import { fetchFavorites } from "../FavoritesUtils";

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);

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

        const fetchUserFavorites = async () => {
            const userFavorites = await fetchFavorites();
            setFavorites(userFavorites);
        };

        fetchVideos();
        fetchCategories();
        fetchUserFavorites();
    }, []);

    const handleFilterSelect = (filters) => {
        setSelectedFilters(filters);
    };

    const handleTagSelect = (tags) => {
        setSelectedTags(tags);
    };

    const filters = categories.map((category) => ({
        id: category.id, // Add the id property
        name: category.name,
    }));

    const tags = [
        "Tag1",
        "Tag2",
        "Tag3",
        "Tag4",
        "Tag5",
        "Tag6",
        "Tag7",
        "Tag8",
        "Tag9",
        "Tag10",
        "Tag11",
        "Tag12",
    ];

    return (
        <>
            <FilterBar
                filters={filters}
                selectedFilters={selectedFilters}
                onFilterSelect={handleFilterSelect}
            />
            <TagBar
                tags={tags}
                selectedTags={selectedTags}
                onTagSelect={handleTagSelect}
            />
            <VideoGrid
                videos={videos}
                filters={selectedFilters}
                favorites={favorites}
            />
        </>
    );
};

export default Home;
