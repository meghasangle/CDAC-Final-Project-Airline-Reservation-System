package com.app.service;

import com.app.dto.UserDTO;
import com.app.pojos.User;

public interface IUserService {
	//Method for user login
	User getUser(String email, String password);

	// method for signup
	User saveUser(UserDTO userdto);
        User updateUserProfile(int userId,UserDTO user);
}
