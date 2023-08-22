package com.app.service;

import java.util.List;

import com.app.dto.AddressDTO;
import com.app.pojos.Address;

public interface AddressService {
	
	
	List<AddressDTO> getUserAddress(Long uid);
	
	AddressDTO addNewAddress(AddressDTO address);
	
	AddressDTO updateAddress(Long id , AddressDTO address);
	
	String deleteAddress(Long uid,Long id);
	
	
	

}
