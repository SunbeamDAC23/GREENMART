package com.app.service;

import java.util.List;

import com.app.dto.NewOrderDTO;
import com.app.dto.OrderResponseDTO;
import com.app.pojos.Order;

public interface OrderService {
	List<OrderResponseDTO> getAllOrders();
	List<OrderResponseDTO>getUserOrders(Long uid);
	OrderResponseDTO placeNewOrder(NewOrderDTO dto);

}
