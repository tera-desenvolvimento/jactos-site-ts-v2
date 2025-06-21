import React from "react";

import contractImg from '../img/notebook.svg';

import "../style/autoatendimento.css";

function AutoAtendimento() {
    return (
        <React.Fragment>
            <div className="contrato-container">
                <div className="contrato-wrapper">
                    <div>
                        <h2>Autoatendimento para clientes</h2>
                        <span>Contrate seu plano com poucos cliques!</span>
                        <a href="https://jactos.contratoonline.tec.br/" target="_blank" className="contract-link">Clique aqui</a>
                    </div>
                    <img src={contractImg} alt="contract-img" className="contract-img" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default AutoAtendimento;