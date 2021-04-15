import React from "react";
import "./rounds.css"
import Menu from "../../Components/Menu/Menu";
import LOGO from "../../Assets/logo.png";
function Rounds(){

    return(
        <div>
            <div className="round-container">
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
                <div className="round-content">
                    <h3>ECELL VIT Presents</h3>
                    <h1>Innoventure</h1>
                    <div className="round-tagline">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad sint accusantium illum sed saepe architecto quas a. Cumque, veniam!</p>
                    </div>
                    <div className="round">
                            <div className="1">
                            <div className=" stage flex justify-between items-center">
                                <h2>Round 1</h2>
                             <button className="btn btn-start">START</button>
                            </div>
                          <p>
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum veritatis neque cum excepturi sint sit consectetur dolores, accusantium odio, quo fugit provident quia esse numquam molestiae dicta nam sapiente aut?
                            </p>
                        </div>
                        <div className="2">
                            <div className=" stage flex justify-between items-center">
                                <h2>Round 2</h2>
                             <button className="btn btn-start">START</button>
                            </div>
                          <p>
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum veritatis neque cum excepturi sint sit consectetur dolores, accusantium odio, quo fugit provident quia esse numquam molestiae dicta nam sapiente aut?
                            </p>
                        </div>
                        <div className="3">
                            <div className=" stage flex justify-between items-center">
                                <h2>Round 3</h2>
                             <button className="btn btn-start">START</button>
                            </div>
                          <p>
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum veritatis neque cum excepturi sint sit consectetur dolores, accusantium odio, quo fugit provident quia esse numquam molestiae dicta nam sapiente aut?
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default Rounds;