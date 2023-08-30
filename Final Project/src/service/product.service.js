import axios from 'axios';
import authHeader from './auth-header';

const API_URL_PRO = 'http://localhost:8080/product';
const API_URL = 'http://localhost:8080/shop';

class ApiProductService {

    fetchProduct() {
       return axios.get(API_URL_PRO + '/list',{ headers: authHeader() })
    
      
    } 

    fetchProductAll(){
        return axios.get(API_URL_PRO +'/all',{headers:authHeader()})
    }

    fetchProductById(productId) {
        return axios.get(API_URL_PRO + '/info/'+ productId ,{ headers: authHeader() });
    }

    deleteProduct(productId) {
        console.log(productId)
        return axios.delete(API_URL_PRO + '/'+productId, { headers: authHeader() });
    }

    addProduct(product) {
        return axios.post(API_URL+ "/add-product",product,{ headers: authHeader() });
    }

    editProduct(product,pId) {
        console.log(pId);
        console.log(product);
        return axios.put(API_URL_PRO + '/edit/'+pId, product,{ headers: authHeader() });
    }

   

}

export default new ApiProductService();