package com.app.dto;

import com.app.pojos.Gender;
import com.app.pojos.PassengerType;

public class PassengerForBookingDTO {
	private Gender gender;
	private int passengerAge;
	private String passengerName;
	private PassengerType passengerType;
	private int seatNumber;
	
	public PassengerForBookingDTO() {
		System.out.println("in ctor of : "+getClass().getName());
	}

	public PassengerForBookingDTO(PassengerType passengerType, String passengerName, int passengerAge, Gender gender, int seatNumber) {
		super();
		this.passengerType = passengerType;
		this.passengerName = passengerName;
		this.passengerAge = passengerAge;
		this.gender = gender;
		this.seatNumber = seatNumber;
	}

	public PassengerType getPassengerType() {
		return passengerType;
	}

	public void setPassengerType(PassengerType passengerType) {
		this.passengerType = passengerType;
	}

	public String getPassengerName() {
		return passengerName;
	}

	public void setPassengerName(String passengerName) {
		this.passengerName = passengerName;
	}

	public int getPassengerAge() {
		return passengerAge;
	}

	public void setPassengerAge(int passengerAge) {
		this.passengerAge = passengerAge;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public int getSeatNumber() {
		return seatNumber;
	}

	public void setSeatNumber(int seatNumber) {
		this.seatNumber = seatNumber;
	}

	@Override
	public String toString() {
		return "PassengerDTO [passengerType=" + passengerType + ", passengerName=" + passengerName + ", passengerAge="
				+ passengerAge + ", gender=" + gender + ", seatNumber=" + seatNumber +" ]";
	}
}
