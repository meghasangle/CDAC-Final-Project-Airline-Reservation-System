package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.CitiesRepository;
import com.app.dto.ResponseDTO;

@RestController
@CrossOrigin
public class CitiesController {
	public CitiesController() {
		System.out.println("in cities Controller");
	}
	
	@Autowired
	private CitiesRepository cRepo;
	
	@GetMapping("/cities")
	public ResponseEntity<?> getCities(){
		return new ResponseEntity<>(new ResponseDTO<>("success", cRepo.getCities()), HttpStatus.OK);
	}
}
