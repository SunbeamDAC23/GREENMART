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
import com.app.dto.ProductDTO;
import com.app.service.ProductService;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping
	public ResponseEntity<?> getAllProducts()
	{
		List<ProductDTO> allProducts = productService.getAllProducts();
		return ResponseEntity.ok(allProducts);
	}
	
	

	@GetMapping(value = "/{cid}")
	public ResponseEntity<?> getCategoryProducts(@PathVariable Long cid)
	{
		List<ProductDTO> Products = productService.getProductsByCategoryId(cid);
		return ResponseEntity.ok(Products);
	}

	
	
	@PostMapping("/newProduct")
	public ResponseEntity<?> addNewProduct(@RequestBody ProductDTO product)
	{
		return ResponseEntity.status(HttpStatus.CREATED).body(productService.addNewProduct(product));
	}
	
	@PutMapping("/update/{pid}")
	public ResponseEntity<?> updateProduct(@PathVariable Long pid, @RequestBody ProductDTO dto)
	{
		System.out.println("In Put product" + dto.toString() + "is the dto.." + pid);
		return ResponseEntity.status(HttpStatus.CREATED).body(productService.updateProduct(pid,dto));
	}
	
	@PostMapping(value = "/images/{pId}", consumes = "multipart/form-data")
	public ResponseEntity<?> uploadImage(@PathVariable Long pId, @RequestParam MultipartFile imageFile)
			throws IOException {
		System.out.println("in upload img " + pId);
		return ResponseEntity.status(HttpStatus.CREATED).body(productService.uploadImage(pId, imageFile));
	}
	
	@GetMapping(value="/images/{pId}")
	public ResponseEntity<?> serveEmpImage(@PathVariable Long pId) throws IOException {
		System.out.println("in download img " + pId);
		return ResponseEntity.ok(productService.downloadImage(pId));
	}
	
	@GetMapping(value = "/single/{pid}")
	public ResponseEntity<?> getSingleProduct(@PathVariable Long pid)
	{
		ProductDTO Products = productService.getSingleProduct(pid);
		return ResponseEntity.ok(Products);
	}
	
	
	
	
	
	

}
