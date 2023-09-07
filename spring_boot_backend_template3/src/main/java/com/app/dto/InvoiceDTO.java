package com.app.dto;

import java.util.List;

public class InvoiceDTO {
	
	private double total;
	
	private List<CartDTO> cart;

	
	public InvoiceDTO() {
		
	}

	public InvoiceDTO(Long total, List<CartDTO> cart) {
	
		this.total = total;
		this.cart = cart;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public List<CartDTO> getCart() {
		return cart;
	}

	public void setCart(List<CartDTO> cart) {
		this.cart = cart;
	}

	@Override
	public String toString() {
		return "InvoiceDTO [total=" + total + ", cart=" + cart + "]";
	}
	
	
}
