package com.app.dto;

import java.time.LocalDate;

public class CartDTO {
	private String pname;
	private double price;
	private double avlQty;
	private double qty;
	private long productId;
	private long lineId;
	private double total;
	private LocalDate odate;
	
	
	public CartDTO(String pname, double price, double avlQty, double qty, long productId, long lineId, double total,
			LocalDate odate) {
		super();
		this.pname = pname;
		this.price = price;
		this.avlQty = avlQty;
		this.qty = qty;
		this.productId = productId;
		this.lineId = lineId;
		this.total = total;
		this.odate = odate;
	}


	public CartDTO() {
		
	}
	
	
	public LocalDate getOdate() {
		return odate;
	}
	public void setOdate(LocalDate odate) {
		this.odate = odate;
	}
	public double getTotal() {
		return total;
	}
	public void setTotal(double total) {
		this.total = total;
	}
	public long getLineId() {
		return lineId;
	}
	public void setLineId(long lineId) {
		this.lineId = lineId;
	}
	public long getProductId() {
		return productId;
	}
	public void setProductId(long productId) {
		this.productId = productId;
	}
	public double getQty() {
		return qty;
	}
	public void setQty(double qty) {
		this.qty = qty;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public double getAvlQty() {
		return avlQty;
	}
	public void setAvlQty(double avlQty) {
		this.avlQty = avlQty;
	}


	@Override
	public String toString() {
		return "CartDTO [pname=" + pname + ", price=" + price + ", avlQty=" + avlQty + ", qty=" + qty + ", productId="
				+ productId + ", lineId=" + lineId + ", total=" + total + ", odate=" + odate + "]";
	}
	
	
}
