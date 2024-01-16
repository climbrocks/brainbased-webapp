import React, { useState } from "react";
import { Auth } from "aws-amplify";
import zxcvbn from "zxcvbn";
import "./ForgotPassword.scss";
import "./SignInForSSO.scss";
import logo from "../images/logo-large.png";

const ForgotPassword = ({ onBack }) => {
    const [username, setUsername] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [isResettingPassword, setIsResettingPassword] = useState(false);
    const [message, setMessage] = useState("");
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState("");

    const handlePasswordChange = (e) => {
        const newPasswordValue = e.target.value;
        setNewPassword(newPasswordValue);

        const result = zxcvbn(newPasswordValue);
        setPasswordStrength(result.score); // Update password strength
    };

    const handleConfirmPasswordChange = (e) => {
        const confirmPasswordValue = e.target.value;
        setConfirmPassword(confirmPasswordValue);
        setIsPasswordMatch(newPassword === confirmPasswordValue);
    };

    const handlePasswordResetRequest = async (event) => {
        event.preventDefault();
        try {
            await Auth.forgotPassword(username);
            setIsResettingPassword(true);
            setMessage("Verification code sent to your email");
        } catch (error) {
            setMessage("Error: " + error.message);
        }
    };

    const handlePasswordResetSubmit = async (event) => {
        event.preventDefault();
        try {
            await Auth.forgotPasswordSubmit(
                username,
                verificationCode,
                newPassword
            );
            setIsResettingPassword(false);
            setMessage("Password has been successfully reset");
        } catch (error) {
            setMessage("Error: " + error.message);
        }
    };

    return (
        <div className="signin-sso-container">
            <div className="signin-sso">
                <img src={logo} alt="Logo" />
                {!isResettingPassword ? (
                    <form onSubmit={handlePasswordResetRequest}>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            required
                        />
                        <button type="submit">Send Password Reset Code</button>
                    </form>
                ) : (
                    <form
                        style={{ padding: "20px" }}
                        onSubmit={handlePasswordResetSubmit}
                    >
                        <input
                            style={{ marginBottom: "10px" }}
                            type="text"
                            value={verificationCode}
                            onChange={(e) =>
                                setVerificationCode(e.target.value)
                            }
                            placeholder="Verification Code"
                            required
                        />
                        <input
                            style={{ marginBottom: "10px" }}
                            type="password"
                            value={newPassword}
                            onChange={handlePasswordChange}
                            placeholder="New Password"
                            required
                        />
                        <input
                            style={{ marginBottom: "10px" }}
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            placeholder="Confirm New Password"
                            required
                        />
                        <div
                            style={{ marginBottom: "10px" }}
                            className="password-strength-meter"
                        >
                            <div
                                className={`password-strength-bar strength-${
                                    passwordStrength + 1
                                }`}
                            ></div>
                            <div style={{ paddingTop: "5px" }}>
                                Password Strength
                            </div>
                        </div>

                        <div style={{ paddingTop: "10px", color: "red" }}>
                            {!isPasswordMatch && <p>Passwords do not match!</p>}
                        </div>
                        <div style={{ marginTop: "10px" }}>
                            <button type="submit" disabled={!isPasswordMatch}>
                                Reset Password
                            </button>
                        </div>
                    </form>
                )}

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
export default ForgotPassword;
