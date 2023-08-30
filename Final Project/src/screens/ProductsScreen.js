import React,{ Component } from "react";
import Hander from "../components/Hader";
import cartService from "../service/cart.service";
import productService from "../service/product.service";

class ProductsScreen extends Component{

  constructor(props){
    super(props)
     this.state={
         product:[],
         message:null
     }

    
     this.reloadProductList = this.reloadProductList.bind(this);
}

componentDidMount(){
    this.reloadProductList();
}


reloadProductList(){
     productService.fetchProductAll().then(res=>{
         this.setState({product:res.data})
         console.log(res)
        console.log(this.state.product)

    },err=>{
        console.log(err);
    })
}



 addProductToCart(productId){
     let pro_id=productId;
     cartService.addCart(pro_id)
     
     .then(res=>{
         console.log(res);
        this.reloadProductList();
        alert("Product added successfully to cart") 
    },err=>{
         console.log(err);
     })
 }

 render() {
    return (
        <div>
    <Hander/>
     
      <div className="container">
    
                <div className="row row-cols-1 row-cols-md-3 g-4">
                
            {
                           
                            this.state.product.map(
                        product => <div className="col">
                                     <div className="card h-100 CardElement">
                                    <div className="card-body text-center">
                                            <img src={"http://localhost:8080/product/image" +`/${product.imageName}`} alt="product image" className="img-fluid"/>
                                        <div className="card-title"> <h3>{product.productName}</h3> </div>
                                        <div className="card-text">
                                            <h6>category : {product.categories}</h6>
                                            <h5>{product.price} &#8377; </h5>
                                            <hr/>
                                            <div >
                                                <div className="col-md-4 Block"><button onClick={() => this.addProductToCart(product.p_Id)} className="btn btn-primary btn-lg btn-block">Add to cart</button></div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>  

                        
                            )
                        }
                   </div>
            </div>

        </div>
    );
}

}
export default ProductsScreen;