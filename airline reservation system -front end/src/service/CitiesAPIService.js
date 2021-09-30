import axios from 'axios';
import { BASE_API } from '../constants/ApiConstant';

const CITIES_API_BASE_URL = 'http://localhost:8080';

class ApiService {

    fetchCities() {
        return axios.get(BASE_API+'/cities');
    }

}

export default new ApiService();