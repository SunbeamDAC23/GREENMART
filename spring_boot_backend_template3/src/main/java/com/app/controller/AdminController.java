package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AuthRequest;
import com.app.service.AdminService;

@RestController
@RequestMapping(value = "/admin")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@PostMapping
	public ResponseEntity<?> validateAdmin(@RequestBody AuthRequest request)
	{
		return new ResponseEntity<>(adminService.authenticateAdmin(request), HttpStatus.OK);
	}

}
