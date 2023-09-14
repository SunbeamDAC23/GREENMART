package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.customExceptions.ResourceNotFoundException;
import com.app.dto.CartDTO;
import com.app.dto.InvoiceDTO;
import com.app.dto.NewOrderDTO;
import com.app.dto.OrderResponseDTO;
import com.app.dto.ProductLineDTO;
import com.app.pojos.Order;
import com.app.pojos.Product;
import com.app.pojos.ProductLine;
import com.app.pojos.User;
import com.app.repository.AddressRepository;
import com.app.repository.OrderRepository;
import com.app.repository.ProductLineRepository;
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
	private ProductLineRepository productlineRepo;
	
	
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
	//	newOrder.setAddress(addressRepo.findById(dto.getAddressId()).orElseThrow(()->new ResourceNotFoundException("")));
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
	
	@Override
	public OrderResponseDTO updateList(Long id, ProductLineDTO proline) {
		Order orderentity=orderRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("Invalid order ID"));
		ProductLine item = new ProductLine();
		item.setQty(proline.getQty());
		Long productId=proline.getPid(); 
 		Product p = productRepo.findById(productId).orElseThrow(()->new ResourceNotFoundException("Invalid Product"));
	    item.setProduct(p);
 		orderentity.addProductLine(item);
 		return mapper.map(orderentity, OrderResponseDTO.class);
	}

	@Override
	public InvoiceDTO getCart(Long uid) {
		Order order=orderRepo.findById(uid).orElseThrow(()->new ResourceNotFoundException("Invalid order ID"));
		List<CartDTO> cartList=new ArrayList<>();
		List<ProductLine> proList=new ArrayList<>();
		List<Product> productlist=new ArrayList<>();
		List<CartDTO> cart=new ArrayList<>();
		InvoiceDTO invoice=new InvoiceDTO();
		double total=0;
		proList=order.getProductLineItems();	
		for(ProductLine line :proList)
		{
			CartDTO Cart=new CartDTO();
			Cart.setLineId(line.getId());
			Cart.setQty(line.getQty());
			Product pro=new Product();
			pro=line.getProduct();
			Cart.setTotal(pro.getPrice()*line.getQty());
			Cart.setProductId(pro.getId());
			Cart.setPname(pro.getPname());
			Cart.setPrice(pro.getPrice());
			Cart.setAvlQty(pro.getAvlQty());
			cart.add(Cart);
		}
		for(CartDTO c:cart)
		{
			total=total+c.getTotal();
		}
		invoice.setTotal(total);
		invoice.setCart(cart);
		System.out.println(productlist);
	return invoice;
	}

	@Override
	public ProductLine updateqty(Long id, ProductLineDTO proline) {
		ProductLine item =productlineRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("Invalid line ID"));
		item.setQty(proline.getQty());
		productlineRepo.save(item);
 		return item;
	}

	@Override
	public List<CartDTO> getOrderHistory(Long uid) {
		List<Order> allOrders=orderRepo.findByUserId(uid);
		List<List<ProductLine>> prolistlist=new ArrayList<>();
		List<ProductLine> proList=new ArrayList<>();
		List<Product> product=new ArrayList<>();
		List<CartDTO> Cart=new ArrayList<>();
		for(Order order: allOrders)
		{      
		    for(ProductLine list:order.getProductLineItems())
		    {
		    	CartDTO cart=new CartDTO();
		    	cart.setQty(list.getQty());
		    	cart.setPname(list.getProduct().getPname());
		    	cart.setPrice(list.getProduct().getPrice());
		    	Cart.add(cart);
		    }
		}
		
		return Cart;
	}

	@Override
	public void removeOrder(Long lid) {
		productlineRepo.deleteById(lid);
	}

	

}
