import React, { useEffect } from "react";
import { Auth } from "aws-amplify";

const AuthStatus = () => {
    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then((user) => console.log("User: ", user))
            .catch((err) => console.log(err));
    }, []);

    return null;
};

export default AuthStatus;
