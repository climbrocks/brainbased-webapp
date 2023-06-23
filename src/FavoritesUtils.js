// favoritesUtils.js

import { API, graphqlOperation } from "aws-amplify";
import { listUserData } from "./graphql/queries";

export const fetchFavorites = async () => {
    try {
        // Retrieve the user's favorites from the database
        const userData = await API.graphql(graphqlOperation(listUserData));
        const userFavorites =
            userData?.data?.listUserData?.items[0]?.favorites || [];
        return userFavorites;
    } catch (error) {
        console.log("Error fetching user favorites:", error);
        return [];
    }
};

export default fetchFavorites;
