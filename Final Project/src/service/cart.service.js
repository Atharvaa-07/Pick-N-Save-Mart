import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/cart';

class CartServiceShop {

    fetchCart() {
       return axios.get(API_URL + '/product',{ headers: authHeader() })
      
    }

    fetchCartById(cartId) {
        return axios.get(API_URL + '/fetch/'+cartId ,{ headers: authHeader() });
    }

    deleteCart(cartId) {
        console.log(cartId)
        return axios.delete(API_URL + '/'+cartId, { headers: authHeader() });
    }

    addCart(productId) {
        return axios.get(API_URL+"/"+productId,{headers:authHeader()});
    }

    editCart(cartId,cart) {
        return axios.put(API_URL + '/'+cartId,  cart,{ headers: authHeader() });
    }
   
    cartCheckOut() {
        return axios.get(API_URL + '/checkout',{ headers: authHeader() });
    }
   

}

export default new CartServiceShop();