import React from 'react';
import PPLogo from '../img/pplogo.png';

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg color-azul fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={PPLogo} alt="ProtegePymeLogo" className="logoPP" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                            <i className="fas fa-bars color-verde"></i>
                        </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 mx-auto text-center">
                        <li className="nav-item">
                            <a className="nav-link" href="/#quienessomos">QUIENES SOMOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#comotrabajamos">COMO TRABAJAMOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#porquenosotros">POR QUE NOSOTROS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#precios">PRECIOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#contacto">CONTACTO</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
};

export default Navbar;