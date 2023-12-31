package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.customExceptions.ResourceNotFoundException;
import com.app.dto.AddUserDTO;
import com.app.dto.AuthRequest;
import com.app.dto.UserResponseDTO;
import com.app.pojos.User;
import com.app.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public UserResponseDTO addNewUser(AddUserDTO dto) {
		
		User userEntity=mapper.map(dto, User.class);
		User persistentUser = userRepo.save(userEntity);
		
		
		return mapper.map(persistentUser, UserResponseDTO.class);
	}

	@Override
	public UserResponseDTO updateUser(Long uid, AddUserDTO dto) {
		
		User userEntity = userRepo.findById(uid)
				.orElseThrow(()->new ResourceNotFoundException("Invalid User ID"));
		mapper.map(dto, userEntity);
		userEntity.setId(uid);
		
				return mapper.map(userEntity, UserResponseDTO.class);
	}

	@Override
	public List<UserResponseDTO> getAllUsers() {
		
		List<User> usersList = userRepo.findAll();
		
		
		
		return usersList.stream()
				.map(user -> mapper.map(user, UserResponseDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public UserResponseDTO removeUser(Long id) {
		User toDelUser=userRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("Invalid User ID"));
		
		userRepo.deleteById(id);
		
		return mapper.map(toDelUser, UserResponseDTO.class);
	}

	@Override
	public UserResponseDTO userAuthentication(AuthRequest request) {
		User user=userRepo
				.findByEmailAndPassword(request.getEmail(),request.getPassword())
				.orElseThrow(()->new ResourceNotFoundException("Invalid Credentials"));
		
		return mapper.map(user, UserResponseDTO.class);
	}

	@Override
	public UserResponseDTO findUser(Long uid) {
		User user=userRepo.findById(uid).orElseThrow(()->new ResourceNotFoundException("Invalid User ID"));
		return mapper.map(user,UserResponseDTO.class);
	}

}
