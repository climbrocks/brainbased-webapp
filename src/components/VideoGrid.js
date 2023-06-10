// SCSS Imports
import "./VideoGrid.scss";

// React Imports
import Thumbnail from "./Thumbnail";

const VideoGrid = () => {
    return (
        <>
            <div className="video-grid-container">
                <div className="video-grid">
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                    <Thumbnail />
                </div>
            </div>
        </>
    );
};
export default VideoGrid;
