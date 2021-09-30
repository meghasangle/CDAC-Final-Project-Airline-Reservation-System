package com.app.dto;

import java.time.LocalDate;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class AirlineDTO {
	private String airlineName;
	private String airlineNo;
	private LocalDate departureDate;
	private LocalDate arrivalDate;
	private String fromCity;
	private String toCity;
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", timezone = "Asia/Kolkata")
	private Date departureTime;
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", timezone = "Asia/Kolkata")
	private Date arrivalTime;
	private int capacity;
	private int availableSeats;
	private double economyFare;
	private double businessFare;

	public AirlineDTO() {
		System.out.println("in ctor of : "+getClass().getName());
	}

	public AirlineDTO(String airlineName, String airlineNo, LocalDate departureDate, LocalDate arrivalDate,
			String fromCity, String toCity, Date departureTime, Date arrivalTime, int capacity, int availableSeats,
			double economyFare, double businessFare) {
		super();
		this.airlineName = airlineName;
		this.airlineNo = airlineNo;
		this.departureDate = departureDate;
		this.arrivalDate = arrivalDate;
		this.fromCity = fromCity;
		this.toCity = toCity;
		this.departureTime = departureTime;
		this.arrivalTime = arrivalTime;
		this.capacity = capacity;
		this.availableSeats = availableSeats;
		this.economyFare = economyFare;
		this.businessFare = businessFare;
	}

	public String getAirlineName() {
		return airlineName;
	}

	public void setAirlineName(String airlineName) {
		this.airlineName = airlineName;
	}

	public String getAirlineNo() {
		return airlineNo;
	}

	public void setAirlineNo(String airlineNo) {
		this.airlineNo = airlineNo;
	}

	public LocalDate getDepartureDate() {
		return departureDate;
	}

	public void setDepartureDate(LocalDate departureDate) {
		this.departureDate = departureDate;
	}

	public LocalDate getArrivalDate() {
		return arrivalDate;
	}

	public void setArrivalDate(LocalDate arrivalDate) {
		this.arrivalDate = arrivalDate;
	}

	public String getFromCity() {
		return fromCity;
	}

	public void setFromCity(String fromCity) {
		this.fromCity = fromCity;
	}

	public String getToCity() {
		return toCity;
	}

	public void setToCity(String toCity) {
		this.toCity = toCity;
	}

	public Date getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(Date departureTime) {
		this.departureTime = departureTime;
	}

	public Date getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(Date arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public int getAvailableSeats() {
		return availableSeats;
	}

	public void setAvailableSeats(int availableSeats) {
		this.availableSeats = availableSeats;
	}

	public double getEconomyFare() {
		return economyFare;
	}

	public void setEconomyFare(double economyFare) {
		this.economyFare = economyFare;
	}

	public double getBusinessFare() {
		return businessFare;
	}

	public void setBusinessFare(double businessFare) {
		this.businessFare = businessFare;
	}

	@Override
	public String toString() {
		return "AirlineDTO [airlineName=" + airlineName + ", airlineNo=" + airlineNo + ", departureDate="
				+ departureDate + ", arrivalDate=" + arrivalDate + ", fromCity=" + fromCity + ", toCity=" + toCity
				+ ", departureTime=" + departureTime + ", arrivalTime=" + arrivalTime + ", capacity=" + capacity
				+ ", availableSeats=" + availableSeats + ", economyFare=" + economyFare + ", businessFare="
				+ businessFare + "]";
	}
	
	
}
