package com.app.exc_handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.app.customExceptions.ApiException;
import com.app.customExceptions.ResourceNotFoundException;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<?> handleResourceNotFoundException
	(ResourceNotFoundException e){
		System.out.println("in res not found exc");
		return ResponseEntity.status
				(HttpStatus.NOT_FOUND).
				body("Resource Not Found");
	}
	
	@ExceptionHandler(ApiException.class)
	public ResponseEntity<?> handleApiException(ApiException e)
	{
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Something Went Wrong");
	}
}
