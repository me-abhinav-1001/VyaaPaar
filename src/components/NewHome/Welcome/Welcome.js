import React, { Component } from 'react';
import ParcelAnimation from "./ParcelAnimation"
import HalfCircle from "./HalfCircle"
import AppName from "./AppName"
import Tags from "./Tags"
import Github from "./Github"
import Box from "./svg/Box"
import "./welcome.css";

class Welcome extends Component {
    render() {
        return (
            <>
                <div className="welcome-page-section-fullscreen">
                    <Box svg="Box5" top="10%" left="10%" size="15%" rotate = "45deg "/>
                    <Box svg="Box3" top="36%" left="55%" size="20%" rotate = "0deg "/>
                    <Box svg="Box4" top="28%" left="80%" size="13%" rotate = "0deg "/>
                    <Box svg="Box4" top="50%" left="20%" size="20%" rotate = "0deg "/>
                    <Box svg="Box4" top="11%" left="50%" size="11%" rotate = "0deg "/>
                    <Box svg="Box5" top="77%" left="80%" size="16%" rotate = "0deg "/>
                    <Box svg="Box3" top="77%" left="8%" size="15%" rotate = "0deg "/>
                    <Box svg="Box3" top="43%" left="2%" size="15%" rotate = "0deg "/>
                    {/* <Box svg="Box4" top="66%" left="67%" size="100px" rotate = "45deg "/> */}
                    {/* <Box svg="Box5" top="28%" left="50%" size="100px" rotate = "45deg "/> */}
                    {/* <Box svg="Box5" top="100px" left="200px" size="100px" rotate = "45deg "/> */}
                    <Github repo="https://github.com/me-abhinav-1001/VyaaPaar"/>
                    <AppName name="Vyaa" coverup="Paar" weblink="/search" type="Link"></AppName>
                    <ParcelAnimation />
                    <Tags />
                    {/*
                The hallf circle div is not absolutely placed.... hence all the other divs will be absolutely placed.
                beware making any unncessary changes
                */}
                    <HalfCircle />
                </div>
            </>
        )
    }
}

export default Welcome;