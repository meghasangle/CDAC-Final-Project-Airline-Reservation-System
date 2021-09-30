package com.app.service;

import java.util.List;

import com.app.dto.AirlineWiseRevenueDTO;
import com.app.dto.CityDTO;
import com.app.dto.FeedbackDTO;
import com.app.dto.UserDTO;
import com.app.pojos.User;

public interface ISuperAdminService {
	//method to add admin 
	User addAdmin(UserDTO admin);
	
	//method to generate revenue report
	List<?> revenueReport(String airlineName, String interval);
	
	//method to check feedback from customer
	List<FeedbackDTO> getFeedback(int airId);
		
	//method to get total number of bookings
	int getTotalBooking();
	
	//method to get total number of cancelled bookings
	int getCancelledBooking();
	
	//method to get total Amount of revenue
	double getTotalRevenue();
	
	//method to get Airline wise Revenue
	List<AirlineWiseRevenueDTO> getAirlineRevenue();
	
	//method to add City in City Table
	void addCity(CityDTO cityDto);

}
