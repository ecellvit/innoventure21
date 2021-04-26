import React from "react";
import "./round1A.css"
import Menu from "../../../Components/Menu/Menu";
import LOGO from "../../../Assets/logo.png";
import IMG from "../../../Assets/img.png";
function Round1A(){

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
                        <div className="card-grid flex item-center">
                            <div className="card">
                                    <img src={IMG} alt="pic"/>
                                    <div className="card-content">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quo!
                                        </p>
                                        <button className="btn btn-proposal">Proposal 1</button>
                                    </div>
                                </div>
                            <div className="card">
                                <img src={IMG} alt="pic"/>
                                <div className="card-content">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quo!
                                    </p>
                                    <button className="btn btn-proposal">Proposal 1</button>
                                </div>
                              </div>
                            <div className="card">
                                <img src={IMG} alt="pic"/>
                                <div className="card-content">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quo!
                                    </p>
                                    <button className="btn btn-proposal">Proposal 1</button>
                                </div>
                            </div>
                        </div>
                        <div className="detail">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo tempora inventore ipsa doloremque, cupiditate voluptate dolorem aut laudantium quidem laboriosam dolore delectus aperiam error perspiciatis vitae nihil! Eum, fuga quaerat!
                            </p>
                        </div>
                        <div className="vendor-list flex">
                            <div className="vendor">
                                <p>vendor 1</p>
                            </div>
                            <div className="vendor">
                                <p>vendor 2</p>
                            </div>
                            <div className="vendor">
                                <p>vendor 3</p>
                            </div>
                        </div>
                        <button className="btn btn-submit">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Round1A;