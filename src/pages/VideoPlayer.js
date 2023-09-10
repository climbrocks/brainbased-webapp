// SCSS Imports
import "./VideoPlayer.scss";

// React Imports
import React, { useEffect, useRef } from "react"; // Import useRef and useEffect hooks

// VideoJS Imports
import videojs from "video.js";
import "video.js/dist/video-js.css";

// Component Imports
import VideoPlayerData from "../components/VideoPlayerData.js";

// Image Imports

// Font Awesome Icons

const VideoPlayer = ({ videoUrl, poster, captions }) => {
    const videoRef = useRef(null); // Create a ref to hold our video element

    useEffect(() => {
        setTimeout(() => {
            console.log("Initializing Video.js player...");
            const player = videojs(videoRef.current, {
                controls: true,
                autoplay: true,
                preload: "auto",
                poster: poster,
            });

            // Load the source into the player
            player.src({ type: "video/mp4", src: videoUrl });
            console.log("Player initialized.");
            console.log(videoUrl);
            if (captions) {
                player.addRemoteTextTrack(
                    {
                        src: captions,
                        label: "English",
                        kind: "captions",
                        srclang: "en-us",
                        default: true,
                    },
                    false
                ); // Do not make the track element manually
            }
            return () => {
                if (player) {
                    player.dispose(); // Dispose the player on unmount
                    console.log("Disposing Video.js player...");
                }
            };
        }, 0);
    }, [videoUrl, poster]); // Depend on videoUrl and poster so it re-initializes if these change

    return (
        <div className="video-player-container">
            <div className="video-container" data-vjs-player>
                <video ref={videoRef} className="video-js" playsInline></video>
            </div>
            <VideoPlayerData />
        </div>
    );
};

export default VideoPlayer;
