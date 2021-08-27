import React, { useEffect } from 'react';
import http from '../../services/httpServices';

const UserPage = () => {

    useEffect(() => {
        async function fetchUserData() {
          const userData = await http.getUser();
          console.log(userData)
        }
        fetchUserData();
      }, []);

    return (
        <div>
            User Page :)
        </div>
    );
};

export default UserPage;