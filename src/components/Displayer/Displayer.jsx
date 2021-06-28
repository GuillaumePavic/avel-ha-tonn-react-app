import React from 'react';
import './style.css';

const Displayer = ({ marker }) => {
    return (
        <div className="displayer">
            <h2>{marker.label}</h2>
        </div>
    );
};

export default Displayer;