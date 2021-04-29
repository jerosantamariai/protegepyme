import React from 'react';
import LeftArrow from '../../img/bigright.svg';
import LogoCC from '../../img/logoccazul.png';
import LogoPP from '../../img/pplogo.png';

const ComoTrabajamos = props => {
    return (
        <div className="comostainer" id="comotrabajamos">
            <div className="row no-gutters">
                <div className="col-1">
                    <img src={LeftArrow} alt="margen" className="margen" />
                </div>
                <div className="col-11 text-center my-auto">
                    <h1>¿Cómo Trabajamos?</h1>
                    <img src={LogoCC} alt="logocobranzaonline" className="logoCC my-4" />
                    <span><i className="fas fa-plus fa-8x"></i></span>
                    <img src={LogoPP} alt="logoprotegepyme" className="logoPP my-4" />
                    <p>falta curlybracket img y cambiar los logos</p>
                    <h4>SOMOS PARTNERS ESTRATEGICOS</h4>
                    <h4>NOSOTROS CERRAMOS EL CICLO Y NOS</h4>
                    <h4>PREOCUPAMOS DE LOS ÚLTIMOS DETALLES</h4>
                    <h1>ASI TODO FLUYE DE</h1> 
                    <h1>MANERA ORGÁNICA</h1>
                    <p>falta icono ondulado</p>
                </div>
            </div>
        </div>
    )
};

export default ComoTrabajamos;