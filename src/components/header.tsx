import React from "react";

import logoJactos from "../img/logo-jactos.svg";
import homeIcon from "../img/home-icon.svg";
import plansIcon from "../img/plans-icon.svg";
import contactIcon from "../img/contact-icon.svg";
import subscriberIcon from "../img/sub-icon.svg";
import menuIcon from "../img/menu-icon.svg";

import "../style/header.css";

import isMobileDevice from "../controllers/checkMobile.controller";

function toggleMobileMenu() {
    let navElement = document.getElementById("navContainerMob");
    navElement?.classList.toggle("active");
}

function Header() {
    if (!isMobileDevice()){
        return (
            <header className="header-container">
                <div className="header-element">
                    <img src={logoJactos} alt="jactos-logo" className="logo-img" />

                    <nav className="menu-element">
                        <ul className="menu-list">
                            <li className="menu-item">
                                <a href="#">
                                    <img src={homeIcon} alt="home-icon" className="menu-icon" />
                                    Home
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#plans">
                                    <img src={plansIcon} alt="plan-icon" className="menu-icon" />
                                    Planos
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="https://api.whatsapp.com/send?phone=556240099277" target="_blank">
                                    <img src={contactIcon} alt="contact-icon" className="menu-icon" />
                                    Contato
                                </a>
                            </li>
                            <li className="menu-item subscriber">
                                <a href="https://ixc.jactos.com.br/central_assinante_web/" target="_blank">
                                    <img src={subscriberIcon} alt="subscriber-icon" className="menu-icon" />
                                    Central do assinante
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    } else {
        return (
            <React.Fragment>
                <header className="header-container-mob">
                    <div className="left-wrapper">
                        <button id="toggleMenu" onClick={toggleMobileMenu}>
                            <img src={menuIcon} />
                        </button>
                        <img src={logoJactos} className="logo-header-mob" />
                    </div>
                    <div className="right-wrapper">
                        <a href="https://ixc.jactos.com.br/central_assinante_web/" target='_blank' className="head-link customer-area">
                            <img src={subscriberIcon} alt="Rocket Icon" className="nav-icon" />
                            Central do assinante
                        </a>
                    </div>
                </header>
                <div className="nav-container-mob" id="navContainerMob">
                    <nav className="nav-element-mob">
                        <ul className="menu-list-mob">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <img src={homeIcon} alt="Social Icon" className="nav-icon" />
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#plans" className="nav-link">
                                    <img src={plansIcon} alt="Plans Icon" className="nav-icon" />
                                    Planos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://ixc.jactos.com.br/central_assinante_web/" target="_blank">
                                    <img src={contactIcon} alt="Contact Icon" className="nav-icon" />
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
    
}

export default Header;