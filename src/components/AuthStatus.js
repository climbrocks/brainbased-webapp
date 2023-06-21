import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

const AuthStatus = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            setIsAuthenticated(true);
        } catch (error) {
            setIsAuthenticated(false);
        }
    };

    return (
        <div>
            {isAuthenticated ? (
                <p>User is authenticated</p>
            ) : (
                <p>User is not authenticated</p>
            )}
        </div>
    );
};

export default AuthStatus;
