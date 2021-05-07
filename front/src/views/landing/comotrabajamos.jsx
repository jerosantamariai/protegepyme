import React from 'react';
// import LeftArrow from '../../img/bigright.svg';
import IsotipoCO from '../../img/isotipoCO.svg';
// import LogoPP from '../../img/pplogo.png';
import CurlyBracket from '../../img/curlybracket.svg';
import Ondulado from '../../img/ondulado.svg';
import LogoPP from '../../img/logoPP.png';
import Mas from '../../img/mas.svg';

const ComoTrabajamos = props => {
    return (
        <div className="comostainer" id="comotrabajamos">
            <div className="row no-gutters">
                {/* <div className="col-1">
                    <img src={LeftArrow} alt="margen" className="margen" />
                </div> */}
                <div className="col-12 text-center my-auto">
                    <h1>¿CÓMO TRABAJAMOS?</h1>
                    <div className="d-flex justify-content-center my-3">
                        <img src={IsotipoCO} alt="logocobranzaonline" className="logoCC my-4" />
                        <span>
                            {/* <i className="fas fa-plus fa-3x"></i> */}
                            <img src={Mas} alt="mas" className="mas py-auto" />
                        </span>
                        <img src={LogoPP} alt="logoprotegepyme" className="logoPP my-0" />
                    </div>
                    <span><img src={CurlyBracket} alt="bracket" className="bracket my-4" /></span>
                    <h4>SOMOS PARTNERS ESTRATEGICOS</h4>
                    <h4>NOSOTROS CERRAMOS EL CICLO Y NOS</h4>
                    <h4 className="pb-2">PREOCUPAMOS DE LOS ÚLTIMOS DETALLES</h4>
                    <h1>ASI TODO FLUYE DE</h1>
                    <h1>MANERA ORGÁNICA</h1>
                    <img src={Ondulado} alt="ondulado" className="ondulado py-4" />
                </div>
            </div>
        </div>
    )
};

export default ComoTrabajamos;