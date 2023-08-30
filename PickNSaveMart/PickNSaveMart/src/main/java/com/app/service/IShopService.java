package com.app.service;


import java.util.List;

import com.app.pojos.Product;
import com.app.pojos.Shop;

public interface IShopService {
	Shop addNewShope(int U_id,Shop shop);
	List<Shop> getAllShop();
	Product addNewProductInShop(int U_id,Product newProduct);
	Shop getShopByUserId(int U_id);
	//String editProduct(int p_id,Product editProduct);
	//String deleteProduct(int P_id);
	//void checkOut();
	String deleteShop(int sId);
	Shop updateShop(Shop s);
	Shop getShopBYSid(int sid);
	//int countNumberOfShop();
	
	

}
