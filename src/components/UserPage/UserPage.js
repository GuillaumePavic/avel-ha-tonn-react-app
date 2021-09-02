import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./style.scss";
import http from "../../services/httpServices";
import { toast } from "react-toastify";

const UserPage = () => {
  const [markers, setMarkers] = useState([]);
  const [userData, setUserData] = useState({});
  const [userConnected, setUserConnected] = useState(true);
  const [accountDeleted, setAccountDeleted] = useState(false);

  useEffect(() => {
    async function fetchUserData() {
      const userData = await http.getUser();
      setUserData(userData);
      setMarkers(userData.markers);
    }
    fetchUserData();
  }, []);

  const handleDeleteUser = async () => {
    const response = await http.deleteUser();
    if (response) {
      setAccountDeleted(true);
      toast.info("Compte supprimé !");
    }
  };

  const token = localStorage.getItem('token');
  if(!token) setUserConnected(false); 
  console.log('token ->', userConnected);

  return (
    <div>
      {accountDeleted || !userConnected? <Redirect to="/"></Redirect> : 
      <div className="userPage-container">
        <div className="userPage-container-markers">
          <h2>Vos markers</h2>
          {markers.map((marker) => (
            <div key={marker._id} className="userPage-marker">
              <h3>{marker.label ? marker.label : "Marker"}</h3>
              <p> {marker.lat} </p>
              <p> {marker.lng} </p>
            </div>
          ))}
        </div>
        <div className="userPage-container-user">
          <p> {userData.name} </p>
          <p> {userData.email} </p>
          <button onClick={handleDeleteUser}>Supprimer le compte</button>
        </div>
      </div>}
    </div>

  );
};

export default UserPage;
