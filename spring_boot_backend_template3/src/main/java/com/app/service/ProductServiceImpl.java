package com.app.service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
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
import com.app.dto.AddressDTO;
import com.app.dto.ProductDTO;
import com.app.pojos.Address;
import com.app.pojos.Category;
import com.app.pojos.Product;
import com.app.pojos.User;
import com.app.repository.CategoryRepository;
import com.app.repository.ProductRepository;

@Service
@Transactional
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	private ProductRepository productRepo;
	
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
	public List<ProductDTO> getAllProducts() {
		List<Product> products=productRepo.findAll();
		List<ProductDTO> productsToReturn = new ArrayList<>();
		for(Product product : products)
		{
			ProductDTO pro = new ProductDTO();
			mapper.map(product, pro);
			productsToReturn.add(pro);	
		}
		return productsToReturn;
	}

	@Override
	public ProductDTO addNewProduct(ProductDTO dto) {
		Category c = catRepo.findById(dto.getCategory_id())
				.orElseThrow(()->new ResourceNotFoundException("Invalid Category ID"));
		Product newProduct=mapper.map(dto, Product.class);
		c.addProduct(newProduct);
		productRepo.save(newProduct);
		return mapper.map(newProduct, ProductDTO.class);
	}	
		/* 
		 * User user = userRepo.findById(address.getUid())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid User id"));
		Address updateAddress = addressRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Address ID"));
		// remove old address
		user.removeAddress(updateAddress);
		mapper.map(address, updateAddress);
		updateAddress.setId(id);
		// add new Address
		user.addAddress(updateAddress);
		return mapper.map(updateAddress, AddressDTO.class);*/
	
	@Override
	public ProductDTO updateProduct(Long pid, ProductDTO dto) {
		Category c = catRepo.findById(dto.getCategory_id())
				.orElseThrow(()->new ResourceNotFoundException("Invalid Category ID"));
		Product toUpdate = productRepo.findById(pid)
				.orElseThrow(()->new ResourceNotFoundException("Invalid Product"));
		c.removeProduct(toUpdate);
		mapper.map(dto, toUpdate);
		toUpdate.setId(pid);
		c.addProduct(toUpdate);
		return mapper.map(toUpdate, ProductDTO.class);
	}

	@Override
	public String uploadImage(Long id, MultipartFile image) throws IOException {
		
		Product product = productRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid product ID!!!!"));
		String path = folderLocation.concat(image.getOriginalFilename());
		System.out.println(path);
		FileUtils.writeByteArrayToFile(new File(path), image.getBytes());
		product.setImagePath(path);
		return "Image Uploaded";
	}

	@Override
	public byte[] downloadImage(Long id) throws IOException {
		Product pro= productRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid product ID!!!!"));
		String path = pro.getImagePath();
		if (path != null) {
			return FileUtils.readFileToByteArray(new File(path));
		} else
			throw new ApiException("Image not yet assigned !!!!");
	
	}

	@Override
	public List<ProductDTO> getProductsByCategoryId(Long id) {
		List<Product> products=productRepo.findByCategoryId(id);
		List<ProductDTO> productsToReturn = new ArrayList<>();
		for(Product product : products)
		{
			ProductDTO pro = new ProductDTO();
			mapper.map(product, pro);
			productsToReturn.add(pro);	
		}
		return productsToReturn;
	}

	@Override
	public ProductDTO getSingleProduct(Long pid) {
		Product product = productRepo.findById(pid).orElseThrow(()->new ResourceNotFoundException("Resource Not Found"));
		return mapper.map(product, ProductDTO.class);
	}

}
