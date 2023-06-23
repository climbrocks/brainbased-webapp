import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

function CognitoData() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser();
    }, []);

    // Function to fetch user data from AWS Cognito
    async function fetchUser() {
        try {
            const currentUser = await Auth.currentAuthenticatedUser();
            const userInfo = {
                sub: currentUser.attributes.sub,
                username: currentUser.username,
                userInitial: currentUser.username.slice(0, 1),
            };
            setUser(userInfo);
        } catch (error) {
            console.log("Error fetching user:", error);
        }
    }

    // Return user data or null
    return user;
}

export default CognitoData;
