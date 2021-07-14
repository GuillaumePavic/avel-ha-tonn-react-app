import { useMapEvent, Marker } from 'react-leaflet';
import React, { useState, useEffect } from 'react';

const Search = ({ activeSearch, onMapClick }) => {

    const [searchMarker, setSearchmarker] = useState(null);
    
    useMapEvent({
        click(e) {
          if(activeSearch) {
            setSearchmarker(e.latlng);
            onMapClick(e.latlng);
          }
        }
      });

      useEffect(() => {
          setSearchmarker(null)
      }, [activeSearch])

    return (
        <React.Fragment>
        {searchMarker ? <Marker position={[searchMarker.lat, searchMarker.lng]} /> : null}
        </React.Fragment>
    );
};

export default Search;