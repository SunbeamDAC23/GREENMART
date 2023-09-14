package com.app.dto;

import java.time.LocalDate;
import java.util.List;

import com.app.pojos.Address;
import com.app.pojos.ProductLine;

public class OrderResponseDTO {
	
	private Long id;
	
	private List<ProductLine> productLineItems;
	
	private double orderTotal;
	
	private String status;
	
	private LocalDate odate;
	
	private Long user_id;
	
	private Address address;

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}

	public List<ProductLine> getProductLineItems() {
		return productLineItems;
	}

	public void setProductLineItems(List<ProductLine> productLineItems) {
		this.productLineItems = productLineItems;
	}

	public double getOrderTotal() {
		return orderTotal;
	}

	public void setOrderTotal(double orderTotal) {
		this.orderTotal = orderTotal;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public LocalDate getOdate() {
		return odate;
	}

	public void setOdate(LocalDate odate) {
		this.odate = odate;
	}

	@Override
	public String toString() {
		return "OrderResponseDTO [id=" + id + ", productLineItems=" + productLineItems + ", orderTotal=" + orderTotal
				+ ", status=" + status + ", odate=" + odate + ", user_id=" + user_id + ", address=" + address + "]";
	}

	
	
	
	
	

}
