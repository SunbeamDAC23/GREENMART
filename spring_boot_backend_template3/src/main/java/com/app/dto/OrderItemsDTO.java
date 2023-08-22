package com.app.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

public class OrderItemsDTO {
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	private Long uid;
	
	private List<ProductLineDTO> items;
	
	private LocalDate odate;
	
	private double orderTotal;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUid() {
		return uid;
	}

	public void setUid(Long uid) {
		this.uid = uid;
	}

	public List<ProductLineDTO> getItems() {
		return items;
	}

	public void setItems(List<ProductLineDTO> items) {
		this.items = items;
	}

	public LocalDate getOdate() {
		return odate;
	}

	public void setOdate(LocalDate odate) {
		this.odate = odate;
	}

	public double getOrderTotal() {
		return orderTotal;
	}

	public void setOrderTotal(double orderTotal) {
		this.orderTotal = orderTotal;
	}

	@Override
	public String toString() {
		return "OrderItemsDTO [id=" + id + ", uid=" + uid + ", items=" + items + ", odate=" + odate + ", orderTotal="
				+ orderTotal + "]";
	}
	
	
	
	
	
	
	
	
	
	
	

}
