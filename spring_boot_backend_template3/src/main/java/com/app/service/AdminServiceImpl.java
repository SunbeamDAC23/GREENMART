package com.app.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.customExceptions.ResourceNotFoundException;
import com.app.dto.AuthRequest;
import com.app.pojos.Admin;
import com.app.repository.AdminRepository;

@Service
@Transactional
public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminRepository adminRepo;
	
	public Admin authenticateAdmin(AuthRequest request) {
		
		Admin admin= adminRepo
				.findByEmailAndPassword(request.getEmail(), request.getPassword())
				.orElseThrow(()->new ResourceNotFoundException("Invalid Credentials"));
		return admin;
	}

}
