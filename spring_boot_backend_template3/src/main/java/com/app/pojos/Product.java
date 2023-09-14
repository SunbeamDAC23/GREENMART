package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "product_tb")

public class Product extends BaseEntity{
	
	@Column(length = 50)
	private String pname;
	@Column(length = 150)
	private String pdesc;	
	private double price;
	
	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	@JoinColumn(name = "category_id")
	private Category category;
	
	@Column(name = "avl_qty")
	private double avlQty;
	
	@Column
	private String imagePath;
	
	public Product(String pname, String pdesc, double price, Category category, double avlQty, String imagePath) {
		
		this.pname = pname;
		this.pdesc = pdesc;
		this.price = price;
		this.category = category;
		this.avlQty = avlQty;
		this.imagePath = imagePath;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	public Product() {
		
	}

	@Override
	public String toString() {
		return "Product [pname=" + pname + ", pdesc=" + pdesc + ", price=" + price + ", avlQty=" + avlQty +" Image"+imagePath+"]";
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

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public double getAvlQty() {
		return avlQty;
	}

	public void setAvlQty(double avlQty) {
		this.avlQty = avlQty;
	}
	
	
	
	

}
