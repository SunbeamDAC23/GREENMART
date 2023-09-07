package com.app.service;

import java.util.List;

import com.app.dto.AddUserDTO;
import com.app.dto.AuthRequest;
import com.app.dto.UserResponseDTO;
import com.app.pojos.User;

public interface UserService {
	
	UserResponseDTO addNewUser(AddUserDTO dto);
	UserResponseDTO updateUser(Long uid , AddUserDTO dto);
	List<UserResponseDTO> getAllUsers();
	UserResponseDTO removeUser(Long id);
	UserResponseDTO userAuthentication(AuthRequest request);
	UserResponseDTO findUser(Long uid);
}
