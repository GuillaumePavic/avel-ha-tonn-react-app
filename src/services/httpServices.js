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
        try {
            const response = await axios.get(`http://localhost:5000/api/marker/${markerId}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    getSearchData: async (latlng) => {
        try {
            const response = await axios.post('http://localhost:5000/api/pointer', latlng);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default http;