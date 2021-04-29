import React from 'react';
import Formulario from '../../img/formulario.png';
import FlechaDerecha from '../../img/bigleft.svg';

const Contacto = props => {
    return(
        <div className="contactainer" id="contacto">
            <div className="row no-gutters">
                <div className="col-11 text-center my-auto">
                    <h1>CONTACTO</h1>
                    <img src={Formulario} alt="formulario"/>
                    <p>falta linea verde</p>
                </div>
                <div className="col-1">
                    <img src={FlechaDerecha} alt="flechamargen"/>
                </div>
            </div>
        </div>
    )
};

export default Contacto;