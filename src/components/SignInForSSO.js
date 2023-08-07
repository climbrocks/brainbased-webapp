// SCSS Imports
import "./SignInForSSO.scss";

// React Imports

// Component Imports

// Image Imports
import logo from "../images/logo-large.png";

// Font Awesome Icons

const SignInForSSO = ({ federatedSignIn }) => {
    const handleSignInClick = () => {
        federatedSignIn(); // Call the federatedSignIn function when the button is clicked
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
