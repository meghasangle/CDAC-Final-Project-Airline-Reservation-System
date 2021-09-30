package com.app.dto;

import com.app.pojos.SeatType;

public class BookingDTO {
	private double totalFare;
	private SeatType seatType;
	private int status;
	private int airlineId;
	
	public BookingDTO() {
		System.out.println("in ctor of : "+getClass().getName());
	}

	public BookingDTO(double totalFare, SeatType seatType, int status, int airlineId) {
		super();
		this.totalFare = totalFare;
		this.seatType = seatType;
		this.status = status;
		this.airlineId = airlineId;
	}

	public double getTotalFare() {
		return totalFare;
	}

	public void setTotalFare(double totalFare) {
		this.totalFare = totalFare;
	}

	public SeatType getSeatType() {
		return seatType;
	}

	public void setSeatType(SeatType seatType) {
		this.seatType = seatType;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public int getAirlineId() {
		return airlineId;
	}

	public void setAirlineId(int airlineId) {
		this.airlineId = airlineId;
	}

	@Override
	public String toString() {
		return "BookingDTO [totalFare=" + totalFare + ", seatType=" + seatType + ", status=" + status + ", airlineId="
				+ airlineId + "]";
	}

	
}
