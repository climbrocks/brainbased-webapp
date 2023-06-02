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
                    <li><a href="#">Neuro-Somatic Reset</a></li>
                    <li><a href="#">Neuro-Somatic Mat Flow</a></li>
                    <li><a href="#">Neuro-Somatic Applied Neurology Session::</a></li>
                    <li><a href="#">Neuro Training Shorties</a></li>
                </ul>
            </div>
        </div>
    );
}

export default TopNav;