package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "passengers")
public class Passenger extends BaseEntity {
	@Enumerated(EnumType.STRING)
	private PassengerType passengerType;
	@Column(length = 30)
	private String passengerName;
	private int passengerAge;
	private int seatNumber;
	@Enumerated(EnumType.STRING)
	private Gender gender;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "booking_id")
	private Booking bookingId;
	
	public Passenger() {
		System.out.println("in ctor of : "+getClass().getName());
	}

	public Passenger(PassengerType passengerType, String passengerName, int passengerAge, Gender gender, int seatNumber) {
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

	public Booking getBookingId() {
		return bookingId;
	}

	public void setBookingId(Booking bookingId) {
		this.bookingId = bookingId;
	}
	public int getSeatNumber() {
		return seatNumber;
	}

	public void setSeatNumber(int seatNumber) {
		this.seatNumber = seatNumber;
	}
	@Override
	public String toString() {
		return "PassengerId"+getId()+" passengerType=" + passengerType + ", passengerName=" + passengerName + ", passengerAge="
				+ passengerAge + ", gender=" + gender + ", seatNumber=" + seatNumber +"";
	}
	
	
}
