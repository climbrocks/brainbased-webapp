// App.js
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    //useNavigate,
} from "react-router-dom";
import "./App.scss";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, Auth, Hub } from "aws-amplify";
import awsconfig from "./aws-exports";
import React, { useEffect, useState } from "react";
import MainNavigation from "./components/MainNavigation.js";
import AuthStatus from "./components/AuthStatus";
import SignInForSSO from "./components/SignInForSSO";
import Footer from "./components/Footer";
//import { NavigationProvider, useNavigation } from "./NavigationContext";

// Routing
import Home from "./pages/Home";
import UserAccount from "./pages/UserAccount";
import VideoPlayer from "./pages/VideoPlayer";
import Play from "./pages/Play";
import { Button } from "@aws-amplify/ui-react";
import NotFound from "./components/NotFound";

Amplify.configure(awsconfig);

const withSSOAuthenticator = (WrappedComponent) => {
    return (props) => {
        const [signedIn, setSignedIn] = useState(false);

        useEffect(() => {
            Hub.listen("auth", ({ payload: { event } }) => {
                switch (event) {
                    case "signIn":
                        setSignedIn(true);
                        break;
                    case "signOut":
                        setSignedIn(false);
                        break;
                    default:
                        break;
                }
            });
            Auth.currentAuthenticatedUser()
                .then(() => setSignedIn(true))
                .catch(() => setSignedIn(false));
        }, []);

        const handleFederatedSignIn = () => {
            Auth.federatedSignIn();
        };

        if (signedIn) {
            return <WrappedComponent {...props} />;
        } else {
            return (
                <>
                    {/* Pass the videoId parameter down to the SignInForSSO component */}
                    <SignInForSSO federatedSignIn={handleFederatedSignIn} />
                </>
            );
        }
    };
};

const App = () => {
    /* Change app title */
    useEffect(() => {
        document.title = "Brain-Based Wellness | Home Page";
    }, []);

    const [isSignedIn, setIsSignedIn] = useState(false);
    const [tempUUID, setTempUUID] = useState(null);
    //const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is signed in
        Auth.currentAuthenticatedUser()
            .then(() => setIsSignedIn(true))
            .catch(() => setIsSignedIn(false));
    }, [isSignedIn]);

    return (
        <Router>
            <MainNavigation />

            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<Home />} />
                    <Route path="/home/:videoId?" element={<Home />} />
                    <Route path="play/:videoId?" element={<Play />} />
                </Route>
                <Route
                    path="/UserAccount"
                    element={withSSOAuthenticator(UserAccount)}
                />
                <Route
                    path="/videoplayer"
                    element={withSSOAuthenticator(VideoPlayer)}
                />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default withSSOAuthenticator(App);
