import React from 'react';
import FlachaDerecha from '../img/smalleft.svg';

const Footer = props => {
    return(
        <footer>
            <div className="row no-gutters">
                <div className="col-1">
                    <img src={FlachaDerecha} alt="margen" className="margen" />
                </div>
                <div className="col-11 text-center my-auto">
                    <h1>O CONTACTANOS AL</h1>
                    <h3>+56912345678</h3>
                    <h3>ABOGADOS@PROTEGEPYME.COM</h3>
                </div>
            </div>
        </footer>
    )
};

export default Footer;