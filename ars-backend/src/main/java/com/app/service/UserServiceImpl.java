package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.UserAlreadyExistException;
import com.app.custom_exceptions.UserNotFoundException;
import com.app.dao.UserRepository;
import com.app.dto.UserDTO;
import com.app.pojos.Role;
import com.app.pojos.User;
@Service
@Transactional
public class UserServiceImpl implements IUserService {
	@Autowired
	private UserRepository userRepo;
	@Override
	public User getUser(String email, String password) {
		User user =  userRepo.findByEmailAndPassword(email, password);
		if(user != null)
			return user;
		else
			throw new UserNotFoundException("User not found, please try with correct credentials");
	}
	
	@Override
	public User saveUser(UserDTO userdto) {
		User user = new User();
		if(userRepo.findByEmail(userdto.getEmail()) == null) {
			BeanUtils.copyProperties(userdto, user);
			user.setUserRole(Role.CUSTOMER);
			System.out.println(user);
			return userRepo.save(user);
		}else
			throw new UserAlreadyExistException("User Already Exist, Please login or try with another email");
	}
        @Override
	public User updateUserProfile(int userId, UserDTO userDTO) {
		System.out.println("inside updateUserProfile (service method) "+userDTO);
		User userDetails=userRepo.findById(userId).get();
		System.out.println("user details from "+userDetails);
		userDetails.setPassword(userDTO.getPassword());
		userDetails.setMobileNo(userDTO.getMobileNo());
		System.out.println("Updated user Details "+userDetails);
		return userDetails;
	}
}
