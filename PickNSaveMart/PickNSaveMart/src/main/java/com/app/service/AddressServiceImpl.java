package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AddressRepository;
import com.app.pojos.Address;

@Service
@Transactional
public class AddressServiceImpl implements IAddressService {
	
	@Autowired
	private AddressRepository addrRepo;
	@Autowired
	private UserServiceImpl user;

	/*
	 * @Override public Address getAddressesByUserId(Integer userId) {
	 * 
	 * return addrRepo.getAddressesByUserId(userId); }
	 */

	/*
	 * @Override public Address addOrEditAddress(Address addr) {
	 * 
	 * return addrRepo.save(addr); }
	 * 
	 * @Override public String deleteAddressById(Integer id) {
	 * addrRepo.deleteById(id); return "Address with id: " + id + " was deleted"; }
	 */
	
	@Override
	public Address getDeliveryAddress(Integer userId) {
		// TODO Auto-generated method stub
		return addrRepo.getDelivryAddress(userId);
	}
	
	@Override
	public Address updateAddress(Integer userId, Address adrr) {
	
		Address a=addrRepo.getDelivryAddress(userId);
		if(a !=null) {
		a.setAddressLine1(adrr.getAddressLine1());
		a.setAddressLine2(adrr.getAddressLine2());
		a.setCity(adrr.getCity());
		a.setPinCode(adrr.getPinCode());
		System.out.println(a);
		return addrRepo.save(a);
		}else {
			adrr.setSelectedUser(user.findById(userId));
			System.out.println(a);
			return addrRepo.save(adrr);
		}
		
		
	}
}
