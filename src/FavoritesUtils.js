import { useEffect, useState, useCallback } from "react";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { listUserData } from "./graphql/queries";
import { createUserData, updateUserData } from "./graphql/mutations";

const useFavorites = () => {
    const [favorites, setFavorites] = useState([]);

    const fetchFavorites = useCallback(async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            const userSub = user.attributes.sub; // user's unique sub
            const { data } = await API.graphql(
                graphqlOperation(listUserData, {
                    filter: { cognitoSub: { eq: userSub } },
                })
            );
            let userData = data.listUserData.items[0];
            if (!userData) {
                // Create new userData
                const createResponse = await API.graphql(
                    graphqlOperation(createUserData, {
                        input: {
                            id: userSub,
                            cognitoSub: userSub,
                            favorites: [],
                        },
                    })
                );
                userData = createResponse.data.createUserData;
            }
            setFavorites(userData.favorites || []);
        } catch (error) {
            console.log("Error fetching user favorites:", error);
        }
    }, []);

    useEffect(() => {
        fetchFavorites();
    }, [fetchFavorites]);

    const toggleFavorite = async (videoId) => {
        try {
            let updatedFavorites = [...new Set(favorites ?? [])];   // Make sure there are no duplicate entries.
            if (favorites.includes(videoId)) {
                updatedFavorites = updatedFavorites.filter((fav) => fav !== videoId);   // Don't pull from favorites, use filter updatedFavorites.
            } else {
                updatedFavorites = [...updatedFavorites, videoId]; // Just append this video id to the updated favorites.
            }

            const user = await Auth.currentAuthenticatedUser();
            const userSub = user.attributes.sub; // user's unique sub

            await API.graphql(
                graphqlOperation(updateUserData, {
                    input: {
                        id: userSub,
                        cognitoSub: userSub,
                        favorites: updatedFavorites,
                    },
                })
            );
            setFavorites(updatedFavorites); // move this here
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
