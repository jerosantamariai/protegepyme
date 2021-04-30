import React from 'react';
// import Formulario from '../../img/formulario.png';
// import FlechaDerecha from '../../img/bigleft.svg';
import Separador from '../../img/separador.svg';

const Contacto = props => {
    return (
        <div className="contactainer" id="contacto">
            <div className="row no-gutters">
                <div className="col-12 text-center my-auto">
                    <h1>¡HABLEMOS!</h1>
                    <h3>QUEREMOS AYUDARTE</h3>
                    <i className="far fa-comment-dots fa-8x"></i>
                    {/* <img src={Formulario} alt="formulario"/> */}
                    <form className="formulario" action="">
                        <div className="mb-3">
                            <label for="email" className="form-label">EMAIL</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label for="name" className="form-label">NOMBRE</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label for="text" className="form-label">COMENTARIO</label>
                            <textarea className="form-control" id="text" rows="3"></textarea>
                        </div>
                        <div className="btn">ENVIAR</div>
                    </form>
                    <img src={Separador} alt="separador" className="separador py-5" />
                </div>
                {/* <div className="col-1">
                    <img src={FlechaDerecha} alt="flechamargen" />
                </div> */}
            </div>
        </div>
    )
};

export default Contacto;