import React from 'react';
import {Link, NavLink} from "react-router-dom"
import "./welcome.css";

const AppName = ({name, coverup, weblink}) => {
    return (
        <div className="app-name-parent-div">
            <p className="app-name-welcome-page">{name}<span>{coverup}</span></p>
            {/* <div className="points-for-app-name">
                <p></p>
            </div> */}
            <a className="proceed-to-prototype" href="/search"><span>To the Prototype</span><i className="ri-arrow-right-line icon-on-link"></i> </a>
        </div>
    );
}

export default AppName;