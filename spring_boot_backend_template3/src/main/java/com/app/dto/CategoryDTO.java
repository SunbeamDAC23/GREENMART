package com.app.dto;

import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

public class CategoryDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	@NotBlank
	private String cname;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	@Override
	public String toString() {
		return "CategoryDTO [id=" + id + ", cname=" + cname + "]";
	}
	
	

}
