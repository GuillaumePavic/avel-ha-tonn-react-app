import Map from '../Map/Map';
import Displayer from '../Displayer/Displayer';
import React, {useState, useEffect} from 'react';
import './style.css';

import http from '../../services/httpServices';

const HomePage = () => {
    
    const [markersList, setMarkers] = useState([]);
    const [markerData, setMarkerData] = useState(null);


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
        <div className="home">
            <Map markersList={markersList} onMarkerClick={onMarkerClick} />
            {markerData ? <Displayer marker={markerData} /> 
            :<div className="clic"> Cliquez sur un des marqueurs <img src="/img/marker.png" alt="marker.png" className="clic-img" /> </div>}            
        </div>
    );
};

export default HomePage;