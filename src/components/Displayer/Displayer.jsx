import React from 'react';
import './style.css';

const Displayer = ({ marker }) => {
    return (
        <div className="displayer">
            <h2>{marker.label}</h2>

            <ul className="displayer_tabs">
                <li>T0</li> <li>T+3</li> <li>T+6</li>
            </ul>
        </div>
    );
};

export default Displayer;