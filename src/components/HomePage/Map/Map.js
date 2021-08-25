import React, { useState, useEffect } from "react";
import "./style.scss";
import PropTypes from 'prop-types';
import Search from "../Search/Search";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

const Map = ({ markersList, onMarkerClick, activeSearch, onMapClick }) => {
  const [screenWidth] = useState(window.innerWidth);

  return (
    <div className="map_container">
      <MapContainer
        center={[47.863338, -3.70448]}
        zoom={screenWidth > 1024 ? 9 : 7}
        scrollWheelZoom={true}
        doubleClickZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markersList.map((marker) => (
          <Marker
            key={marker._id}
            position={[marker.lat, marker.lng]}
            eventHandlers={{
              click: () => {
                onMarkerClick(marker._id);
              },
            }}
          >
            <Popup>{marker.label}</Popup>
          </Marker>
        ))}

        <Search activeSearch={activeSearch} onMapClick={onMapClick} />
      </MapContainer>
    </div>
  );
};

export default Map;

Map.propTypes = {
  markersList: PropTypes.array.isRequired,
  onMarkerClick: PropTypes.func.isRequired,
  activeSearch: PropTypes.bool.isRequired,
  onMapClick: PropTypes.func.isRequired
}