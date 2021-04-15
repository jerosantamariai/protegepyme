import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = props => {
    return(
        <div className="container">
            <h1>Lo siento, aqui no hay nada! Haz <Link to="/">click</Link> aqui para ir al inicio</h1>
        </div>
    )
};

export default NotFound;