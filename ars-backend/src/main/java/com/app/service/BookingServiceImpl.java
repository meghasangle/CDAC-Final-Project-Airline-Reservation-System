package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AirlineRepository;
import com.app.dao.BookingRepository;
import com.app.dao.PassengerRepository;
import com.app.dao.UserRepository;
import com.app.dto.CustomDTO;
import com.app.dto.GetBookingListDTO;
import com.app.dto.PassengerDTO;
import com.app.dto.PassengerForBookingDTO;
import com.app.pojos.Airline;
import com.app.pojos.Booking;
import com.app.pojos.CardDetails;
import com.app.pojos.Passenger;
import com.app.pojos.User;

@Service
@Transactional
public class BookingServiceImpl implements IBookingService {
	@Autowired
	private BookingRepository bookingRepo;
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private AirlineRepository airRepo;
	@Autowired
	private PassengerRepository passengerRepo;

	@Override
	public void deleteBooking(int id) {
		System.out.println("in deleteBooking bookingService " + id);
		List<Passenger> l = passengerRepo.getPassengerByBookingId(id);
		int size = l.size();
		System.out.println("size " + size);
		Airline airline = airRepo.findById(bookingRepo.getAirlineIdByBookingId(id)).get();
		System.out.println("before updating available seats: " + airline);
		airline.setAvailableSeats(airline.getAvailableSeats() + size);
		System.out.println("after updating available seats:" + airline);
		Booking booking = bookingRepo.findById(id).get();
		booking.setStatus(0);
		System.out.println("after cancelling booking " + booking);
		passengerRepo.deletePassengerByBookingId(id);
		return;
	}

	@Override
	public List<PassengerDTO> getPassengerList(int airId) {
		System.out.println("in getPassengerList adminService " + airId);
		List<Booking> bookList = bookingRepo.getBookingByAirlineId(airId);
		List<PassengerDTO> passList = new ArrayList<>();
		bookList.forEach((b) -> b.getPassengerList().forEach((p) -> passList.add(new PassengerDTO(p.getPassengerName(),
				p.getPassengerAge(), p.getGender().toString(), p.getPassengerType().toString(), p.getSeatNumber()))));
		return passList;
	}

	@Override
	public String updateBooking(int airlineId) {
		System.out.println("in updateBooking updateService");

		Airline air = airRepo.findById(airlineId).get();
		List<Booking> bList = bookingRepo.findByAirlineId(airlineId);
		if (bList.isEmpty()) {
			return "There are no booking to modify";
		} else {
			bList.forEach((booking) -> {
				if (booking.getStatus() == 1) {
					booking.setJourneyDate(air.getDepartureDate());
					booking.setArrivalDate(air.getArrivalDate());
					booking.setArrivalTime(air.getArrivalTime());
					booking.setDepartureTime(air.getDepartureTime());
				}
			});
			return "Bookings updated Successfully";
		}
	}

	@Override
	public String postFeedback(int bid, String feedback) {
		bookingRepo.postFeedback(bid, feedback);

		return "Feedback posted successfully!!!!";
	}

	@Override
	public String bookTicket(CustomDTO custDto) {
		User user = userRepo.findById(custDto.getUserId()).get();

		Airline airline = airRepo.findById(custDto.getBookingDto().getAirlineId()).get();
		if (airline.getAvailableSeats() >= custDto.getPassengerDto().length) {
			user.setCardDetails(new CardDetails(custDto.getCardDto().getCardNumber(),
					custDto.getCardDto().getNameOnCard(), custDto.getCardDto().getExpiryDate()));

			Booking bookings = new Booking(LocalDate.now(), custDto.getBookingDto().getTotalFare(),
					airline.getDepartureDate(), airline.getArrivalDate(), custDto.getBookingDto().getSeatType(),
					custDto.getBookingDto().getStatus(), "-", airline.getDepartureTime(), airline.getArrivalTime(),
					custDto.getBookingDto().getAirlineId());

			PassengerForBookingDTO[] passDto = custDto.getPassengerDto();

			List<Passenger> passList = bookings.getPassengerList();

			for (int i = 0; i < passDto.length; i++) {
				Passenger passenger = new Passenger(passDto[i].getPassengerType(), passDto[i].getPassengerName(),
						passDto[i].getPassengerAge(), passDto[i].getGender(), passDto[i].getSeatNumber());
				passenger.setBookingId(bookings);
				passList.add(passenger);
				airline.setAvailableSeats(airline.getAvailableSeats() - 1);
			}

			user.getBookingList().add(bookings);
			bookings.setUserId(user);
			return "Ticket Booking SuccessFul";
		} else {
			return "Ticket Booking UnSuccessFul!!! Seats not available";
		}
	}

	@Override
	public List<GetBookingListDTO> findByAirlineId(int aid) {
		List<GetBookingListDTO> bookList = new ArrayList<>();
		List<Booking> bList = bookingRepo.getBookingByAirlineId(aid);
		bList.forEach((b) -> {
			if (b.getStatus() == 1)
				bookList.add(new GetBookingListDTO(b.getId(), b.getBookingDate(), b.getTotalFare(), b.getJourneyDate(),
						b.getArrivalDate(), b.getStatus(), b.getAirlineId(), b.getUserId().getId()));
		});
		return bookList;

	}
	@Override
	public List<GetBookingListDTO> findByUserId(int uid) {
		List<GetBookingListDTO> bookList = new ArrayList<>();
		List<Booking> bList = bookingRepo.getBookingByUserId(uid);
		bList.forEach((b) -> {
			
				bookList.add(new GetBookingListDTO(b.getId(), b.getBookingDate(), b.getTotalFare(), b.getJourneyDate(), b.getArrivalDate(), b.getStatus(), b.getAirlineId(), b.getUserId().getId()));
		});
		return bookList;
		
	}
}
