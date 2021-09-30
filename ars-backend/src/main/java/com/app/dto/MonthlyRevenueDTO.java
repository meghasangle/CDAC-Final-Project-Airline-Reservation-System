package com.app.dto;

public class MonthlyRevenueDTO {
	private int month;
	private double revenue;
	public MonthlyRevenueDTO() {
		// TODO Auto-generated constructor stub
	}
	public MonthlyRevenueDTO(int month, double revenue) {
		super();
		this.month = month;
		this.revenue = revenue;
	}
	public int getMonth() {
		return month;
	}
	public void setMonth(int month) {
		this.month = month;
	}
	public double getRevenue() {
		return revenue;
	}
	public void setRevenue(double revenue) {
		this.revenue = revenue;
	}
	@Override
	public String toString() {
		return "MonthlyRevenueDTO [month=" + month + ", revenue=" + revenue + "]";
	}
	
}
