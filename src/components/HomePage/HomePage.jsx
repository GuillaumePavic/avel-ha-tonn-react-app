import Map from '../Map/Map';
import Displayer from '../Displayer/Displayer';
import React, {useState, useEffect} from 'react';
import './style.css';

import http from '../../services/httpServices';

const HomePage = () => {
    
    const [markersList, setMarkers] = useState([]);
    const [markerData, setMarkerData] = useState(null);
    const [activeSearch, setActiveSearch] = useState(false);

    const onSearchClick = () => {
        setActiveSearch(!activeSearch);
        if(activeSearch === false) return;
        //change cursor
    }

    const onMapClick = async (latlng) => {
        console.log(latlng)
        const data = await http.getSearchData(latlng);
        setMarkerData(data);
    }

    //1.Fetch markers
    useEffect(() => {
        async function fetchMarkers(){
            const markersList = await http.getMarkers();
            setMarkers(markersList);
        }
        fetchMarkers();
    }, []);

    //2.Fetch data for clicked marker
    const onMarkerClick = async (markerId) => {
        const data = await http.getMarkerData(markerId);
        /*const data = {
            "id": 1,
            "lat": 47.753341,
            "lng": -3.518707,
            "label": "Le Loc'h",
            "data": {
                "hr0": {
                    "airTemperature": 17.69,
                    "cloudCover": 72.13,
                    "precipitation": 0.21,
                    "time": "15:00",
                    "waterTemperature": 18.01,
                    "waveDirection": 281.72,
                    "waveHeight": 0.87,
                    "wavePeriod": 4.3,
                    "windDirection": 324.1,
                    "windSpeed": 3.49,
                    "suggestions": [
                        "Pas grand chose à faire à la plage !"
                    ]
                },
                "hr3": {
                    "airTemperature": 15.05,
                    "cloudCover": 56.89,
                    "precipitation": 0,
                    "time": "18:00",
                    "waterTemperature": 16.61,
                    "waveDirection": 281.61,
                    "waveHeight": 0.8,
                    "wavePeriod": 4.42,
                    "windDirection": 352.94,
                    "windSpeed": 2.98,
                    "suggestions": [
                        "Pas grand chose à faire à la plage !"
                    ]
                },
                "hr6": {
                    "airTemperature": 13.89,
                    "cloudCover": 76.75,
                    "precipitation": 0,
                    "time": "20:00",
                    "waterTemperature": 16.26,
                    "waveDirection": 279.04,
                    "waveHeight": 0.7,
                    "wavePeriod": 4.55,
                    "windDirection": 351.15,
                    "windSpeed": 2.33,
                    "suggestions": [
                        "Pas grand chose à faire à la plage !"
                    ]
                }
            }
        };*/

        setMarkerData(data);
        
       ;
    }

    

    return (
        <div className="homePage" >
            <Map markersList={markersList} onMarkerClick={onMarkerClick} activeSearch={activeSearch} onMapClick={onMapClick} />

            {markerData ? <Displayer marker={markerData} /> 
            : <div className="homePage-click-info"> Cliquez sur un des marqueurs <img src="/img/marker.png" alt="marker.png" className="click-img" /> </div>
            }

            <button className={activeSearch ? "homePage-search homePage-search_active" : "homePage-search"} onClick={onSearchClick} >
                <img src="/img/marker.png" alt="marker.png" className="search-img"/>
            </button>
            {activeSearch ? 
            <aside className="homePage-search-aside">
                <p>Cliquez à un endroit du littoral pour en connaître les conditions  </p>  
            </aside> : null }          
        </div>
    );
};

export default HomePage;