import React from "react"

import basicoPlan from '../img/basico.svg';
import intermediarioPlan from '../img/intermediario.svg';
import completoPlan from '../img/completo.svg';
import empresarialPlan from '../img/empresarial.svg';
import logoBackground from '../img/logo-back.svg';
import smartphoneImage from '../img/smartphone.svg';

import "../style/plans.css"

function Plans() {
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
}

export default Plans;