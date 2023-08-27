import React, { useEffect, useState } from "react";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { useParams } from "react-router-dom";
import "./Home.scss";

import {
    listVideos,
    listCategories,
    listTags,
    listVideoTags,
    listTeachers,
} from "../graphql/queries";

import { createTag } from "../graphql/mutations";

// Component Imports
import FilterBar from "../components/FilterBar";
import TagBar from "../components/TagBar";
import VideoGrid from "../components/VideoGrid";
import useFavorites from "../FavoritesUtils";
//import CognitoData from "../components/CognitoData";
import FilterSideBar from "../components/FilterSideBar";

const Home = () => {
    const [tempUUID, setTempUUID] = useState(null);
    const storedTempUUID = localStorage.getItem("tempUUID");
    const { videoId } = useParams();
    const [playId, setPlayId] = useState([]);
    const [videos, setVideos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({
        category: [], // Your existing category filters
        duration: [], // Array to store selected duration filters
        teacher: [], // Array to store selected teacher filters
    });
    const { favorites, toggleFavorite } = useFavorites();
    const [selectedTags, setSelectedTags] = useState([]);
    const [videoTags, setVideoTags] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [instructors, setInstructors] = useState([]);

    const [filteredVideos, setFilteredVideos] = useState([]);

    useEffect(() => {
        if (storedTempUUID) {
            setTempUUID(storedTempUUID);
            setPlayId(storedTempUUID);
            localStorage.removeItem("tempUUID");
        } else {
            setPlayId(videoId);
            const newUrl = window.location.origin;
            window.history.pushState({}, document.title, newUrl);
        }
    }, []);

    const getUserInfo = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            const token = user.signInUserSession.idToken.jwtToken; // This can vary based on your specific setup
            console.log(token);
            // Now you can use the token to make a request to your Lambda function
        } catch (error) {
            console.error("Error fetching user info:", error);
        }
    };

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const videosResponse = await API.graphql(
                    graphqlOperation(listVideos)
                );
                const videosData = videosResponse.data.listVideos.items;
                setVideos(videosData);
                //console.log(videosData);
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

                // Sort the tags array by name before setting it to state
                const sortedTagsData = tagsData.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );

                setTags(sortedTagsData);
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
        // Fetch instructor data
        const fetchInstructors = async () => {
            try {
                const instructorsResponse = await API.graphql(
                    graphqlOperation(listTeachers)
                );
                const instructorsData =
                    instructorsResponse.data.listTeachers.items;
                setInstructors(instructorsData);
            } catch (error) {
                console.log("Error fetching instructors:", error);
            }
        };

        fetchVideos();
        fetchCategories();
        fetchTags();
        fetchVideoTags();
        fetchInstructors();
    }, []);

    const handleFilterSelect = (filters) => {
        //console.log("selected filters", filters);
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

    useEffect(() => {
        const handleResize = () => {
            // Check the current viewport width
            const width = window.innerWidth;

            // If the viewport width is less than 1000px, close the sidebar by default
            if (width < 1000) {
                setIsOpen(false);
            } else {
                setIsOpen(true);
            }
        };

        // Add the event listener
        window.addEventListener("resize", handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
                        instructors={instructors}
                        favoritesActive={selectedFilters.favorites}
                        favorites={favorites}
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
                        //initialFavorites={favorites}
                        favorites={favorites}
                        videoTags={videoTags}
                        videoId={playId}
                        onFavoriteToggle={handleFavoriteToggle}
                        toggleFavorites={toggleFavorite}
                        selectedTags={selectedTags}
                        instructors={instructors}
                        isOpen={isOpen}
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
