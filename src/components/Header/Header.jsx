import { Link } from 'react-router-dom';

import React from 'react';
import './style.css'

const Header = () => {
    return (
        <header className="header-main">
            <ul>
                <li><Link to="/">Marine Forecast</Link></li>
                <li><Link to="about">A propos</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
        </header>
    );
};

export default Header;