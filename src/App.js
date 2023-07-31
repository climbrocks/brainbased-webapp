import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import "./App.scss";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, Auth, Hub } from "aws-amplify";
import awsconfig from "./aws-exports";
import React, { useEffect, useState } from "react";
import MainNavigation from "./components/MainNavigation.js";
import AuthStatus from "./components/AuthStatus";
import Footer from "./components/Footer";

// Routing
import Home from "./pages/Home";
import UserAccount from "./pages/UserAccount";
import VideoPlayer from "./pages/VideoPlayer";
import Play from "./pages/Play";
import { Button } from "@aws-amplify/ui-react";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

Amplify.configure(awsconfig);

const withSSOAuthenticator = (WrappedComponent) => {
    const devLink = () => {
        window.open(
            "https://brainbased.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=1algn769duhhvjloeprslm0d1v&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+profile&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth"
        );
    };

    const prodLink = () => {
        window.open(
            "https://brainbased.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=1algn769duhhvjloeprslm0d1v&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+profile&redirect_uri=https%3A%2F%2Fmain.d1t4o8gwtbnlae.amplifyapp.com%2Fauth"
        );
    };
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

        if (signedIn) {
            return <WrappedComponent {...props} />;
        } else {
            return (
                <>
                    <Button onClick={devLink}>
                        Click here to sign in for local dev environment
                    </Button>
                    <Button onClick={prodLink}>
                        Click here to sign in for live prod environment
                    </Button>
                </>
            );
        }
    };
};

const App = () => {
    /* Change app title */
    useEffect(() => {
        document.title = "Brain Based Wellness";
    }, []);

    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        // Check if the user is signed in
        Auth.currentAuthenticatedUser()
            .then(() => setIsSignedIn(true))
            .catch(() => setIsSignedIn(false));
    }, []);

    // Helper function to render the UserAccount component or redirect to the login page
    const renderUserAccount = () => {
        return isSignedIn ? <UserAccount /> : <Navigate to="/auth" />;
    };

    // Helper function to render the VideoPlayer component or redirect to the login page
    const renderVideoPlayer = () => {
        return isSignedIn ? <VideoPlayer /> : <Navigate to="/auth" />;
    };

    // Helper function to render the Play component or redirect to the login page
    const renderPlay = () => {
        return isSignedIn ? <Play /> : <Navigate to="/auth" />;
    };

    return (
        <Router>
            <MainNavigation />

            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/home/:videoId?" element={<Home />} />
                {/* <Route path="/UserAccount" element={<UserAccount />} />
                <Route path="/videoplayer" element={<VideoPlayer />} />
                <Route path="/play/:videoId?" element={<Play />} /> */}
                <Route path="/contact" />
                <Route path="/auth" element={<AuthStatus />} />

                <Route path="/UserAccount" element={renderUserAccount} />
                <Route path="/videoplayer" element={renderVideoPlayer} />
                <Route path="/play/:videoId?" element={renderPlay} />

                {/* 404 Not Found */}
                <Route path="/*" element={<NotFound />} />
            </Routes>

            {/* <Footer /> */}
        </Router>
    );
};

export default withSSOAuthenticator(App);
