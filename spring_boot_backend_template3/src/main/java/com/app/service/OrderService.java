package com.app.service;

import java.util.List;

import com.app.dto.CartDTO;
import com.app.dto.InvoiceDTO;
import com.app.dto.NewOrderDTO;
import com.app.dto.OrderResponseDTO;
import com.app.dto.ProductLineDTO;
import com.app.pojos.Order;
import com.app.pojos.ProductLine;

public interface OrderService {
	List<OrderResponseDTO> getAllOrders();
	List<OrderResponseDTO>getUserOrders(Long uid);
	OrderResponseDTO placeNewOrder(NewOrderDTO dto);
	/**/
	OrderResponseDTO updateList(Long id,ProductLineDTO proline); 
	InvoiceDTO getCart(Long uid);
	ProductLine updateqty(Long id,ProductLineDTO proline);
	List<CartDTO> getOrderHistory(Long uid);
	void removeOrder(Long lid);
}
