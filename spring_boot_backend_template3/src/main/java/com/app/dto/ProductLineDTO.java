package com.app.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

public class ProductLineDTO {
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	private Long pid;
	
	private int qty;

	public Long getPid() {
		return pid;
	}

	public void setPid(Long pid) {
		this.pid = pid;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	@Override
	public String toString() {
		return "ProductLineDTO [id=" + id + ", oid="  + ", pid=" + pid + ", qty=" + qty + "]";
	}
	
	
	
	
	

}
