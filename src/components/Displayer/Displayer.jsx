import React, { useState, useEffect } from 'react';
import './style.css';

const Displayer = ({ marker }) => {

    const [data, setData] = useState(marker.data.hr0);
    const [activeTab, setActiveTab] = useState('hr0')

    
    useEffect(() => {
        setData(marker.data.hr0);
      }, [marker.data.hr0]);


    const onTabClick = (hr) => {
        setData({...marker.data[hr]});
        setActiveTab(hr);
    }

    return (
        <div className="displayer">
            <header className="displayer-header">
                <h2 className="displayer-title">{marker.label}</h2>

                <ul className="displayer-tabs">
                    <li className={activeTab === 'hr0' ? 'active-tab' : ''} onClick={() => onTabClick('hr0')}> {marker.data.hr0.time} </li>
                    <li className={activeTab === 'hr3' ? 'active-tab' : ''} onClick={() => onTabClick('hr3')}> {marker.data.hr3.time} </li>
                    <li className={activeTab === 'hr6' ? 'active-tab' : ''} onClick={() => onTabClick('hr6')}> {marker.data.hr6.time} </li>
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
                        <img src="/img/wind.png" alt="waves.png" className="displayer-img" />
                        <h3 className="displayer-section-title">Vent</h3>
                    </header>
                    <div className="displayer-section-content">
                    <div>Orientation : {data.windDirection} ° </div>
                    <div>Vitesse : {data.windSpeed} m/s </div>
                    <img 
                        src="/img/arrow.png" 
                        alt="arrow.png" 
                        style={{transform: `rotate(${data.windDirection}deg)`}}
                        className="displayer-article-arrow"
                        />
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
                    <img 
                        src="/img/arrow.png" 
                        alt="arrow.png" 
                        style={{transform: `rotate(${data.waveDirection}deg)`}}
                        className="displayer-article-arrow" 
                    /> 
                    </div>
                </article>

                <article className="displayer-article">
                    <header className="displayer-article-header">
                    <img src="/img/tips.png" alt="waves.png" className="displayer-img" />
                    <h3 className="displayer-section-title">Conseils</h3>
                    </header>
                    <div className="displayer-section-content">
                    {data.suggestions.map(suggestion => (
                        <div key={suggestion.id} >{suggestion.text}</div>
                    ))}
                    </div>
                </article>
            </section>
        </div>
    );
};

export default Displayer;