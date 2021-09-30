package com.app.dto;

public class YearlyRevenueDTO {
	private int year;
	private double revenue;
	public YearlyRevenueDTO() {
		// TODO Auto-generated constructor stub
	}
	public YearlyRevenueDTO(int year, double revenue) {
		this.year = year;
		this.revenue = revenue;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public double getRevenue() {
		return revenue;
	}
	public void setRevenue(double revenue) {
		this.revenue = revenue;
	}
	@Override
	public String toString() {
		return "YearlyRevenueDTO [year=" + year + ", revenue=" + revenue + "]";
	}
	
}
