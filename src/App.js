import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import React from "react";
import MainNavigation from "./components/MainNavigation.js";

// Routing
import Home from "./pages/Home";
import VideoPlayer from "./pages/VideoPlayer";
//import Contact from './components/Contact';

Amplify.configure(awsconfig);
const App = () => {
    return (
        <Router>
            <MainNavigation />

            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/videoplayer" element={<VideoPlayer />} />
                <Route path="/contact" />
            </Routes>
        </Router>
    );
};

export default withAuthenticator(App);
