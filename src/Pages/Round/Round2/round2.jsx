import React from "react";
import "./round2.css"
import Menu from "../../../Components/Menu/Menu";
import LOGO from "../../../Assets/logo.png";
function Round2(){

    return(
        <div>
            <div className="round2-container">
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
                <div className="round2-content">
                    <h1>Round 2</h1>
                    <div className="round2-tagline">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat accusamus suscipit est, delectus labore consequuntur. Velit quis reprehenderit, expedita asperiores quas cupiditate illo rerum assumenda nostrum fugit, iusto voluptatem nam similique eos ex incidunt ab. Necessitatibus animi quibusdam consequatur veritatis molestiae. Sunt, qui quas. Aliquid quasi cumque unde at veritatis delectus architecto. Repellat officia voluptates ullam eius voluptatum sint reprehenderit nam odio accusamus atque qui exercitationem ad animi praesentium magnam impedit illo accusantium nemo voluptas, maiores quas? Perferendis optio, doloremque placeat maiores error ipsa deserunt rerum magnam nostrum ut debitis natus dolor iusto quod aperiam facilis, reprehenderit eligendi est!</p>
                    </div>
                    <button className="btn btn-download">Download</button>
                    <div className="info">
                        <p>Enter Price</p>
                        <div className="collect flex justify-between">
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                        </div>
                        <button className=" btn btn-submit2">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Round2;