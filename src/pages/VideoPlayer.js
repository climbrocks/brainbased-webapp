// SCSS Imports
import "./VideoPlayer.scss";

// React Imports

// Component Imports
import VideoPlayerData from "../components/VideoPlayerData.js";

// Image Imports

// Font Awesome Icons

const VideoPlayer = () => {
    return (
        <div className="video-player-container">
            <div className="video-container">
                <div className="video"></div>
            </div>
            <VideoPlayerData />
        </div>
    );
};
export default VideoPlayer;
