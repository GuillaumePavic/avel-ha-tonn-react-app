import React, { useState, useEffect } from "react";
import "./style.scss";
import http from "../../services/httpServices";
import { marker } from "leaflet";

const UserPage = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      const userData = await http.getUser();
      console.log(userData);
      setMarkers(userData.markers);
    }
    fetchUserData();
  }, []);

  return (
    <div className="userPage-container">
      <div className="userPage-container-markers">
        <h2>Vos markers</h2>
        {markers.map(marker => (
          <div> {marker.label} </div>
        ))}
      </div>
      <div className="userPage-container-user">
        <div className="userPage-container-userInfo">user Info</div>
        <div className="userPage-container-mail">mail</div>
      </div>
    </div>
  );
};

export default UserPage;
