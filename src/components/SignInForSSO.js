import React, { useState } from "react";
import { Auth } from "aws-amplify";
import logo from "../images/logo-large.png";
import ForgotUsername from "./ForgotUsername";
import ForgotPassword from "./ForgotPassword";
import "./SignInForSSO.scss";

const SignInForSSO = ({ federatedSignIn }) => {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showSignIn, setShowSignIn] = useState(true); // New state for toggling forms
    const [showForgotUsername, setShowForgotUsername] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);

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
                    localStorage.setItem("isNewLogin", "true");
                    const idToken = session.getIdToken().getJwtToken();
                    const redirectUrl = `https://brainbased-wellness.com/cognito-intermediate/#id_token=${encodeURIComponent(
                        idToken
                    )}`;
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
