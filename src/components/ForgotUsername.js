import React, { useState, useEffect } from "react";
import "./SignInForSSO.scss";
import logo from "../images/logo.png";

const ForgotUsername = ({ onUsernameRetrieval, onBack }) => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage("");
        await onUsernameRetrieval(email, setMessage);
    };

    return (
        <div className="signin-sso-container">
            <div className="signin-sso">
                <img src={logo} alt="Logo" />
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <button type="submit">Retrieve Username</button>
                </form>
                {message && (
                    <div>
                        <p>{message}</p>
                    </div>
                )}
                <button className="small-link" onClick={onBack}>
                    Back to Sign In
                </button>
            </div>
        </div>
    );
};

export default ForgotUsername;
