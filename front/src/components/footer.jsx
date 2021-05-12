import React from 'react';
// import FlachaDerecha from '../img/smalleft.svg';

const Footer = props => {
    return(
        <footer>
            <div className="row no-gutters">
                {/* <div className="col-1">
                    <img src={FlachaDerecha} alt="margen" className="margen" />
                </div> */}
                <div className="col-12 text-center my-auto">
                    <h1>O CONTACTANOS AL</h1>
                    <h4>+56912345678</h4>
                    <h4>ABOGADOS@PROTEGEPYME.COM</h4>
                </div>
            </div>
            <div className="row no-gutters">
                {/* <div className="col-1">
                    <img src={FlachaDerecha} alt="margen" className="margen" />
                </div> */}
                <div className="col-12 text-center my-auto realfooter">
                    <p>Pagina diseñada y codificada por JJWebStudio</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;