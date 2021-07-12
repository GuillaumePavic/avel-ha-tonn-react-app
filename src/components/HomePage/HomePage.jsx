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

    const onCloseButtonClick = () => {
        setMarkerData(null);
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

        setMarkerData(data);
    }

    
    return (
        <div className="homePage" >
            <Map markersList={markersList} onMarkerClick={onMarkerClick} activeSearch={activeSearch} onMapClick={onMapClick} />

            {markerData 
            ? <Displayer marker={markerData} onCloseButtonClick={onCloseButtonClick} /> 
            : <div className="homePage-click-info"> Cliquez sur un des marqueurs <img src="/img/marker.png" alt="marker.png" className="click-img" /> </div>
            }

            <button className={activeSearch ? "homePage-search homePage-search_active" : "homePage-search"} onClick={onSearchClick} >
                <img src="/img/marker.png" alt="marker.png" className="search-img"/>
            </button>
            {activeSearch && 
                <aside className="homePage-search-aside">
                    <p>Cliquez à un endroit du littoral pour en connaître les conditions</p>  
                </aside>
            }          
        </div>
    );
};

export default HomePage;