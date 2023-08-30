import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/order';

class OrderService {


     fetchOrderById() {
         console.log('data feacted')
         return axios.get(API_URL + '/myOrder' ,{ headers: authHeader() });
     }

    deleteOrder(orderId) {
        console.log(orderId)
        return axios.delete(API_URL + '/cancelOrder/'+orderId, { headers: authHeader() });
    }

    addOrder() {
        console.log("inside addOrder api call")
        return axios.get(API_URL+"/placed",{headers:authHeader()});
    }
   
   

}

export default new OrderService();