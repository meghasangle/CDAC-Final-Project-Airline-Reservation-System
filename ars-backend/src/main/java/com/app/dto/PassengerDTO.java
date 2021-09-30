package com.app.dto;

public class PassengerDTO {
	private String passengerName;
	private int passengerAge;
	private String passengerType;
	private String gender;
	private int seatNumber;
	public PassengerDTO() {
		System.out.println("in ctor of : "+getClass().getName());
	}
	public PassengerDTO(String passengerName, int passengerAge, String passengerType, String gender,int seatNumber) {
		super();
		this.passengerName = passengerName;
		this.passengerAge = passengerAge;
		this.passengerType = passengerType;
		this.gender = gender;
		this.seatNumber = seatNumber;
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
	public String getPassengerType() {
		return passengerType;
	}
	public void setPassengerType(String passengerType) {
		this.passengerType = passengerType;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
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
		return "PassengerDTO [passengerName=" + passengerName + ", passengerAge=" + passengerAge + ", passengerType="
				+ passengerType + ", gender=" + gender + ", seatNumber=" + seatNumber + "]";
	}
	
}

