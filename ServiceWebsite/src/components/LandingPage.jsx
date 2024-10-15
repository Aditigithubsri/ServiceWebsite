import React from "react";
import "../Styles/LandingPage.scss";
import Form from "./Form";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const LandingPage = () => {

    return (

        <div className="background-image">
            <div className="seperation">
                <div>
                    <h1 className="heading">Stand Out from the Crowd with Our Professional Resume Writing Services
                    </h1>
                    <ul className="ulList">
                        <li className="lists"><span><CheckCircleIcon/></span>10000+ Happy Clients</li>
                        <li className="lists"><span><CheckCircleIcon/></span>Experienced Writers</li>
                        <li className="lists"><span><CheckCircleIcon/></span>Global Presence</li>
                    </ul>
                    <p className="para">Most Preferred By CEO, CIO, CFO, CTO, CIO, Directors, Presidents, and Board Positions.</p>
                </div>

                <div>
                    <Form />
                </div>
            </div>
        </div>


    )
}

export default LandingPage;