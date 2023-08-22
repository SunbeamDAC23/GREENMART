package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.OrderItemsDTO;
import com.app.service.OrderService;

@RestController
@RequestMapping("/order")
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	@PostMapping("/newOrder")
	public ResponseEntity<?> placeNewOrder(@RequestBody OrderItemsDTO dto)
	{
		System.out.println(dto.toString());
		return ResponseEntity.status(HttpStatus.CREATED).body(orderService.placeNewOrder(dto));
		
	}

}
