package com.app.service;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.apache.commons.io.FileUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.app.customExceptions.ApiException;
import com.app.customExceptions.ResourceNotFoundException;
import com.app.dto.CategoryDTO;
import com.app.pojos.Category;
import com.app.pojos.Product;
import com.app.repository.CategoryRepository;

@Service
@Transactional
public class CategoryServiceImpl implements CategoryService {
	
	@Autowired
	private CategoryRepository catRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Value("${folder.location}")
	private String folderLocation;
	
	@PostConstruct
	public void init() {
		File folder = new File(folderLocation);
		if(folder.exists()) {
			System.out.println("folder already exists");
		}else
		{
			folder.mkdir();
			System.out.println("Created a folder");
		}
		
	}
	
	@Override
	public List<CategoryDTO> getAllCategories() {
		
		List<Category> categories = catRepo.findAll();
		return categories.stream().map(c->mapper.map(c, CategoryDTO.class)).collect(Collectors.toList());
		
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
	public String uploadImage(Long id, MultipartFile image) throws IOException {
		
		Category category=catRepo.findById(id).orElseThrow(()->new ResourceNotFoundException(""));
		String path = folderLocation.concat(image.getOriginalFilename());
		System.out.println(path);
		FileUtils.writeByteArrayToFile(new File(path), image.getBytes());
		category.setImagePath(path);
		return "Image Uploaded";
	}

	@Override
	public byte[] downloadImage(Long id) throws IOException {
		Category c = catRepo.findById(id).orElseThrow(()->new ResourceNotFoundException(""));
		String path = c.getImagePath();
		if (path != null) {
			return FileUtils.readFileToByteArray(new File(path));
		} else
			throw new ApiException("Image not yet assigned !!!!");	
	}

	

}
