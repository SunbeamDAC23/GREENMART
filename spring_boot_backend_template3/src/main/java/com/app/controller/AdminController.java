package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AuthRequest;
import com.app.service.AdminService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/admin")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@PostMapping(value = "/authenticate")
	public ResponseEntity<?> validateAdmin(@RequestBody AuthRequest request)
	{
		return new ResponseEntity<>(adminService.authenticateAdmin(request), HttpStatus.OK);
	}
	
	
	@GetMapping("/dashboard")
	public ResponseEntity<?> summaryforAdmin()
	{
		return ResponseEntity.ok(adminService.takeSummary());
	}

}
