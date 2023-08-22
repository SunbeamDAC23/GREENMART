package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Address;
import com.app.pojos.Order;


@Repository
public interface OrderRepository extends JpaRepository<Order,Long>{

}
