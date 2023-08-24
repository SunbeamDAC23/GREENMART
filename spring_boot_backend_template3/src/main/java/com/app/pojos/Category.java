package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "category_tb")
public class Category extends BaseEntity {
	
	@Column(length = 20)
	private String cname;
	
	@JsonIgnore
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "category", 
			cascade = CascadeType.ALL, 
			orphanRemoval = true)
	private List<Product> products = new ArrayList<>();
	
	@Column
	private String imagePath;
	

	public Category(String cname, List<Product> products, String imagePath) {
		this.cname = cname;
		this.products = products;
		this.imagePath = imagePath;
	}



	public String getImagePath() {
		return imagePath;
	}



	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}



	public Category() {
		
	}



	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}
	@Override
	public String toString() {
		return "Category [cname=" + cname + ", products=" + products + "Image"+imagePath+"]";
	}
	public void addProduct(Product p) {
		products.add(p);
		p.setCategory(this);
	}
	public void removeProduct(Product p) {
		products.remove(p);
		p.setCategory(null);	
	}
	
	

}
