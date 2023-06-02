import quote from '../images/quote.png';
import './SideNav.scss';

const SideNav = () => {
    return (
        <div className="side-nav">
            <div className="side-nav-top">
                <h1 className="side-nav-welcome">
                    Hi, Elizabeth
                </h1>
                <div className="side-nav-top-links">
                    <ul>
                        <li><a href="#">All Videos</a></li>
                        <li><a href="#">Favorites</a></li>
                    </ul>
                </div>
            </div>
            <div className="side-nav-bottom">
                {/* REPLACE WITH QUOTE COMPONENT  */}
                <div className="side-nav-bottom-quote">
                    <img src={ quote } />
                    <p className="quote-text">When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.</p>
                    <h2 className="quote-author">Eleanor Roosevelt</h2>
                </div>
                {/* REPLACE WITH QUOTE COMPONENT */}
                <div className="side-nav-bottom-links">
                    <ul>
                        <li><a href="#">Exit Video Library</a></li>
                        <li><a href="#">Account Settings</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideNav;