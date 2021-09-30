package com.app.dto;

public class QuarterlyRevenueDTO {
	private int quarter;
	private double revenue;
	public QuarterlyRevenueDTO() {
		// TODO Auto-generated constructor stub
	}
	public QuarterlyRevenueDTO(int quarter, double revenue) {
		this.quarter = quarter;
		this.revenue = revenue;
	}
	public int getQuarter() {
		return quarter;
	}
	public void setQuarter(int quarter) {
		this.quarter = quarter;
	}
	public double getRevenue() {
		return revenue;
	}
	public void setRevenue(double revenue) {
		this.revenue = revenue;
	}
	@Override
	public String toString() {
		return "QuarterlyRevenueDTO [quarter=" + quarter + ", revenue=" + revenue + "]";
	}
	
}
