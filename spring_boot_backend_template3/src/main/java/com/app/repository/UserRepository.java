package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Address;
import com.app.pojos.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{

}
