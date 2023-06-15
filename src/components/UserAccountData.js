// SCSS Imports
import "./UserAccountData.scss";

// React Imports

// Component Imports

// Image Imports
import avatar from "../images/instructor.png";

// Font Awesome Icons

const UserAccountData = () => {
    return (
        <>
            <div className="user-account-data-container">
                <div className="user-account-data">
                    <h1 className="user-info-title">Elisabeth's Information</h1>
                    <div className="user-info">
                        <img className="user-avatar" src={avatar} />
                        <h2>Elisabeth Elisabeth</h2>
                        <div className="user-information">
                            <p>elisabeth@bbwellnes.com</p>
                            <p>User Since: 05/24/2001</p>
                            <p>More User Data</p>
                            <p>More User Data</p>
                            <p>More User Data</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default UserAccountData;
