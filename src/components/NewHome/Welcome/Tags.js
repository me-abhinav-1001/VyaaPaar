import React from 'react';
import "./welcome.css";

const Tags = ({name, coverup}) => {
    return (
        <div className="full-width-tags-div">
            <p>Buy it when you need it</p>
            <p>Sell it when you don't</p>
            <span>All Secured through <span>BlockChain</span></span>
        </div>
    )
}

export default Tags;