import Map from '../Map/Map';
import Displayer from '../Displayer/Displayer';
import React, {useState, useEffect} from 'react';
import './style.css';

import http from '../../services/httpServices';

const HomePage = () => {
    const [markersList, setMarkers] = useState([]);
    const [markerData, setMarkerData] = useState(null);

    useEffect(() => {
        async function fetchMarkers(){
            const markersList = await http.getMarkers();
            setMarkers(markersList);
        }
        fetchMarkers();
    }, []);

    const onMarkerClick = async (markerId) => {
        //const data = await http.getMarkerData(markerId);
        const data = {
            id: 1,
            lat: 47.753341,
            lng: -3.518707,
            label: "Le Loc'h",
            data: {
              airTemperature: 17.01,
              cloudCover: 100,
              precipitation: 0.72,
              waterTemperature: 16.43,
              waveDirection: 227.08,
              waveHeight: 0.71,
              wavePeriod: 5.4,
              windDirection: 251.61,
              windSpeed: 3.59,
              suggestions: [ 'Not much to do at the beach today !' ]
            }
          };

        setMarkerData(data);
    }
    

    return (
        <div className="home">
            <Map markersList={markersList} onMarkerClick={onMarkerClick} />
            {markerData ? <Displayer marker={markerData} /> : <div className="clic"> Cliquez sur un des marqueurs</div>}            
        </div>
    );
};

export default HomePage;