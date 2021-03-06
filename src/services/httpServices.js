import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://avelhatonn-api.herokuapp.com';

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if(expectedError) {
        toast.error(error.response.data.message);
    } else {
        toast.error('Oops, il y a eu un souci côté serveur !');
    }

    return Promise.reject(error);
})

const http = {

    getMarkers: async () => {
        try {
           const response = await axios.get(`${API_URL}/markers`);
           return response.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    },

    getMarkerData: async (markerId) => {
        try {
            const response = await axios.get(`${API_URL}/markers/${markerId}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    getSearchData: async (latlng) => {
        try {
            const response = await axios.post(`${API_URL}/search`, latlng);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    userLogin: async (userLogin) => {
        try {
            const response = await axios.post(`${API_URL}/auth`, userLogin);
            localStorage.setItem('token', response.data.token);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    userSignup: async (userSignup) => {
        try {
            const response = await axios.post(`${API_URL}/user`, userSignup);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    getUser: async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${API_URL}/user`, {
                headers: {
                    authorization: token
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    saveMarker: async (marker) => {
        try {
            const token = localStorage.getItem('token');

            const headers = {
                headers: {
                    authorization: token
                }
            };

            const response = await axios.post(`${API_URL}/user/marker`, marker, headers);
            
            return response.data
        } catch (error) {
            console.log(error);
        }
    },

    deleteUser: async () => {
        try {
            const token = localStorage.getItem('token');

            const headers = {
                headers: {
                    authorization: token
                }
            };

            const response = await axios.delete(`${API_URL}/user`, headers);
            localStorage.removeItem('token');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default http;