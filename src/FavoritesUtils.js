import { useEffect, useState, useCallback } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listUserData } from "./graphql/queries";
import { createUserData, updateUserData } from "./graphql/mutations";

const useFavorites = () => {
    const [favorites, setFavorites] = useState([]);

    const fetchFavorites = useCallback(async () => {
        try {
            const { data } = await API.graphql(graphqlOperation(listUserData));
            const userData = data.listUserData.items[0];
            if (userData && userData.favorites) {
                setFavorites(userData.favorites);
            }
        } catch (error) {
            console.log("Error fetching user favorites:", error);
        }
    }, []);

    useEffect(() => {
        fetchFavorites();
    }, [fetchFavorites]);

    const toggleFavorite = async (videoId, isFavorite) => {
        try {
            let updatedFavorites = [...favorites];

            if (isFavorite) {
                // Remove the video ID from favorites
                updatedFavorites = updatedFavorites.filter(
                    (fav) => fav !== videoId
                );
            } else {
                // Add the video ID to favorites if it doesn't already exist
                if (!updatedFavorites.includes(videoId)) {
                    updatedFavorites.push(videoId);
                }
            }

            setFavorites(updatedFavorites);

            const { data } = await API.graphql(graphqlOperation(listUserData));
            const existingUserData = data.listUserData.items[0];

            if (existingUserData) {
                const existingRowId = existingUserData.id;
                const existingVersion = existingUserData._version;

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
                    favorites: updatedFavorites,
                };

                await API.graphql(
                    graphqlOperation(createUserData, {
                        input,
                    })
                );
            }
        } catch (error) {
            console.log("Error toggling favorite:", error);
        }
    };

    return {
        favorites,
        toggleFavorite,
    };
};

export default useFavorites;
