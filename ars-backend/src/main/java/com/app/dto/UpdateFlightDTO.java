package com.app.dto;

import java.time.LocalDate;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class UpdateFlightDTO {
	private int id;
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", timezone = "Asia/Kolkata")
	private Date departureTime;
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", timezone = "Asia/Kolkata")
	private Date arrivalTime;
	private LocalDate departureDate;
	private LocalDate arrivalDate;
	
	public UpdateFlightDTO() {
		System.out.println("in ctor of : "+getClass().getName());
	}

	public UpdateFlightDTO(int id, Date departureTime, Date arrivalTime) {
		super();
		this.id = id;
		this.departureTime = departureTime;
		this.arrivalTime = arrivalTime;
	}

	public UpdateFlightDTO(int id, Date departureTime, Date arrivalTime, LocalDate departureDate,
			LocalDate arrivalDate) {
		super();
		this.id = id;
		this.departureTime = departureTime;
		this.arrivalTime = arrivalTime;
		this.departureDate = departureDate;
		this.arrivalDate = arrivalDate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	@Override
	public String toString() {
		return "UpdateFlightDTO [id=" + id + ", departureTime=" + departureTime + ", arrivalTime=" + arrivalTime
				+ ", departureDate=" + departureDate + ", arrivalDate=" + arrivalDate + "]";
	}

	
}
