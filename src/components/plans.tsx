import React from "react"

import basicoPlan from '../img/basico.svg';
import intermediarioPlan from '../img/intermediario.svg';
import completoPlan from '../img/completo.svg';
import empresarialPlan from '../img/empresarial.svg';
import logoBackground from '../img/logo-back.svg';
import smartphoneImage from '../img/smartphone.svg';

import basicoMob from '../img/basico-mob.svg';
import intermediarioMob from '../img/intermediario-mob.svg';
import completoMob from '../img/completo-mob.svg';
import empresarialMob from '../img/empresarial-mob.svg';

import "../style/plans.css"

import isMobileDevice from "../controllers/checkMobile.controller";

function Plans() {
    if (!isMobileDevice()) {
        return (
            <React.Fragment>
                <div className="plans-container">
                    <b>Temos o plano ideal para você!</b>

                    <div className="plans-wrapper">
                        <img src={basicoPlan} alt="basico-plan" className='plan-image' />
                        <img src={intermediarioPlan} alt="intermediario-plan" className='plan-image'/>
                        <img src={completoPlan} alt="completo-plan" className='plan-image'/>
                        <img src={empresarialPlan} alt="empresarial-plan" className='plan-image'/>
                    </div>

                    <span>Descubra os melhores combos para turbinar  sua diversão com filmes, jogos e navegação na internet!</span>

                    <img src={logoBackground} alt="logo-background" className="logo-background" />
                    <img src={smartphoneImage} alt="smartphone-image" className="smartphone-image" />
                </div>
                <div className="button-container">
                    <a href="#" className='button-contact'>Assine já, clicando aqui</a>
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <div className="plans-container-mob">
                    <b>Temos o plano ideal para você!</b>
                    
                    <div className="plans-wrapper-mob">
                        <a href="#">
                            <img src={basicoMob} alt="basico-plan" className="plan-img-mob" />
                        </a>
                        <a href="#">
                            <img src={intermediarioMob} alt="basico-plan" className="plan-img-mob" />
                        </a>
                        <a href="#">
                            <img src={completoMob} alt="basico-plan" className="plan-img-mob" />
                        </a>
                        <a href="#">
                            <img src={empresarialMob} alt="basico-plan" className="plan-img-mob" />
                        </a>
                    </div>

                    <span>Descubra os melhores combos para turbinar sua diversão com filmes, jogos e navegação na internet!</span>
                    <img src={logoBackground} alt="logo-background" className="logo-background-mob" />
                </div>
            </React.Fragment>
        )
    }
    
}

export default Plans;