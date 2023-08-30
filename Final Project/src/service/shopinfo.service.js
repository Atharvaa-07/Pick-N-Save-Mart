import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/shopper';

class shopInfoService {

    fetchShopInfo() {
       return axios.get(API_URL + '/shopDetails',{ headers: authHeader() })
      
    }
   


}

export default new shopInfoService();