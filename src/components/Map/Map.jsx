import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import React from 'react';
import './style.css';

const Map = () => {
    return (
        <div className="map_container">
            <MapContainer center={[47.998757, -3.398641]} zoom={9} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[47.753341, -3.518707]}>
                  <Popup>
                      Le Loc'h
                  </Popup>
              </Marker>

              <Marker position={[47.597138, -3.156162]}>
                  <Popup>
                      Sainte-Barbe
                  </Popup>
              </Marker>

              <Marker position={[47.840393, -4.351886]}>
                  <Popup>
                      La Torche
                  </Popup>
              </Marker>

              <Marker position={[48.047262, -4.710513]}>
                  <Popup>
                      La Baie des Trépassés
                  </Popup>
              </Marker>

              <Marker position={[48.210307, -4.557688]}>
                  <Popup>
                      La Palue
                  </Popup>
              </Marker>

              <Marker position={[47.522001, -3.155182]}>
                  <Popup>
                      Port Blanc
                  </Popup>
              </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;