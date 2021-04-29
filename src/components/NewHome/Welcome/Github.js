import React from 'react';
import {Link} from 'react-router-dom'
import "./welcome.css";

const Github = ({repo}) => {

    return (
        <div className="to-github-repo-div">
            <a href={repo}><i className="ri-github-fill"></i></a>
        </div>
    )
}


export default Github;