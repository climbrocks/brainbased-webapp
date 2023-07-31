// ProtectedRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({
    component: Component,
    isSignedIn,
    redirectTo,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            element={
                isSignedIn ? (
                    <Component />
                ) : (
                    <Navigate
                        to={redirectTo}
                        state={{ from: rest.location }} // Preserve the location state for redirection after login
                    />
                )
            }
        />
    );
};

export default ProtectedRoute;
