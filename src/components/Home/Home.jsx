import Map from '../Map/Map';
import Displayer from '../Displayer/Displayer';
import React from 'react';
import './style.css';

const Home = () => {
    return (
        <div className="home">
            <Map />
            <Displayer />
        </div>
    );
};

export default Home;