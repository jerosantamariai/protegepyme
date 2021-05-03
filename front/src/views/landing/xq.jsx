import React, { useState } from 'react';
// import FlechaDerecha from '../../img/bigleft.svg';
// import Cuadros from '../../img/cuadros.png';
import Collage from '../../components/cuadros.jsx';
import parse from 'html-react-parser';
import VerMas from '../../img/vermas.svg';

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
                    <div className="row no-gutters">
                        <div className="col-6 mx-auto">
                            {
                                mapcollage()
                            }
                        </div>
                    </div>

                    <div className="row no-gutters">
                        {
                            Collage.length > 2 * multiplicador ? (
                                <div className="row no-gutters">
                                    <div className="btn mb-4">
                                        <h6>VER MAS</h6>
                                        <img src={VerMas} alt="vermas" className="vermas" onClick={() => setMultiplicador(multiplicador + 1)}/>
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