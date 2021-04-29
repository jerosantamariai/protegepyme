import React from 'react';
import FlechaDerecha from '../../img/bigleft.svg';
import Cuadros from '../../img/cuadros.png';

const XQ = props => {
    return(
        <div className="xqtainer" id="porquenosotros">
            <div className="row no-gutters">
                <div className="col-11 text-center">
                    <h1>¿Porqué trabajar juntos?</h1>
                    <h5>NUESTRO TRABAJO ES GARANTIA DE</h5>
                    <h5>COMPROMISO, DEDICACIÓN Y EXPERIENCIA</h5>
                    <img src={Cuadros} alt="cuadros"/>
                </div>
                <div className="col-1">
                    <img src={FlechaDerecha} alt="marcodrecho"/>
                </div>
            </div>
        </div>
    )
};

export default XQ;