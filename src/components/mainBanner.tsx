import React from "react";

import cardPlanImage from "../img/card-plan.svg";

import "../style/mainBanner.css";

function MainBanner() {
    return(
        <React.Fragment>
            <div className="main-banner-container">
                <div className="main-banner-wrapper">
                    <img src={cardPlanImage} className="banner-plan-img"/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainBanner;