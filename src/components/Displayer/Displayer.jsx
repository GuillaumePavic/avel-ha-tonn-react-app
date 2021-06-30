import React, { useState, useEffect } from 'react';
import './style.css';

const Displayer = ({ marker }) => {

    const [data, setData] = useState(marker.data.hr0)

    
    useEffect(() => {
        setData(marker.data.hr0);
      }, [marker.data.hr0]);


    const onTabClick = (hr) => {
        setData({...marker.data[hr]});
    }

    return (
        <div className="displayer">
            <header className="displayer-header">
                <h2 className="displayer-title">{marker.label}</h2>

                <ul className="displayer-tabs">
                    <li onClick={() => onTabClick('hr0')}>Hr0</li>
                    <li onClick={() => onTabClick('hr3')}>Hr3</li>
                    <li onClick={() => onTabClick('hr6')}>Hr6</li>
                </ul>
            </header>

            <section className="displayer-section">

                <article className="displayer-article">
                    <header className="displayer-article-header">
                        <img src="/img/sun.png" alt="sun.png" className="displayer-img" />
                        <h3 className="displayer-section-title"> Méteo </h3>
                    </header>
                    <div className="displayer-section-content">
                    <div>Température : {data.airTemperature} °C </div>
                    <div>Couverture nuageuse : {data.cloudCover} % </div>
                    <div>Précipitations : {data.precipitation} kg/m² </div>
                    <div>Température de l'eau : {data.waterTemperature} °C </div>
                    </div>
                </article>

                <article className="displayer-article">
                    <header className="displayer-article-header">
                        <img src="/img/waves.png" alt="waves.png" className="displayer-img" />
                        <h3 className="displayer-section-title">Vagues</h3>
                    </header>
                    <div className="displayer-section-content">
                    <div>Vagues : {data.waveHeight} m </div>
                    <div>Période : {data.wavePeriod} secondes </div>
                    <div>Orientation : {data.waveDirection} ° </div>
                    </div>
                </article>

                <article className="displayer-article">
                    <header className="displayer-article-header">
                        <img src="/img/wind.png" alt="waves.png" className="displayer-img" />
                        <h3 className="displayer-section-title">Vent</h3>
                    </header>
                    <div className="displayer-section-content">
                    <div>Orientation : {data.windDirection} ° </div>
                    <div>Vitesse : {data.windSpeed} m/s </div>
                    </div>
                </article>
                
                <article className="displayer-article">
                    <header className="displayer-article-header">
                    <img src="/img/tips.png" alt="waves.png" className="displayer-img" />
                    <h3 className="displayer-section-title">Conseils</h3>
                    </header>
                    <div className="displayer-section-content">
                    {data.suggestions.map(suggestion => (
                        <div>{suggestion}</div>
                    ))}
                    </div>
                </article>
            </section>
        </div>
    );
};

export default Displayer;