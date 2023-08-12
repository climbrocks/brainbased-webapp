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
            const user = await Auth.currentAuthenticatedUser();
            const userSub = user.attributes.sub; // user's unique sub

            // Fetch current user data including _version
            const { data } = await API.graphql(
                graphqlOperation(listUserData, {
                    filter: { cognitoSub: { eq: userSub } },
                })
            );
            const userData = data.listUserData.items[0];
            let updatedFavorites = [...(userData.favorites ?? [])]; // Use the favorites from fetched userData

            if (updatedFavorites.includes(videoId)) {
                updatedFavorites = updatedFavorites.filter(
                    (fav) => fav !== videoId
                );
            } else {
                updatedFavorites.push(videoId);
            }

            // Use the current _version to update user data
            await API.graphql(
                graphqlOperation(updateUserData, {
                    input: {
                        id: userSub,
                        cognitoSub: userSub,
                        favorites: updatedFavorites,
                        _version: userData._version, // Include the current version in the update
                    },
                })
            );

            setFavorites(updatedFavorites);
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
