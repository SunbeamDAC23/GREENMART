package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.customExceptions.ResourceNotFoundException;
import com.app.dto.CategoryDTO;
import com.app.pojos.Category;
import com.app.repository.CategoryRepository;

@Service
@Transactional
public class CategoryServiceImpl implements CategoryService {
	
	@Autowired
	private CategoryRepository catRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<CategoryDTO> getAllCategories() {
		
		List<Category> categories = catRepo.findAll();
		
		categories.forEach((c)->System.out.println(c));
		
		return categories.stream()
				.map(c->mapper.map(c, CategoryDTO.class))
				.collect(Collectors.toList());
		
	}

	@Override
	public CategoryDTO addNewCategory(CategoryDTO dto) {
		
		Category c =mapper.map(dto, Category.class);
		
		Category persistentCat=catRepo.save(c);
		
		return mapper.map(persistentCat, CategoryDTO.class);
	}

	@Override
	public CategoryDTO updateCategory(Long id , CategoryDTO dto) {
		
		System.out.println(dto.getCname());
		Category updateCategory = catRepo.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Invalid"));
		mapper.map(dto, updateCategory);
		updateCategory.setId(id);
		
		return mapper.map(updateCategory, CategoryDTO.class);
	}

	@Override
	public String deleteCategory(Long id) {
		
		catRepo.deleteById(id);
		
		return "Category Deleted..!!";
	}

}
