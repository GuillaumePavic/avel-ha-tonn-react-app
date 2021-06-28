import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import React from 'react';
import './style.css';

const Map = ({ markersList, onMarkerClick }) => {
    return (
        <div className="map_container">
            <MapContainer center={[47.998757, -3.398641]} zoom={9} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {markersList.map(marker => (
                  <Marker key={marker.id} position={[marker.lat, marker.lng]} 
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
              
            </MapContainer>
        </div>
    );
};

export default Map;