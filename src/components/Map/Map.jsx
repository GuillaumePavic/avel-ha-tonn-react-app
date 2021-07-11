import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import React from 'react';
import './style.css';
import Search from '../Search/Search';

const Map = ({ markersList, onMarkerClick, activeSearch, onMapClick }) => {
    return (
        <div className="map_container leaflet-grab-active" >
            <MapContainer 
              center={[47.998757, -3.398641]} 
              zoom={8} scrollWheelZoom={true} 
              doubleClickZoom={true}
            >

            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

              {markersList.map(marker => (
                  <Marker 
                    key={marker.id} 
                    position={[marker.lat, marker.lng]} 
                    eventHandlers={{
                      click: () => {
                        onMarkerClick(marker.id);
                      },
                    }}
                  >
                  <Popup>
                      {marker.label}
                  </Popup>
                  </Marker>)
              )}

              <Search activeSearch={activeSearch} onMapClick={onMapClick} />
              
            </MapContainer>
        </div>
    );
};

export default Map;