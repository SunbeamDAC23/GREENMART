package com.app.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.CategoryDTO;
import com.app.service.CategoryService;

@RestController
@RequestMapping("/categories")
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {
	
	@Autowired
	private CategoryService catService;
	
	@GetMapping
	public ResponseEntity<?> getAllCategories()
	{
		System.out.println("In Controller");
		List<CategoryDTO>categories=catService.getAllCategories();
		
		return ResponseEntity.ok(categories);
	}
	
	@PostMapping(value = "/newCategory")
	public ResponseEntity<?> addNewCategory(@RequestBody CategoryDTO dto)
	{
		CategoryDTO c = catService.addNewCategory(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(c);
	}
	
	@PutMapping(value = "update/{cid}")
	public ResponseEntity<?> updateCategory(@PathVariable(name = "cid") Long id , @RequestBody CategoryDTO dto)
	{
		CategoryDTO c = catService.updateCategory(id,dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(c);
	}
	
	@PostMapping(value = "/images/{cId}", consumes = "multipart/form-data")
	public ResponseEntity<?> uploadImage(@PathVariable Long cId, @RequestParam MultipartFile imageFile)
			throws IOException {
		System.out.println("in upload img " + cId);
		return ResponseEntity.status(HttpStatus.CREATED).body(catService.uploadImage(cId, imageFile));
	}
	
	@GetMapping(value="/images/{cId}")
	public ResponseEntity<?> serveEmpImage(@PathVariable Long cId) throws IOException {
		System.out.println("in download img " + cId);
		return ResponseEntity.ok(catService.downloadImage(cId));
	}
	

}
