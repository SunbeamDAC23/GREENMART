package com.app.service;

import java.util.List;

import com.app.dto.ProductDTO;
import com.app.pojos.Product;

public interface ProductService {
	
	List<ProductDTO> getAllProducts();
	
	ProductDTO addNewProduct(ProductDTO dto);
	
	String deleteProduct(Long cid,Long pid);
	
	ProductDTO updateProduct(Long pid, ProductDTO dto);

}
