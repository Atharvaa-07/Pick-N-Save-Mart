import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/shop';
const API_URL_PRO = 'http://localhost:8080/product';

class ApiServiceShop {

    fetchShop() {
       return axios.get(API_URL + '/details',{ headers: authHeader() })
      
    }

    fetchShopById() {
        return axios.get(API_URL + '/owner' ,{ headers: authHeader() });
    }



    deleteShop(shopId) {
        console.log(shopId)
        return axios.delete(API_URL + '/deleteShop' +'/'+shopId, { headers: authHeader() });
    }

    addShop(shop) {
        return axios.post(API_URL+ "/add",shop,{ headers: authHeader() });
    }

    editShop(shop) {
        return axios.put(API_URL + '/updateShop',  shop,{ headers: authHeader() });
    }
     
    visitShop(sId){
        return axios.get(API_URL_PRO +'/getShopProduct/'+ sId,{headers:authHeader()})
    }
   

}

export default new ApiServiceShop();