import React from 'react';
// import MarginLeft from '../../img/smalleft.svg';
import LogoPP from '../../img/logoPP.png';

const Inicio = props => {
    return (
        <div className="initainer">
            <div className="row no-gutters">
                {/* <div className="col-1">
                    <img src={MarginLeft} alt="MargenFlecha" className="margen" />
                </div> */}
                <div className="col-12 my-auto py-4">
                    <div className="contenido text-center mx-1">
                        <h1>ESTUDIO JURIDICO</h1>
                        <h1>100% ONLINE</h1>
                        <img src={LogoPP} alt="Logo" className="logocircular" />
                        <h1>COBRANZA JUDICIAL</h1>
                        <h2>de Facturas, cheques, pagarés</h2>
                        <h2>y otros documentos.</h2>
                        <h3 className="pt-3">PROTEGEMOS TU PYME Y TE AYUDAMOS</h3>
                        <h3>EN LOS PROCESOS DE COBRANZAS</h3>
                        <h3>SI NO RECUPERAS, NO PAGAS</h3>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Inicio;