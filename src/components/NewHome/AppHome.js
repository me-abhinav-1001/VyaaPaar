import React, { Component } from 'react';
import Welcome from "./Welcome/Welcome"
// import WelcomeSecond from "./WelcomeSecond/WelcomeSecond"
import Meta from "./../homie/meta";
class AppHome extends Component {
    render() {
        return (
            <>
                <Welcome />
                <Meta />
            </>
        )
    }
}

export default AppHome;