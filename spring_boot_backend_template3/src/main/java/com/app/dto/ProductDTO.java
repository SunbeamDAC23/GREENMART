package com.app.dto;

import javax.persistence.AccessType;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

public class ProductDTO {
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	private String pname;
	
	private String pdesc;
	
	private double price;
	
	private double avlQty;
	
	private Long category_id;
	
	private String imagePath;
	
	public Long getCategory_id() {
		return category_id;
	}

	public void setCategory_id(Long category_id) {
		this.category_id = category_id;
	}
	

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public String getPdesc() {
		return pdesc;
	}

	public void setPdesc(String pdesc) {
		this.pdesc = pdesc;
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
		return "ProductDTO [id=" + id + ", pname=" + pname + ", pdesc=" + pdesc + ", price=" + price + ", avlQty="
				+ avlQty + "image =" + imagePath+ "]";
	}
	
	
	
	

}
