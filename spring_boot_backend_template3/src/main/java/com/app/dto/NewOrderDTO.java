package com.app.dto;

import java.time.LocalDate;
import java.util.List;

public class NewOrderDTO {
	
	private Long userId;
	
	private Long addressId;

	private LocalDate odate;
	
	private String status;
	
	private List<ProductLineDTO> orderItems;
	
	private double orderTotal;
	
	public Long getAddressId() {
		return addressId;
	}

	public void setAddressId(Long addressId) {
		this.addressId = addressId;
	}
	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public LocalDate getOdate() {
		return odate;
	}

	public void setOdate(LocalDate odate) {
		this.odate = odate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<ProductLineDTO> getOrderItems() {
		return orderItems;
	}

	public void setOrderItems(List<ProductLineDTO> orderItems) {
		this.orderItems = orderItems;
	}

	public double getOrderTotal() {
		return orderTotal;
	}

	public void setOrderTotal(double orderTotal) {
		this.orderTotal = orderTotal;
	}

	@Override
	public String toString() {
		return "NewOrderDTO [userId=" + userId + ", addressId=" + addressId + ", odate=" + odate + ", status=" + status
				+ ", orderItems=" + orderItems + ", orderTotal=" + orderTotal + "]";
	}

	
	
	
	

	
}
