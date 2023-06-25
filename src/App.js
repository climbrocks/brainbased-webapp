import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import React from "react";
import MainNavigation from "./components/MainNavigation.js";
import AuthStatus from "./components/AuthStatus";

// Routing
import Home from "./pages/Home";
import UserAccount from "./pages/UserAccount";
import VideoPlayer from "./pages/VideoPlayer";
import Play from "./pages/Play";

//import Contact from './components/Contact';

Amplify.configure(awsconfig);
const App = () => {
    return (
        <Router>
            <MainNavigation />

            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/home/:videoId?" element={<Home />} />
                <Route path="/UserAccount" element={<UserAccount />} />
                <Route path="/videoplayer" element={<VideoPlayer />} />
                <Route path="/play/:videoId?" element={<Play />} />
                <Route path="/contact" />
                <Route path="/auth" element={<AuthStatus />} />
            </Routes>
        </Router>
    );
};

export default withAuthenticator(App);
