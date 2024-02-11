// App.js
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    Navigate,
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
import axios from "axios";
//import { NavigationProvider, useNavigation } from "./NavigationContext";

// Routing
import Home from "./pages/Home";
import UserAccount from "./pages/UserAccount";
import VideoPlayer from "./pages/VideoPlayer";
import Play from "./pages/Play";
import { Button } from "@aws-amplify/ui-react";
import NotFound from "./components/NotFound";

Amplify.configure(awsconfig);
/*
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
                .then(() => {
                    setSignedIn(true);
                    // Check if it's a new login
                    if (localStorage.getItem("isNewLogin") === "true") {
                        // Redirect to the desired URL
                        console.log("flag was set");
                        //window.location.href = 'http://your-redirect-url.com';
                        // Clear the flag
                        //localStorage.removeItem('isNewLogin');
                    }
                })
                .catch(() => setSignedIn(false));
        }, []);
        /*
            Auth.currentAuthenticatedUser()
                .then(() => setSignedIn(true))
                .catch(() => setSignedIn(false));
        }, []);
*/
/*
        const handleFederatedSignIn = () => {
            Auth.federatedSignIn();
        };

        if (signedIn) {
            return <WrappedComponent {...props} />;
        } else {
            return (
                <>
                    {/* Pass the videoId parameter down to the SignInForSSO component }
                    <SignInForSSO federatedSignIn={handleFederatedSignIn} />
                </>
            );
        }
    };
};
*/

const withSSOAuthenticator = (WrappedComponent) => {
    return (props) => {
        const [signedIn, setSignedIn] = useState(false);

        useEffect(() => {
            Auth.currentAuthenticatedUser()
                .then(() => {
                    setSignedIn(true);
                    if (localStorage.getItem("isNewLogin") === "true") {
                        localStorage.removeItem("isNewLogin");
                    }
                })
                .catch(() => setSignedIn(false));
        }, []);

        if (!signedIn) {
            return <SignInForSSO federatedSignIn={Auth.federatedSignIn} />;
        }

        return <WrappedComponent {...props} />;
    };
};

const VERIFY_TOKEN_ENDPOINT =
    "https://staging.brainbased-wellness.com/cognito-sso/v1/verify-token";

const App = () => {
    /* Change app title */
    useEffect(() => {
        document.title = "Brain-Based Wellness | Home Page";
    }, []);

    const [isSignedIn, setIsSignedIn] = useState(false);
    const [redirectToHome, setRedirectToHome] = useState(false);
    //const navigate = useNavigate();
    const [tempUUID, setTempUUID] = useState(null);
    //const navigate = useNavigate();
    const handleSignOut = async () => {
        try {
            await Auth.signOut();
            setIsSignedIn(false);
            window.location.reload();
        } catch (err) {
            console.error("Error signing out: ", err);
        }
    };

    // Function to handle token authentication
    const authenticateWithToken = async () => {
        const searchParams = new URLSearchParams(window.location.search);
        const token = searchParams.get("token");
        console.log("Token from URL:", token);

        if (token) {
            try {
                // Send the token to your backend for verification
                console.log("Sending token for verification:", token);
                const response = await axios.post(VERIFY_TOKEN_ENDPOINT, {
                    token,
                });
                console.log("Verification response:", response.data);

                if (response.data.isValid) {
                    // If the token is valid, set the user as signed in
                    setIsSignedIn(true);
                    // Optionally, you can store user info in the state or context
                    // setUser(response.data.user);

                    // Clear the token from the URL to prevent token reuse
                    window.history.replaceState(
                        null,
                        null,
                        window.location.pathname
                    );
                } else {
                    console.log("Token is invalid or verification failed.");
                }
            } catch (error) {
                console.error("Error verifying token:", error);
            }
        }
    };

    useEffect(() => {
        console.log("trying token");
        authenticateWithToken(); // Attempt to authenticate with a token first
        // Check if the user is signed in
        Auth.currentAuthenticatedUser()
            .then(() => setIsSignedIn(true))
            .catch(() => setIsSignedIn(false));
    }, [isSignedIn]);

    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };
    useEffect(() => {
        const handleResize = () => {
            // Check the current viewport width
            const width = window.innerWidth;

            // If the viewport width is less than 1000px, close the sidebar by default
            if (width < 1250) {
                setIsOpen(false);
                //handleToggle();
            } else {
                setIsOpen(true);
                //handleToggle();
            }
        };
        // Immediately call handleResize to set the correct state on initial render
        handleResize();

        // Add the event listener
        window.addEventListener("resize", handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Router>
            <MainNavigation
                onSignOut={handleSignOut}
                isOpen={isOpen}
                handleToggle={handleToggle}
            />

            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route
                        index
                        element={
                            <Home isOpen={isOpen} handleToggle={handleToggle} />
                        }
                    />
                    <Route
                        path="/home/:videoId?"
                        element={
                            <Home isOpen={isOpen} handleToggle={handleToggle} />
                        }
                    />
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
