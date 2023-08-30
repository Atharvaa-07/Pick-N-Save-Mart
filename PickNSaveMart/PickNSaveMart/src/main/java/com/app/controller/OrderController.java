package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.CartDao;
import com.app.dao.ShopDao;
import com.app.pojos.Status;
import com.app.service.IOrderService;

@CrossOrigin
@RestController
@RequestMapping("/order")
public class OrderController {
	
	@Autowired
	private IOrderService orderService;
	
	@Autowired 
	private CartDao cart;
	
	
	public OrderController() {
	
		System.out.println("in const "+getClass().getName());
		// TODO Auto-generated constructor stub
	}
	
	@GetMapping("/placed")
	public ResponseEntity<?> placeOrder(){
		Integer userId =Integer.parseInt(SecurityContextHolder.getContext().getAuthentication().getName());
		return ResponseEntity.ok(orderService.placeOrder(cart.placedOrder(userId)));
	}
	
	/*
	 * @GetMapping("/details") public ResponseEntity<?> getOderDetails(){ return
	 * ResponseEntity.ok(orderService.getAllOrderDetails()); }
	 */
	
	@GetMapping("/myOrder")
	public ResponseEntity<?> getOrderDetailsById(){
		Integer userId =Integer.parseInt(SecurityContextHolder.getContext().getAuthentication().getName());
		return ResponseEntity.ok(orderService.getAllOrderOfCustomer(userId));
	}
	
	/*
	 * @PutMapping("/ChangeStatus") public ResponseEntity<?>
	 * changeStatus(@RequestBody String status){
	 * 
	 * return null; }
	 */
	
	@DeleteMapping("/cancelOrder/{O_id}")
	public ResponseEntity<?> orderCancelation(@PathVariable int O_id){
		Integer userId =Integer.parseInt(SecurityContextHolder.getContext().getAuthentication().getName());
		return ResponseEntity.ok(orderService.OrderCancelation(O_id, userId));
	}
	
	/*
	 * @GetMapping("/total") public ResponseEntity<?> grandTotal(){ return
	 * ResponseEntity.ok(orderService.grandTotal()); }
	 * 
	 * @GetMapping("/countOrder") public ResponseEntity<?> countOrder(){ return
	 * ResponseEntity.ok(orderService.getCountOrders()); }
	 */
	

}
