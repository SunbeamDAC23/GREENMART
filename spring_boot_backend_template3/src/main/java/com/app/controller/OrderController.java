package com.app.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.dto.NewOrderDTO;
import com.app.dto.OrderResponseDTO;
import com.app.pojos.Order;
import com.app.service.OrderService;

@RestController
@RequestMapping("/order")
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	@GetMapping
	public List<OrderResponseDTO> getAllOrders()
	{
		List<OrderResponseDTO> orders=orderService.getAllOrders();
		orders.forEach((o)->System.out.println(o));
		return orders;
	}
	
	@GetMapping(value = "/{uid}")
	public List<OrderResponseDTO> getAllOrdersByUserId(@PathVariable Long uid)
	{
		List<OrderResponseDTO> orders=orderService.getUserOrders(uid);
		orders.forEach((o)->System.out.println(o));
		return orders;
	}
	
	@PostMapping(value = "/neworder")
	public OrderResponseDTO placeNewOrder(@RequestBody NewOrderDTO dto)
	{
		return orderService.placeNewOrder(dto);
	}
	
	

}
