package com.app.service;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AirlineRepository;
import com.app.dao.BookingRepository;
import com.app.dao.PassengerRepository;
import com.app.dto.AirlineDTO;
import com.app.dto.UpdateFlightDTO;
import com.app.pojos.Airline;
import com.app.pojos.Booking;

@Service
@Transactional
public class AirlineServiceImpl implements IAirlineService {
	@Autowired
	private AirlineRepository airRepo;
	@Autowired
	private BookingRepository bookRepo;
	@Autowired 
	private PassengerRepository passRepo;
	@Override
	public Airline addAirline(AirlineDTO airlinedto) {
		System.out.println("in add airline method");
		Airline airline = new Airline();
		BeanUtils.copyProperties(airlinedto, airline);
		System.out.println("airline dtls : " + airline);
		return airRepo.save(airline);
	}

	@Override
	public String updateAirline(UpdateFlightDTO flightDto) {
		System.out.println("in update airline method");
		Airline a1 = airRepo.findById(flightDto.getId()).get();
		a1.setDepartureTime(flightDto.getDepartureTime());
		a1.setArrivalTime(flightDto.getArrivalTime());
		a1.setDepartureDate(flightDto.getDepartureDate());
		a1.setArrivalDate(flightDto.getArrivalDate());
		airRepo.save(a1);
		return "Airline updated Successfully!!!!";

	}
	
	@Override
	public String cancelFlight(int airId) {
		System.out.println("in update airline method");
		Airline a1 = airRepo.findById(airId).get();
		List<Booking> list=bookRepo.getBookingByAirlineId(airId);
		list.forEach((b)->{
			passRepo.deletePassengerByBookingId(b.getId());
			b.setStatus(0);
		});
		airRepo.delete(a1);
		return "Flight canceled Successfully!!!!";

	}

	@Override
	public List<Airline> searchFlights(String fromCity, String toCity, LocalDate departureDate) {
		return airRepo.findByFromCityAndToCityAndDepartureDate(fromCity, toCity, departureDate);
	}

	@Override
	public Airline selectAirlineFromListById(int aid) {
		return airRepo.findById(aid).get();
	}

	@Override
	public List<Airline> getAllFlights() {
		
		return airRepo.findAll();
	}
	
	@Override
	public List<String> getAirlineNames() {
		return airRepo.findDistinctAirlineName();
	}
}
