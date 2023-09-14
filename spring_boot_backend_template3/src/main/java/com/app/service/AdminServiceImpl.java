package com.app.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.customExceptions.ResourceNotFoundException;
import com.app.dto.AuthRequest;
import com.app.dto.SummaryDTO;
import com.app.pojos.Admin;
import com.app.repository.AdminRepository;
import com.app.repository.OrderRepository;
import com.app.repository.ProductRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminRepository adminRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private ProductRepository productRepo;
	
	@Autowired
	private OrderRepository orderRepo;
	
	
	public Admin authenticateAdmin(AuthRequest request) {
		
		Admin admin= adminRepo
				.findByEmailAndPassword(request.getEmail(), request.getPassword())
				.orElseThrow(()->new ResourceNotFoundException("Invalid Credentials"));
		return admin;
	}
	
	
	public SummaryDTO takeSummary()
	{
		
		Long products=productRepo.count();
		
		Long orders=orderRepo.count();
		
		Long customers = userRepo.count();	
		
		SummaryDTO dto = new SummaryDTO();
		
		dto.setCustomers(customers);
		
		dto.setOrders(orders);
		
		dto.setProducts(products);
		
		return dto;
		
	}

}
