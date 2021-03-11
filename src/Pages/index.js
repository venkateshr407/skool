import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "../Components/NavBar/Navbar";

const Home = () => {
    return (
        <>
            <Router>
                <NavBar />
            </Router>
        </>
    );
};

export default Home;
