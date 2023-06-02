import logo from '../images/logo.png';
import './TopNav.scss';

const TopNav = () => {
    return (
        <div className="top-nav-container">
            <div className="top-nav-logo">
                <img src={ logo } alt="Brain Based Wellness" />
            </div>
            <div className="top-nav-links-container">
                <ul>
                    <li><a href="#">Neuro Training Sessions</a></li>
                    <li><a href="#">Brain Based Pilates</a></li>
                    <li><a href="#">Strategic Muscle Training</a></li>
                    <li><a href="#">HIIT</a></li>
                </ul>
            </div>
        </div>
    );
}

export default TopNav;