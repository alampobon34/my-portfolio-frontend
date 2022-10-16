import axios from 'axios';


const api = axios.create({
	baseURL: 'http://backend-alampobon34.herokuapp.com/api/',
});


export default api;
