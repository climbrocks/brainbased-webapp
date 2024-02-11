import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import logo from "../images/logo.png";
import ForgotUsername from "./ForgotUsername";
import ForgotPassword from "./ForgotPassword";
import "./SignInForSSO.scss";
import axios from "axios";

const VERIFY_TOKEN_ENDPOINT =
    "https://staging.brainbased-wellness.com/wp-json/cognito-sso/v1/verify-token";

const SignInForSSO = ({ federatedSignIn }) => {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showSignIn, setShowSignIn] = useState(true); // New state for toggling forms
    const [showForgotUsername, setShowForgotUsername] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [user, setUser] = useState(null); // State to hold user data if already logged in

    const verifyTokenAndAuthenticateUser = async () => {
        const searchParams = new URLSearchParams(window.location.search);
        const token = searchParams.get("token");
        if (window.location.pathname.includes("play")) {
            localStorage.setItem(
                "redirectToAfterLogin",
                window.location.pathname + window.location.search
            );
        }

        // First, check if the user is already authenticated
        try {
            const currentUser = await Auth.currentAuthenticatedUser();
            setUser(currentUser); // Update state with current user
            setLoading(false); // Since user is already authenticated, stop loading
            // No need to verify token since user is already authenticated
            console.log("User already authenticated:", currentUser);
            const clearURLParams = () => {
                if (searchParams.has("token")) {
                    window.history.replaceState(
                        null,
                        null,
                        window.location.origin
                    );
                }
            };
            clearURLParams();
            return; // Exit the function early
        } catch (error) {
            console.log(
                "No authenticated user found, proceeding with token verification"
            );
        }
        if (token) {
            //setLoading(true);
            localStorage.setItem("isTokenVerified", "true");
            /*
            try {
                const response = await axios.post(VERIFY_TOKEN_ENDPOINT, {
                    token,
                });

                if (response.data.isValid) {
                    console.log("Token verified successfully:", response.data);
                    localStorage.setItem("isTokenVerified", "true");
                } else {
                    // Token invalid, show error or fallback to regular sign-in
                    setError("Session expired. Please sign in again.");
                }
            } catch (error) {
                console.error("Error during token verification:", error);
                setError("An error occurred during authentication.");
            } finally {
                setLoading(false);
            }
            */
        }
    };

    useEffect(() => {
        // Trigger the token verification when component mounts
        verifyTokenAndAuthenticateUser();
    }, []);

    const handleToggleForms = (formToShow) => {
        setShowSignIn(formToShow === "signIn");
        setShowForgotUsername(formToShow === "forgotUsername");
        setShowForgotPassword(formToShow === "forgotPassword");
    };

    const onUsernameRetrieval = async (email, setMessage) => {
        setMessage("");

        try {
            const response = await fetch(
                "https://rsnrwduyvjmbdp6jan2tbtuhte0vltbo.lambda-url.us-east-1.on.aws/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email }),
                }
            );

            const data = await response.json();
            if (response.ok) {
                setMessage(
                    "If an account exists for this email, we will send the username."
                );
            } else {
                setMessage(
                    data.message || "An error occurred. Please try again."
                );
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred. Please try again.");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setLoading(true);

        try {
            await Auth.signIn(username, password)
                .then(() => Auth.currentSession())
                .then((session) => {
                    const isTokenVerified =
                        localStorage.getItem("isTokenVerified") === "true";
                    const redirectToAfterLogin = localStorage.getItem(
                        "redirectToAfterLogin"
                    );
                    let redirectUrl = redirectToAfterLogin || "/";
                    //localStorage.removeItem("redirectToAfterLogin");
                    localStorage.setItem("isNewLogin", "true");
                    localStorage.setItem("isTokenVerified", "false");
                    if (redirectToAfterLogin) {
                        redirectUrl = redirectToAfterLogin;
                        localStorage.removeItem("redirectToAfterLogin");
                    } else {
                        const idToken = session.getIdToken().getJwtToken();
                        redirectUrl = `https://brainbased-wellness.com/cognito-intermediate/#id_token=${encodeURIComponent(
                            idToken
                        )}`;
                    }

                    window.location.href = redirectUrl;
                });
        } catch (error) {
            setError(error.message);

            setLoading(false);
        }
    };
    if (loading) {
        return (
            <div className="loading-container">
                Authenticating...please wait
            </div>
        );
    }

    return (
        <div className="signin-sso-container">
            {loading && <div>Authenticating...please wait</div>}

            {showSignIn && (
                <div className="signin-sso">
                    <img src={logo} alt="Logo" />
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                id="username"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Sign In</button>
                        {error && <p>{error}</p>}
                    </form>
                    <div className="forgot-links">
                        <button
                            className="small-link"
                            onClick={() => handleToggleForms("forgotUsername")}
                        >
                            Forgot Username?
                        </button>
                        <button
                            className="small-link"
                            onClick={() => handleToggleForms("forgotPassword")}
                        >
                            Forgot Password?
                        </button>
                    </div>
                </div>
            )}
            {showForgotUsername && (
                <ForgotUsername
                    onUsernameRetrieval={onUsernameRetrieval}
                    onBack={() => handleToggleForms("signIn")}
                />
            )}
            {showForgotPassword && (
                <ForgotPassword onBack={() => handleToggleForms("signIn")} />
            )}
        </div>
    );
};

export default SignInForSSO;
