import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { useParams } from "react-router-dom";
import "./Home.scss";

import {
    listVideos,
    listCategories,
    listTags,
    listVideoTags,
} from "../graphql/queries";

// Component Imports
import FilterBar from "../components/FilterBar";
import TagBar from "../components/TagBar";
import VideoGrid from "../components/VideoGrid";
import useFavorites from "../FavoritesUtils";
import CognitoData from "../components/CognitoData";
import FilterSideBar from "../components/FilterSideBar";

const Home = () => {
    const { videoId } = useParams();
    const [videos, setVideos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const { favorites, toggleFavorite } = useFavorites({ CognitoData });
    const [selectedTags, setSelectedTags] = useState([]);
    const [videoTags, setVideoTags] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const [filteredVideos, setFilteredVideos] = useState([]);

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

        const fetchTags = async () => {
            try {
                const tagsResponse = await API.graphql(
                    graphqlOperation(listTags)
                );
                const tagsData = tagsResponse.data.listTags.items;
                setTags(tagsData);
            } catch (error) {
                console.log("Error fetching tags:", error);
            }
        };

        const fetchVideoTags = async () => {
            try {
                const videoTagsResponse = await API.graphql(
                    graphqlOperation(listVideoTags)
                );
                const videoTagsData =
                    videoTagsResponse.data.listVideoTags.items;
                setVideoTags(videoTagsData);
                //console.log(videoTagsData);
                //console.log(videoTagsData[0].tag.id);
            } catch (error) {
                console.log("Error fetching video tags:", error);
            }
        };

        fetchVideos();
        fetchCategories();
        fetchTags();
        fetchVideoTags();
    }, []);

    const handleFilterSelect = (filters) => {
        setSelectedFilters(filters);
    };

    const handleTagSelect = (selectedTags) => {
        setSelectedTags(selectedTags);
    };

    const filters = categories.map((category) => ({
        id: category.id,
        name: category.name,
    }));

    //const tagNames = tags.map((tag) => tag.name);

    const handleFavoriteToggle = (videoId, isFavorite) => {
        toggleFavorite(videoId, isFavorite);
    };

    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <>
            {/* <FilterBar
                filters={filters}
                selectedFilters={selectedFilters}
                onFilterSelect={handleFilterSelect}
            />
            <TagBar
                tags={tags}
                selectedTags={selectedTags}
                onTagSelect={handleTagSelect}
            /> */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: isOpen
                        ? "minmax(0, 360px) auto"
                        : "0 auto",
                    gridTemplateAreas: "filterbar video-grid",
                    transition: "grid-template-columns 0.3s ease-in-out",
                }}
            >
                <div
                    className={`filter-sidebar-component ${
                        isOpen ? "open" : "closed"
                    }`}
                    style={{
                        marginTop: "72px",
                        marginLeft: isOpen ? "0" : "-360px",
                        transition: "margin-left 0.3s ease-in-out",
                    }}
                >
                    <FilterSideBar
                        isOpen={isOpen}
                        handleToggle={handleToggle}
                        filters={filters}
                        selectedFilters={selectedFilters}
                        onFilterSelect={handleFilterSelect}
                        tags={tags}
                        selectedTags={selectedTags}
                        onTagSelect={handleTagSelect}
                    />
                </div>
                <div
                    className="video-grid-component"
                    style={{
                        marginTop: "72px",
                        width: isOpen ? "calc(100%)" : "calc(100% - 25px)",
                        marginLeft: isOpen ? "0" : "25px",
                        transition: "all 0.3s ease-in-out",
                    }}
                >
                    <VideoGrid
                        videos={videos}
                        filters={selectedFilters}
                        initialFavorites={favorites}
                        videoTags={videoTags}
                        videoId={videoId}
                        onFavoriteToggle={handleFavoriteToggle}
                        selectedTags={selectedTags}
                        isOpen={isOpen}
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
