import React from 'react';
import Tabla from '../../img/tabla.png';
import FlechaIzquierda from '../../img/smalleft.svg';

const Precios = props => {
    return(
        <div className="preciostainer" id="precios">
            <div className="row no-gutters">
                <div className="col-1">
                    <img src={FlechaIzquierda} alt="flechaborde"/>
                </div>
                <div className="col-11 text-center">
                    <h1 className="my-3">TRANSPARENCIA</h1>
                    <h4 className="my-3">LO QUE NOS CARACTERIZA</h4>
                    <i class="fas fa-dollar-sign fa-8x my-3"></i>
                    <h1 className="my-3">NUESTROS PRECIOS</h1>
                    <img src={Tabla} alt="tabla" className="my-3" />
                    <p>falta la linea verde</p>
                </div>
            </div>
        </div>
    )
};

export default Precios;