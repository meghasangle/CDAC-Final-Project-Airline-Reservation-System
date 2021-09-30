package com.app.service;

import java.util.List;

import com.app.dto.CustomDTO;
import com.app.dto.GetBookingListDTO;
import com.app.dto.PassengerDTO;

public interface IBookingService {
	void deleteBooking(int id);
	
	//method for getting booking by airline id
	List<PassengerDTO> getPassengerList(int airId);
	
	//method for updating booking
		String updateBooking(int airlineId);
		String postFeedback(int bid, String feedback);
		String bookTicket(CustomDTO custDto);
		List<GetBookingListDTO> findByAirlineId(int aid);
		List<GetBookingListDTO> findByUserId(int uid);
}
