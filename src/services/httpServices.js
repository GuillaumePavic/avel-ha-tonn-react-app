import axios from 'axios';

const http = {

    getMarkers: async () => {
        try {
           const response = await axios.get('http://localhost:5000/api/markers');
           return response.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    },

    getMarkerData: async (markerId) => {
        console.log(markerId)
        try {
            const response = await axios.get(`http://localhost:5000/api/marker/${markerId}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default http;