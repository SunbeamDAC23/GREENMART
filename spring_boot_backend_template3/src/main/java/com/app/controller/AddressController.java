package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddressDTO;
import com.app.pojos.Address;
import com.app.service.AddressService;
import com.app.service.UserService;



@RestController
@RequestMapping("/address")
public class AddressController {
	
	@Autowired
	private AddressService addressService;
	
	
	@GetMapping(value = "/{uid}")
	public ResponseEntity<?> getUserAddress(@PathVariable Long uid)
	{
		List<AddressDTO> userAddress = addressService.getUserAddress(uid);
		if(userAddress.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(userAddress);
	}
	
	
	@PostMapping(value = "/newAddress")
	public ResponseEntity<?> addUserAddress(@RequestBody AddressDTO address)
	{
		System.out.println(address.toString());
		return ResponseEntity.status(HttpStatus.CREATED).body(addressService.addNewAddress(address));
	}
	
	@PutMapping(value = "/update/{id}")
	public ResponseEntity<?> updateAddress(@PathVariable Long id , @RequestBody AddressDTO address)
	{
		return  ResponseEntity.status(HttpStatus.CREATED).body(addressService.updateAddress(id, address));
	}
	
	@DeleteMapping("delete/{uid}/{id}")
	public String deleteAddress(@PathVariable Long id , @PathVariable Long uid)
	{
		return addressService.deleteAddress(uid, id);
	}
	
	
	
	

}
