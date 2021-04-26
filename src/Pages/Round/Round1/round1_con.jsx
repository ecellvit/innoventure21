import React from "react";
import "./round1_con.css"
import Menu from "../../../Components/Menu/Menu";
import LOGO from "../../../Assets/logo.png";
function Round1_con(){

    return(
        <div>
            <div className="round1-container">
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
                        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />;
                    </div> */}
                </nav>
                <div className="round1-content">
                    <h1>Round 1</h1>
                    <div className="round-tagline">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad sint accusantium illum sed saepe architecto quas a. Cumque, veniam!</p>
                    </div>
                    <div className="timer">
                        <p>00:00</p>
                    </div>
                    <div className="section1">

                    </div>    
                    <div className="section2">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Round1_con;