package com.app.service;

import java.util.List;

import com.app.pojos.Product;
import com.app.pojos.Shop;

public interface IProductService {
	
	List<Product> getProductBySId(int S_id);
	
	
	List<Product> displayProduct();
	
    Product findById(int id);
	
    Shop delete(int id);
    
    Product editProduct(int id, Product editProduct);
    
 String addNewStokesByPid(int pId,int quantity);

}
