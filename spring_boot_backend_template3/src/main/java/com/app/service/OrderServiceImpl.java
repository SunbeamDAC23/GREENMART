package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.customExceptions.ResourceNotFoundException;
import com.app.dto.NewOrderDTO;
import com.app.dto.OrderResponseDTO;
import com.app.dto.ProductLineDTO;
import com.app.pojos.Order;
import com.app.pojos.Product;
import com.app.pojos.ProductLine;
import com.app.pojos.User;
import com.app.repository.AddressRepository;
import com.app.repository.OrderRepository;
import com.app.repository.ProductRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class OrderServiceImpl implements OrderService{

	@Autowired
	private OrderRepository orderRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private ProductRepository productRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private AddressRepository addressRepo;
	
	@Override
	public List<OrderResponseDTO> getAllOrders() {
		
		List<Order> allOrders=orderRepo.findAll();
		allOrders.forEach((o)->System.out.println(o));
		List<OrderResponseDTO> ordersList=new ArrayList<>();
		
		for(Order order : allOrders)
		{
			OrderResponseDTO orderResponse=new OrderResponseDTO();
			orderResponse.setId(order.getId());
			orderResponse.setProductLineItems(order.getProductLineItems());
			orderResponse.setOdate(order.getOdate());
			orderResponse.setOrderTotal(order.getOrderTotal());
			orderResponse.setStatus(order.getStatus());
			orderResponse.setUser_id(order.getUser().getId());
			orderResponse.setAddress(order.getAddress());
			ordersList.add(orderResponse);
			
		} 
		ordersList.forEach(o->System.out.println(o));
		return ordersList;
	}

	@Override
	public List<OrderResponseDTO> getUserOrders(Long uid) {
		List<Order> allOrders=orderRepo.findByUserId(uid);
		allOrders.forEach((o)->System.out.println(o));
		List<OrderResponseDTO> ordersList=new ArrayList<>();
		
		for(Order order : allOrders)
		{
			OrderResponseDTO orderResponse=new OrderResponseDTO();
			orderResponse.setId(order.getId());
			orderResponse.setProductLineItems(order.getProductLineItems());
			orderResponse.setOdate(order.getOdate());
			orderResponse.setOrderTotal(order.getOrderTotal());
			orderResponse.setStatus(order.getStatus());
			orderResponse.setUser_id(order.getUser().getId());
			orderResponse.setAddress(order.getAddress());
			ordersList.add(orderResponse);
		} 
		ordersList.forEach(o->System.out.println(o));
		return ordersList;
		
	}

	@Override
	public OrderResponseDTO placeNewOrder(NewOrderDTO dto) {
		
		Order newOrder=new Order();
		List<ProductLineDTO>itemsDto= dto.getOrderItems();
		for(ProductLineDTO itemDto : itemsDto)
		{
			ProductLine item = new ProductLine();
			Product p = productRepo.findById(itemDto.getPid()).orElseThrow(()->new ResourceNotFoundException("Invalid Product"));
			item.setProduct(p);
			p.setAvlQty(p.getAvlQty()-itemDto.getQty());
			productRepo.save(p);
			item.setQty(itemDto.getQty());
			newOrder.addProductLine(item);	
		}
		newOrder.setOdate(dto.getOdate());
		newOrder.setOrderTotal(dto.getOrderTotal());
		newOrder.setStatus(dto.getStatus());
		newOrder.setAddress(addressRepo.findById(dto.getAddressId()).orElseThrow(()->new ResourceNotFoundException("")));
		User user=userRepo.findById(dto.getUserId())
				.orElseThrow(()->new ResourceNotFoundException("Invalid User ID"));
		user.addOrder(newOrder);
		orderRepo.save(newOrder);
		
		//-----------Response----------------//
		
		OrderResponseDTO orderResponse=new OrderResponseDTO();
		orderResponse.setId(newOrder.getId());
		orderResponse.setProductLineItems(newOrder.getProductLineItems());
		orderResponse.setOdate(newOrder.getOdate());
		orderResponse.setOrderTotal(newOrder.getOrderTotal());
		orderResponse.setStatus(newOrder.getStatus());
		orderResponse.setUser_id(newOrder.getUser().getId());
		orderResponse.setAddress(newOrder.getAddress());
		return orderResponse;
	}
	

}
