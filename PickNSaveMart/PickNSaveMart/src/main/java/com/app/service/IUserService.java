package com.app.service;

import java.util.List;

import com.app.dto.LoginRequest;
import com.app.pojos.Role;
import com.app.pojos.Users;

public interface IUserService {
	//R
	Users registerOrEditUser(Users user);

	Users authenticateUser(LoginRequest request);

	List<Users> getUsersByRole(Role role);
	
	Users findByEmail(String email);

	Users findById(Integer id);
	 
	Users edit(Users user,int userId);

	String deleteUserById(Integer uid);
	
	List<Users> getUserByName(String fname);
	
	Users getUserByEmail(String Email);
	
	int countUsers();
	

}
