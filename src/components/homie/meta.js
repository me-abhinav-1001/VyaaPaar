import React from "react";
import "./home.css";
import "./animation.min.css";
import MetamaskLogo from "./../metamask/metamaskLogo";


const Meta = () => {

    return (
        <div className="the-fixed-background-root-div">
            <div className="colored-background-div"></div>
            <div className="set-div-to-full-screen">
                <div id="MetaMask_homepage">
                    {/* <img src={m} alt=""/> */}
                    <MetamaskLogo />
                    <h1 className="heading">MetaMask</h1>
                </div>
                <div className="clip-path-no-bottom background-choose">
                    <div className="text-in-special">
                        <div id="MetaMask_homepage_div">
                            <a className="links-homie" href="http://localhost:3000/metamask">
                                <h1 className="fadeInLeft heading">
                                    How to use <br></br>MetaMask <i class="ri-check-double-line"></i>
                                </h1>
                            </a>
                            <h4 className="heading">
                                Our app works with the help of <br></br>Metamask Chrome extension
                </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Meta;
