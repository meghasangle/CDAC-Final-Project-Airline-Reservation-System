package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.GetBookingListDTO;
import com.app.dto.PassengerDTO;
import com.app.dto.ResponseDTO;
import com.app.dto.UpdateFlightDTO;
import com.app.service.IAirlineService;
import com.app.service.IBookingService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
	public AdminController() {
		System.out.println("in ctor of : " + getClass().getName());
	}
	@Autowired
	private IBookingService bookingService;
	
	@Autowired
	private IAirlineService airService;

	@PutMapping("/update_airline")
	public ResponseEntity<?> updateFlightSchedule(@RequestBody UpdateFlightDTO flightDto) {
		System.out.println("in update flight Schedule method");
		return new ResponseEntity<>(airService.updateAirline(flightDto), HttpStatus.OK);
	}

	@DeleteMapping("/cancel_flight/{air_id}")
	public ResponseEntity<?> cancelFlight(@PathVariable int air_id) {
		System.out.println("in cancel flight Schedule method");
		return new ResponseEntity<>(new ResponseDTO<>("success", airService.cancelFlight(air_id)) , HttpStatus.OK);
	}
	
	@GetMapping("/get_bookings/{aid}")
	public ResponseEntity<?> getBookingsByAid(@PathVariable int aid){
		List<GetBookingListDTO> list = bookingService.findByAirlineId(aid);
		if (!list.isEmpty())
			return new ResponseEntity<>(new ResponseDTO<>("success", list), HttpStatus.OK);
		else
			return new ResponseEntity<>(new ResponseDTO<>("error", "no bookings yet"), HttpStatus.OK);
	}

	@DeleteMapping("/delete_booking")
	public ResponseEntity<?> deleteBooking(@RequestParam int bid) {
		System.out.println("in delete booking(admin controller) " + bid);

		bookingService.deleteBooking(bid);
		return new ResponseEntity<>("Booking Deleted Successfully!!!!", HttpStatus.OK);

	}
	
	@GetMapping("/passenger_list/{airId}")
	public ResponseEntity<?> passengerList(@PathVariable int airId) {
		System.out.println("in passenger List (admin controller) " + airId);
		List<PassengerDTO> list=bookingService.getPassengerList(airId);
		if(!list.isEmpty())
			return new ResponseEntity<>(new ResponseDTO<>("success", list), HttpStatus.OK);
		return new ResponseEntity<>(new ResponseDTO<>("error", "List is empty"), HttpStatus.OK);
	}

	@PutMapping("/update_booking/{airlineId}")
	public ResponseEntity<?> updateBooking(@PathVariable int airlineId){
		System.out.println("in update booking");
		return new ResponseEntity<>(bookingService.updateBooking(airlineId),HttpStatus.OK);
	}
	
	@GetMapping("/get_flights")
	public ResponseEntity<?> getAllFlights(){
		return new ResponseEntity<>(new ResponseDTO<>("success", airService.getAllFlights()), HttpStatus.OK);
	}
}