package com.app.service;

import java.time.LocalDate;
import java.util.List;

import com.app.dto.AirlineDTO;
import com.app.dto.UpdateFlightDTO;
import com.app.pojos.Airline;

public interface IAirlineService {
	//method to add airline
	Airline addAirline(AirlineDTO airlinedto);

	// method to update flight schedule
	String updateAirline(UpdateFlightDTO flightDto);

	// method to cancel flight
	String cancelFlight(int airId);
	
	//method to search Flight
	List<Airline> searchFlights(String fromCity, String toCity, LocalDate departureDate);
	
	//method to select airline from airline list --> Booking process
	Airline selectAirlineFromListById(int aid);
	
	//get all airlines
	List<Airline> getAllFlights();
	
	//method to get distinct AirlineNames
	List<String> getAirlineNames();
}
