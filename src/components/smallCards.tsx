import React from "react";

import cloudIcon from '../img/cloudIcon.svg';
import headsetIcon from '../img/headsetIcon.svg';
import signalIcon from '../img/signalIcon.svg';
import shieldIcon from '../img/shieldIcon.svg'

import "../style/smallCards.css"

function SmallCards() {
    return (
        <React.Fragment>
            <div className="small-cards-container">
                <div className="small-card">
                    <img src={cloudIcon} alt="card-icon" className="card-icon" />
                    <b>Instalação com roteador grátis.</b>
                </div>
                <div className="small-card">
                    <img src={headsetIcon} alt="card-icon" className="card-icon" />
                    <b>Suporte personalizado, 24 horas por dia.</b>
                </div>
                <div className="small-card">
                    <img src={signalIcon} alt="card-icon" className="card-icon" />
                    <b>Wi-fi que pega na casa toda!</b>
                </div>
                <div className="small-card">
                    <img src={shieldIcon} alt="card-icon" className="card-icon" />
                    <b>Navegação rápida e segura.</b>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SmallCards;