package com.app.service;

import java.util.List;

import com.app.dto.CategoryDTO;
import com.app.pojos.Category;

public interface CategoryService {
	
	List<CategoryDTO> getAllCategories();
	
	CategoryDTO addNewCategory(CategoryDTO dto);
	
	CategoryDTO updateCategory(Long id, CategoryDTO dto);
	
	String deleteCategory(Long id);
	
	
	
	
	

}
