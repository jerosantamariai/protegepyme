import React from 'react';
// import ComoTrabajamos from './landing/comotrabajamos';
// import Contacto from './landing/contacto';
// import Inicio from './landing/inicio';
// import Precios from './landing/precios';
// import QuienesSomos from './landing/quienessomos';
// import XQ from './landing/xq';
import Desktop from '../img/desktop.png';

const Home = props => {
    return(
        <div className="hometainer">
            {/* <Inicio />
            <QuienesSomos />
            <ComoTrabajamos />
            <XQ />
            <Precios />
            <Contacto /> */}
            <img src={Desktop} alt="desktop" className="desktop" />
        </div>
    )
};

export default Home;