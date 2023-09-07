package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.dto.ProductDTO;
import com.app.pojos.Address;
import com.app.pojos.Product;


@Repository
public interface ProductRepository extends JpaRepository<Product,Long>{
   List<Product> findBycategory_id(Long cid);
}
