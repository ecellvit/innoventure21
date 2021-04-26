import React from "react";
import "./round1B.css"
import Menu from "../../../Components/Menu/Menu";
import LOGO from "../../../Assets/logo.png";
import { Pie } from 'react-chartjs-2';
function Round1B(){


    const data = {
        labels: ['No', 'Yes'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19],
            backgroundColor: [
              'rgb(148, 235, 7)',
              'rgb(235, 96, 7)',
            ],
            borderColor: [
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
            ],
            borderWidth: 1,
          },
        ],
      };

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
                    <h1>Round 1B</h1>
                    <div className="roundB-tagline">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aperiam dignissimos asperiores in, veritatis ea amet ipsa perspiciatis natus illo, dicta quisquam veniam atque quia nemo sapiente. Assumenda, reprehenderit ex!</p>
                    </div>
                    <div className="graph-view flex justify-center">
                        <div className="pie">
                            <Pie data={data} options={{
                                responsive: true,
                            }}/>
                        </div>
                        <div className="choices">

                        </div>

                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Round1B;