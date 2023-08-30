package com.app.service;

import java.util.List;

import com.app.dto.CheckOutResponse;
import com.app.pojos.ShopingCart;

public interface IShopingCartService {
	ShopingCart addProductToCart(ShopingCart cart);
	String deleteItemFromCart(int id);
	List<ShopingCart> getCartByUserId(int u_id);
	ShopingCart editQuantity(int id, ShopingCart cart);
	CheckOutResponse checkOutProduct(int u_id);
	CheckOutResponse availablity(ShopingCart cart,int uId);
	String payMentCancelation(int uId);
	ShopingCart getCartById(int cartId);

}
