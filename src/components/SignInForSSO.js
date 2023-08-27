// SCSS Imports
import "./SignInForSSO.scss";

// React Imports

// Component Imports

// Image Imports
import logo from "../images/logo-large.png";

// Font Awesome Icons

const SignInForSSO = ({ federatedSignIn }) => {
    const urlParts = window.location.pathname.split("/");
    const videoIdIndex = urlParts.indexOf("play") + 1;

    let videoId = null;
    if (videoIdIndex !== 0 && videoIdIndex < urlParts.length) {
        videoId = urlParts[videoIdIndex];
    }

    const handleSignInClick = () => {
        if (videoId) {
            localStorage.setItem("tempUUID", videoId);
        }
        federatedSignIn();
    };

    return (
        <div className="signin-sso-container">
            <div className="signin-sso">
                <img src={logo} alt="Logo" />
                <button onClick={handleSignInClick}>Sign in Using SSO</button>
            </div>
        </div>
    );
};

export default SignInForSSO;
