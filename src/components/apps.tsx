import React from "react";

import appCombate from '../img/app-combate.svg';
import appGloboplay from '../img/app-globoplay.svg';
import appPremiere from '../img/app-premiere.svg';
import appTelecine from '../img/app-telecine.svg';

import "../style/apps.css";

function Apps() {
    return (
        <React.Fragment>
            <div className="apps-container">
                <b>Conheça os apps disponíveis para assinatura</b>

                <div className="apps-wrapper">
                    <div className="separator">
                        <img src={appPremiere} alt="app-premiere" className='app-image' />
                        <img src={appCombate} alt="app-combate" className='app-image' />
                    </div>
                    <div className="separator">
                        <img src={appGloboplay} alt="app-globoplay" className='app-image' />
                        <img src={appTelecine} alt="app-telecine" className='app-image' />
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default Apps;