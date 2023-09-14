package com.app.dto;

public class SummaryDTO {
	
	private Long customers;
	
	private Long orders;
	
	private Long products;

	public Long getCustomers() {
		return customers;
	}

	public void setCustomers(Long customers) {
		this.customers = customers;
	}

	public Long getOrders() {
		return orders;
	}

	public void setOrders(Long orders) {
		this.orders = orders;
	}

	public Long getProducts() {
		return products;
	}

	public void setProducts(Long products) {
		this.products = products;
	}

	@Override
	public String toString() {
		return "SummaryDTO [customers=" + customers + ", orders=" + orders + ", products=" + products + "]";
	}
	
	

}
