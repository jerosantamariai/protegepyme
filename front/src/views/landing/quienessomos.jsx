import React from 'react';
import RightArrow from '../../img/bigleft.svg';

const QuienesSomos = props => {
    return (
        <div className="qstainer" id="quienessomos">
            <div className="row no-gutters">
                <div className="col-11 contenido text-center">
                        <hr />
                        <h1>¡RECUPERA TU DINERO!</h1>
                        <h3>TIENES EL DERECHO A COBRAR</h3>
                        <h3>JUDICIALMENTE LO QUE NO TE PAGARON.</h3>
                        <h3>PRUEBA CON NOSOTROS</h3>
                        <i className="fas fa-arrow-down fa-8x"></i>
                </div>
                <div className="col-1">
                    <img src={RightArrow} alt="borde" className="margen2" />
                </div>
            </div>
        </div>
    )
};

export default QuienesSomos;