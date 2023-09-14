package com.app.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ProductDTO;
import com.app.pojos.Product;

public interface ProductService {
	
	List<ProductDTO> getAllProducts();
	
	ProductDTO addNewProduct(ProductDTO dto);
	
	String uploadImage(Long id, MultipartFile image) throws IOException;
	byte[] downloadImage(Long id) throws IOException;
	
	ProductDTO updateProduct(Long pid, ProductDTO dto);
	List<ProductDTO> getProductsByCategoryId(Long id);
	
	ProductDTO getSingleProduct(Long pid);

}
