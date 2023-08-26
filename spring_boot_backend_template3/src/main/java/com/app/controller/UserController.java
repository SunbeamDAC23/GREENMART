package com.app.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddUserDTO;
import com.app.dto.AuthRequest;
import com.app.dto.UserResponseDTO;
import com.app.pojos.User;
import com.app.service.UserService;
import com.fasterxml.jackson.annotation.JacksonInject.Value;



@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping
	public ResponseEntity<?> getAllUsers(){
		
		List<UserResponseDTO> list = userService.getAllUsers();
		if(list.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();	
		return ResponseEntity.ok(list);
	}
	
	@PostMapping
	public ResponseEntity<?> addNewUser(@RequestBody AddUserDTO dto)
	{
		System.out.println(dto.toString());
		
		
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.addNewUser(dto));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateUser(@PathVariable Long id , @RequestBody AddUserDTO userDto)
	{
		 
		System.out.println(userDto.toString());
		
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.updateUser(id, userDto));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable Long id)
	{
		 
		
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.removeUser(id));
	}
	
	@PostMapping(value = "/authenticate")
	public ResponseEntity<?> authenticateUser(@RequestBody AuthRequest request)
	{
		UserResponseDTO userDto=userService.userAuthentication(request);
		return ResponseEntity.ok(userDto);
		
	}
	
	
	

}
