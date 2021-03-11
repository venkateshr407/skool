import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeroSection from "../Components/HeroSection/HeroSection";

import { NavBar } from "../Components/NavBar/Navbar";
import { SideBar } from "../Components/SideBar/SideBar";

const Home = () => {
    const [isOpen, setisOpen] = useState(false);

    const toggle = () => {
        setisOpen(!isOpen);
    };

    return (
        <>
            <Router>
                <NavBar toggle={toggle} />
                <SideBar isOpen={isOpen} toggle={toggle} />
                <HeroSection/>
            </Router>
        </>
    );
};

export default Home;
