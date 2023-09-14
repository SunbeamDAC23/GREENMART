package com.app.dto;

import com.fasterxml.jackson.annotation.JsonAlias;

public class ProductLineDTO {
	
	@JsonAlias("proId")
	private Long pid;
	
	private double qty;

	public Long getPid() {
		return pid;
	}

	public void setPid(Long pid) {
		this.pid = pid;
	}

	public double getQty() {
		return qty;
	}

	public void setQty(double qty) {
		this.qty = qty;
	}

	@Override
	public String toString() {
		return "ProductLineDTO [pid=" + pid + ", qty=" + qty + "]";
	}
	
	
	

}
