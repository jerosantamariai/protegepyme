import React, { useState } from 'react';
// import FlechaDerecha from '../../img/bigleft.svg';
// import Cuadros from '../../img/cuadros.png';
import Collage from '../../components/cuadros.jsx';
import parse from 'html-react-parser';

const XQ = props => {
    const [multiplicador, setMultiplicador] = useState(1)
    function mapcollage() {
        let x = 4 * multiplicador;
        let y = [];
        for (let i = 0; i < x; i++) {
            if (Collage[i] !== undefined)
                y.push(
                    <div className="cuadro">
                        <h4 className="cont">{parse(Collage[i])}</h4>
                    </div>
                )

        }
        return y;
    }
    return (
        <div className="xqtainer" id="porquenosotros">
            <div className="row no-gutters">
                <div className="col-12 text-center">
                    <h1>¿Porqué trabajar juntos?</h1>
                    <h5>NUESTRO TRABAJO ES GARANTIA DE</h5>
                    <h5>COMPROMISO, DEDICACIÓN Y EXPERIENCIA</h5>
                    <div className="row text-center no-gutters">
                        <div className="col-12 no-gutters">
                            {
                                mapcollage()
                            }
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center no-gutters">
                        {
                            Collage.length > 2 * multiplicador ? (
                                <div className="row no-gutters no-gutters">
                                    <div className="col-6 text-center no-gutters">
                                        <div className="btn btn-info mb-4" onClick={() => setMultiplicador(multiplicador + 1)}>Ver más...</div>
                                    </div>
                                </div>
                            ) :
                                null
                        }
                    </div>

                    {/* <img src={Cuadros} alt="cuadros"/> */}
                </div>
                {/* <div className="col-1">
                    <img src={FlechaDerecha} alt="marcodrecho"/>
                </div> */}
            </div>
        </div>
    )
};

export default XQ;