package com.app.exc_handler;

import java.util.NoSuchElementException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.app.custom_exceptions.FlightNotFoundException;
import com.app.custom_exceptions.UserAlreadyExistException;
import com.app.custom_exceptions.UserNotFoundException;
import com.app.dto.ErrorResponse;
import com.app.dto.ResponseDTO;

@ControllerAdvice
public class GlobalExceptionHandler {
	// exception handling methods
	// if user already exist
	@ExceptionHandler(UserAlreadyExistException.class)
	public ResponseEntity<?> handleUserAlreadyExistException(UserAlreadyExistException e) {
		System.out.println("in handle user already exist exception");
		return new ResponseEntity<>(new ResponseDTO<>("error", e.getMessage()), HttpStatus.UNAUTHORIZED);
	}

	// if user not found while login
	@ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<?> handleUserNotFoundException(UserNotFoundException e) {
		System.out.println("in handle user not found exception");
		return new ResponseEntity<>(new ResponseDTO<>("error", e.getMessage()),
				HttpStatus.INTERNAL_SERVER_ERROR);
	}

	// catch flight not found exception
	@ExceptionHandler(FlightNotFoundException.class)
	public ResponseEntity<?> handleFlightNotFoundException(FlightNotFoundException e) {
		System.out.println("in handle FlightNotFoundException");
		return new ResponseEntity<>(new ErrorResponse("flight not found", e.getMessage()), HttpStatus.NOT_FOUND);
	}
	//illegal argument exception
	@ExceptionHandler(NoSuchElementException.class)
	public ResponseEntity<ErrorResponse> handleNoSuchElementException(NoSuchElementException e) {
		System.out.println("in handle any NoSuchElementException");
		return new ResponseEntity<>(new ErrorResponse("Resource with given ID not Found", e.getMessage()),
				HttpStatus.BAD_REQUEST);
	}
	
	// catch all equivalent exceptions
	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorResponse> handleException(Exception e) {
		System.out.println("in handle any exc");
		return new ResponseEntity<>(new ErrorResponse("server side error", e.getMessage()),
				HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
