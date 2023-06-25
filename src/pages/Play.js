import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import VideoGrid from "../components/VideoGrid";

const Play = () => {
    const { videoId } = useParams();

    if (videoId) {
        // If videoId is present, navigate to the Home page with the videoId parameter
        return <Navigate to={`/home/${videoId}`} replace />;
    }

    return <VideoGrid />;
};

export default Play;
