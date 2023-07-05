import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listUserData } from "./graphql/queries";
import { createUserData, updateUserData } from "./graphql/mutations";

const useFavorites = (props) => {
    const cognitoData = props;
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                if (cognitoData) {
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
                    }
                }
            } catch (error) {
                console.log("Error fetching user favorites:", error);
            }
        };

        fetchFavorites();
    }, [cognitoData]);

    const toggleFavorite = async (videoId, isFavorite) => {
        try {
            if (cognitoData) {
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
