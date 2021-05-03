import React from 'react';
// import Tabla from '../../img/tabla.png';
// import FlechaIzquierda from '../../img/smalleft.svg';
import Separador from '../../img/separador.svg';

const Precios = props => {
    return (
        <div className="preciostainer" id="precios">
            <div className="row no-gutters">
                {/* <div className="col-1">
                    <img src={FlechaIzquierda} alt="flechaborde" />
                </div> */}
                <div className="col-12 text-center">
                    <h1 className="my-3">TRANSPARENCIA</h1>
                    <h4 className="my-3">LO QUE NOS CARACTERIZA</h4>
                    <i class="fas fa-dollar-sign fa-8x my-3"></i>
                    <h1 className="my-3">NUESTROS PRECIOS</h1>
                    <div className="tablecontent">
                        <table className="my-4">
                            <tr>
                                <th>TRAMO DEUDA</th>
                                <th>COMISIÓN DE RECUPERO</th>
                                <th>ANTICIPO&#42;</th>
                            </tr>
                            <tr>
                                <td>$ 3.000.000 - $ 4.999.999</td>
                                <td>17%</td>
                                <td>$ 289.000</td>
                            </tr>
                            <tr>
                                <td>$ 5.000.000 - $ 9.999.999</td>
                                <td>15%</td>
                                <td>$ 379.000</td>
                            </tr>
                            <tr>
                                <td>$ 10.000.000 - $ 20.000.000</td>
                                <td>12%</td>
                                <td>$ 399.000</td>
                            </tr>
                            <tr>
                                <td>Sobre $ 20.000.000</td>
                                <td>10%</td>
                                <td>$ 439.000</td>
                            </tr>
                        </table>
                    </div>
                    <ul className="obs text-center">
                        <li>&#42;A todo evento, se imputa y deduce de la comisión)</li>
                        <li>No incluye costas gastos del juicio.</li>
                        <li>Juicios ordinarios.</li>
                        <li>Desde 12 UF.</li>
                    </ul>
                    <img src={Separador} alt="separador" className="separador py-5" />
                </div>
            </div>
        </div>
    )
};

export default Precios;