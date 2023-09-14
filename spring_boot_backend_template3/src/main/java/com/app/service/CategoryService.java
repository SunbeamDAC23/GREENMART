package com.app.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.CategoryDTO;
import com.app.pojos.Category;

public interface CategoryService {
	
	List<CategoryDTO> getAllCategories();
	
	CategoryDTO addNewCategory(CategoryDTO dto);
	
	CategoryDTO updateCategory(Long id, CategoryDTO dto);
	
	String uploadImage(Long id, MultipartFile image) throws IOException;
	
	byte[] downloadImage(Long id) throws IOException;

	
	
	
	
	

}
