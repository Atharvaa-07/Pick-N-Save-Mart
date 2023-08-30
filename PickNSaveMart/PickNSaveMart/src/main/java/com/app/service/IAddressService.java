package com.app.service;

import com.app.pojos.Address;

public interface IAddressService {

	/*
	 * Address getAddressesByUserId(Integer userId);
	 * 
	 * Address addOrEditAddress(Address addr);
	 * 
	 * String deleteAddressById(Integer aid);
	 */
	
	Address getDeliveryAddress(Integer userId);
	
	Address updateAddress(Integer userId,Address adrr);
	
	

}
