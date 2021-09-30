package com.app.dto;

public class FeedbackDTO {
	private int airlineId;
	private int bookingId;
	private int userId;
	private String feedback;
	public FeedbackDTO() {
		// TODO Auto-generated constructor stub
	}
	public FeedbackDTO(int airlineId, int bookingId, int userId, String feedback) {
		super();
		this.airlineId = airlineId;
		this.bookingId = bookingId;
		this.userId = userId;
		this.feedback = feedback;
	}
	
	public int getAirlineId() {
		return airlineId;
	}
	public void setAirlineId(int airlineId) {
		this.airlineId = airlineId;
	}
	public int getBookingId() {
		return bookingId;
	}
	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getFeedback() {
		return feedback;
	}
	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	@Override
	public String toString() {
		return "FeedbackDTO [airlineId=" + airlineId + ", bookingId=" + bookingId + ", userId=" + userId + ", feedback="
				+ feedback + "]";
	}
	
}
