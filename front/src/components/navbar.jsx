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
                    <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/#link1">LINK1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#link2">LINK2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#link3">LINK3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#link4">LINK4</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#link5">LINK5</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
};

export default Navbar;