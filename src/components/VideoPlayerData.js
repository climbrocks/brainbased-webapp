// SCSS Imports
import "./VideoPlayerData.scss";

// React Imports

// Component Imports

// Image Imports

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare } from "@fortawesome/free-solid-svg-icons";

const VideoPlayerData = () => {
    return (
        <div className="video-data-container">
            <div className="video-data">
                <div className="video-title-instructor">
                    <h1 className="video-title">Applied Neurology</h1>
                    <h3 className="video-instructor">Instructor: Elisabeth</h3>
                </div>
                <p className="video-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    imperdiet pretium risus, tincidunt dictum lectus efficitur
                    et. Curabitur consequat odio id nisl posuere porta. Quisque
                    nunc urna, lacinia vitae interdum eget, lobortis ut purus.
                    Praesent elementum est quis libero suscipit tincidunt.
                    Vivamus non dolor erat. Donec ullamcorper eu urna vel
                    commodo. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Vestibulum gravida
                    neque vel justo pretium, ut ornare arcu auctor. Pellentesque
                    eget tellus a arcu porttitor sagittis eget id diam. Nam sit
                    amet lectus faucibus, cursus eros a, tempus velit. Donec nec
                    mollis neque. Suspendisse pellentesque semper augue vitae
                    iaculis. Nam id nisl a ipsum lacinia egestas ac non massa.
                </p>
                <div className="video-social-buttons">
                    <button>
                        <FontAwesomeIcon
                            className="social-icon"
                            icon={faHeart}
                        />
                    </button>
                    <button>
                        <FontAwesomeIcon
                            className="social-icon"
                            icon={faShare}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default VideoPlayerData;
