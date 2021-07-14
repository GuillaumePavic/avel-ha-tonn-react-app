import React, { useState, useEffect } from 'react';
import './style.scss';

const Displayer = ({ marker, onCloseButtonClick }) => {

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

        <div className="displayer-close-button" onClick={onCloseButtonClick}> <img src="/img/close.png" alt="close.png" /> </div>

            <header className="displayer-header">
                <h2 className="displayer-header-title">{(marker.label) ? marker.label : `${marker.lat}, ${marker.lng}`}</h2>

                <ul className="displayer-header-tabs">
                    <li className={activeTab === 'hr0' ? 'active-tab' : ''} onClick={() => onTabClick('hr0')}> {marker.data.hr0.time} </li>
                    <li className={activeTab === 'hr3' ? 'active-tab' : ''} onClick={() => onTabClick('hr3')}> {marker.data.hr3.time} </li>
                    <li className={activeTab === 'hr6' ? 'active-tab' : ''} onClick={() => onTabClick('hr6')}> {marker.data.hr6.time} </li>
                </ul>
            </header>

            <section className="displayer-section">

                <article className="displayer-article">
                    <header className="displayer-article-header">
                        <img src="/img/sun.png" alt="sun.png" className="displayer-article-img" />
                        <h3 className="displayer-article-title"> Méteo </h3>
                    </header>
                    <div className="displayer-article-content">
                        <div className="displayer-article-card"> <p>T° air</p> <p>{data.airTemperature} °C</p> </div>
                        <div className="displayer-article-card"> <p>Précipitations</p> <p>{data.precipitation} kg/m²</p> </div>
                        <div className="displayer-article-card"> <p>T° eau</p> <p>{data.waterTemperature} °C</p> </div>
                    </div>
                </article>

                <article className="displayer-article">
                    <header className="displayer-article-header">
                        <img src="/img/wind.png" alt="waves.png" className="displayer-article-img" />
                        <h3 className="displayer-article-title">Vent</h3>
                    </header>
                    <div className="displayer-article-content">
                    <div className="displayer-article-card"> <p>Vitesse</p> <p>{data.windSpeed} m/s</p> </div>
                    <div className="displayer-article-card">  
                        <img 
                            src="/img/arrow.png" 
                            alt="arrow.png" 
                            style={{transform: `rotate(${data.windDirection}deg)`}}
                            className="displayer-article-arrow"
                        />
                    </div>
                    </div>
                </article>

                <article className="displayer-article">
                    <header className="displayer-article-header">
                        <img src="/img/waves.png" alt="waves.png" className="displayer-article-img" />
                        <h3 className="displayer-article-title">Vagues</h3>
                    </header>
                    <div className="displayer-article-content">
                    <div className="displayer-article-card"> <p>Hauteur</p> <p>{data.waveHeight} m </p> </div>
                    <div className="displayer-article-card"> <p>Période</p> <p>{data.wavePeriod} secondes</p> </div>
                    <div className="displayer-article-card">  
                    <img 
                        src="/img/arrow.png" 
                        alt="arrow.png" 
                        style={{transform: `rotate(${data.waveDirection}deg)`}}
                        className="displayer-article-arrow" 
                    /> 
                    </div>
                    </div>
                </article>
                
                <article className="displayer-article">
                    <header className="displayer-article-header">
                    <img src="/img/tips.png" alt="waves.png" className="displayer-article-img" />
                    <h3 className="displayer-article-title">Conseils</h3>
                    </header>
                    <div className="displayer-article-content displayer-article-suggestions">
                    {data.suggestions.map(suggestion => (
                        <div key={suggestion.id} className="displayer-article-card" >{suggestion.text}</div>
                    ))}
                    </div>
                </article>
                
            </section>
        </div>
    );
};

export default Displayer;