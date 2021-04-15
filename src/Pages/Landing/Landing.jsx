import React from "react";
import "./Landing.css"
import Menu from "../../Components/Menu/Menu";
import LOGO from "../../Assets/logo.png";
function Landing(){

    return(
        <div>
            <div className="container">
                <nav className="flex justify-between">
                    <div className="lefty flex items-center">
                        <div className="logo">
                            <img src={LOGO} alt="E-Summit" />
                        </div>
                    </div>
                    <div className="righty">
                        <Menu />
                    </div>
                    {/* <div className="rightcode">
                        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                    </div> */}
                </nav>
                <div className="content">
                    <h3>ECELL VIT Presents</h3>
                    <h1>Innoventure</h1>
                    <div className="tagline">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad sint accusantium illum sed saepe architecto quas a. Cumque, veniam!</p>
                    </div>
                    <button className="btn btn-login">Login</button>
                    <div className="sponsors" id="sponsors">
                        <div className="sponsor-head">
                            <span>Sponsors</span>
                        </div>
                        <div className="grid-container">
                            <div data-aos="flip-up" className="grid-item">
                                <a href="https://aws.amazon.com/">
                                    {/* <img src={AW} alt="Sponsor Logo" /> */}
                                </a>
                            </div>
                            <div data-aos="flip-up" className="grid-item">
                                <a href="https://devfolio.co/">
                                    {/* <img src={DF} alt="Sponsor Logo" /> */}
                                </a>
                            </div>
                            <div data-aos="flip-up" className="grid-item">
                                <a href="https://wharfstreetstrategies.com/">
                                    {/* <img src={WS} alt="Sponsor Logo" /> */}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;