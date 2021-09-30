package com.app.dto;

import java.util.Arrays;

public class CustomDTO {
	private int userId;
	private CardDTO cardDto;
	private BookingDTO bookingDto;
	private PassengerForBookingDTO[] passengerDto ;
	
	public CustomDTO() {
		System.out.println("in ctor of : "+getClass().getName());
		this.passengerDto = new PassengerForBookingDTO[10];
	}

	public CustomDTO(int userId, CardDTO cardDto, BookingDTO bookingDto, PassengerForBookingDTO[] passengerDtos) {
		super();
		this.userId = userId;
		this.cardDto = cardDto;
		this.bookingDto = bookingDto;
		this.passengerDto = passengerDtos;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public CardDTO getCardDto() {
		return cardDto;
	}

	public void setCardDto(CardDTO cardDto) {
		this.cardDto = cardDto;
	}

	public BookingDTO getBookingDto() {
		return bookingDto;
	}

	public void setBookingDto(BookingDTO bookingDto) {
		this.bookingDto = bookingDto;
	}

	public PassengerForBookingDTO[] getPassengerDto() {
		return passengerDto;
	}

	public void setPassengerDto(PassengerForBookingDTO[] passengerDto) {
		this.passengerDto = passengerDto;
	}

	@Override
	public String toString() {
		return "CustomDTO [userId=" + userId + ", cardDto=" + cardDto + ", bookingDto="
				+ bookingDto + ", passengerDto=" + Arrays.toString(passengerDto) + "]";
	}
	
}
