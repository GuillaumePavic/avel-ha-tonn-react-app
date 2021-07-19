import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if(!expectedError) {
        toast.error('Oops, il y a eu un souci !')
    }

    return Promise.reject(error);
})

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
            const response = await axios.post('http://localhost:5000/api/search', latlng);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default http;