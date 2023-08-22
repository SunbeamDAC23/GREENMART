package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.Address;


@Repository
public interface AddressRepository extends JpaRepository<Address,Long>{
	
	List<Address> findByUserId(Long uid);
	

}
