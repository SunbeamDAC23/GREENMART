package com.app.controller;

import java.util.ArrayList;

import com.app.dto.ProductLineDTO;
import com.app.pojos.User;

import java.util.Iterator;
import java.util.List;
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

import com.app.customExceptions.ResourceNotFoundException;
import com.app.dto.AddUserDTO;
import com.app.dto.CartDTO;
import com.app.dto.InvoiceDTO;
import com.app.dto.NewOrderDTO;
import com.app.dto.OrderResponseDTO;
import com.app.pojos.Order;
import com.app.pojos.Product;
import com.app.pojos.ProductLine;
import com.app.service.OrderService;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = "http://localhost:3000")
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
	
	@GetMapping(value="/cart/{uid}")
	public InvoiceDTO getcart(@PathVariable Long uid)
	{
		InvoiceDTO orders=orderService.getCart(uid);
		//orders.forEach((o)->System.out.println(o));
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
		System.out.println(dto.toString());
		return orderService.placeNewOrder(dto);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateOrder(@PathVariable Long id , @RequestBody ProductLineDTO proline)
	{	
		return ResponseEntity.status(HttpStatus.CREATED).body(orderService.updateList(id, proline));
	}
	
	@PutMapping("/updateqty/{id}")
	public ResponseEntity<?> updateQuantity(@PathVariable Long id , @RequestBody ProductLineDTO proline)
	{	
		return ResponseEntity.status(HttpStatus.CREATED).body(orderService.updateqty(id, proline));
	}

	
	@GetMapping(value="/history/{uid}")
	public List<CartDTO> getorderHistory(@PathVariable Long uid)
	{
		List<CartDTO> orders=orderService.getOrderHistory(uid);
		return orders;
	}
	
	@DeleteMapping(value="/delete/{lid}")
	public void deleteOrder(@PathVariable Long lid)
	{
		orderService.removeOrder(lid);	
	}
	
}
