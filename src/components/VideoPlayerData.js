// SCSS Imports
import "./VideoPlayerData.scss";

// React Imports
import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";

// Component Imports
import { createUserData, updateUserData } from "../graphql/mutations";
import { listUserData } from "../graphql/queries";
import CognitoData from "./CognitoData";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare } from "@fortawesome/free-solid-svg-icons";

const VideoPlayerData = ({ video, instructor, isFavorite }) => {
    const [favoriteStatus, setFavoriteStatus] = useState(isFavorite);
    const [favorites, setFavorites] = useState([]);

    const cognitoData = CognitoData();

    useEffect(() => {
        if (cognitoData && video) {
            const fetchUserData = async () => {
                try {
                    const existingUserData = await API.graphql(
                        graphqlOperation(listUserData, {
                            filter: {
                                cognitoSub: {
                                    eq: cognitoData.sub,
                                },
                            },
                        })
                    );

                    if (existingUserData.data.listUserData.items.length > 0) {
                        const userData =
                            existingUserData.data.listUserData.items[0];
                        setFavorites(userData.favorites);
                        setFavoriteStatus(
                            userData.favorites.includes(video.id)
                        );
                    }
                } catch (error) {
                    console.log("Error fetching user data:", error);
                }
            };

            fetchUserData();
        }
    }, [cognitoData, video]);

    const handleFavoriteClick = async () => {
        if (cognitoData) {
            try {
                let updatedFavorites = [...favorites];

                if (favoriteStatus) {
                    // Remove the video ID from favorites
                    updatedFavorites = updatedFavorites.filter(
                        (fav) => fav !== video.id
                    );
                } else {
                    // Add the video ID to favorites if it doesn't already exist
                    if (!updatedFavorites.includes(video.id)) {
                        updatedFavorites.push(video.id);
                    }
                }

                // Update the state immediately to reflect the current status of the favorite
                setFavoriteStatus(!favoriteStatus);
                setFavorites(updatedFavorites);

                const existingUserData = await API.graphql(
                    graphqlOperation(listUserData, {
                        filter: {
                            cognitoSub: {
                                eq: cognitoData.sub,
                            },
                        },
                    })
                );

                if (existingUserData.data.listUserData.items.length > 0) {
                    const existingRowId =
                        existingUserData.data.listUserData.items[0].id;
                    const existingVersion =
                        existingUserData.data.listUserData.items[0]._version;

                    await API.graphql(
                        graphqlOperation(updateUserData, {
                            input: {
                                id: existingRowId,
                                _version: existingVersion,
                                favorites: updatedFavorites,
                            },
                        })
                    );
                } else {
                    const input = {
                        cognitoSub: cognitoData.sub,
                        favorites: updatedFavorites,
                    };

                    await API.graphql(
                        graphqlOperation(createUserData, {
                            input,
                        })
                    );
                }
            } catch (error) {
                console.log("Error updating favorite status:", error);
            }
        }
    };

    if (!video) {
        return null; // Return null if video is undefined
    }

    const { title, description } = video;

    return (
        <div className="video-data-container">
            <div className="video-data">
                <div className="video-title-instructor">
                    <h4 className="breadcrumbs">Videos / Categories</h4>
                    <h1 className="video-title">{title}</h1>
                    <h3 className="video-instructor">
                        Instructor: {instructor}
                    </h3>
                </div>
                <p className="video-description">{description}</p>
                <div className="video-social-buttons">
                    <button onClick={handleFavoriteClick}>
                        <FontAwesomeIcon
                            className={`social-icon ${
                                favoriteStatus ? "favorite" : ""
                            }`}
                            icon={faHeart}
                        />
                        <span className="social-text">
                            {favoriteStatus
                                ? "Remove Favorite"
                                : "Add Favorite"}
                        </span>
                    </button>
                    <button>
                        <FontAwesomeIcon
                            className="social-icon"
                            icon={faShare}
                        />
                        <span className="social-text">Share</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayerData;
