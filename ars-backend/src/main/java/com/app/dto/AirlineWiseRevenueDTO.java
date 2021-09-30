package com.app.dto;

public class AirlineWiseRevenueDTO {
	private String airlineName;
	private double revenue;
	public AirlineWiseRevenueDTO() {
		// TODO Auto-generated constructor stub
	}
	public AirlineWiseRevenueDTO(String airlineName, double revenue) {
		super();
		this.airlineName = airlineName;
		this.revenue = revenue;
	}
	public String getAirlineName() {
		return airlineName;
	}
	public void setAirlineName(String airlineName) {
		this.airlineName = airlineName;
	}
	public double getRevenue() {
		return revenue;
	}
	public void setRevenue(double revenue) {
		this.revenue = revenue;
	}
	@Override
	public String toString() {
		return "AirlineWiseRevenue [airlineName=" + airlineName + ", revenue=" + revenue + "]";
	}
	
}
