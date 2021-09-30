package com.app.dto;

import java.time.LocalDateTime;

public class ErrorResponse {
	private String message;
	private LocalDateTime timeStamp;
	private String errDetails;
	public ErrorResponse() {
		// TODO Auto-generated constructor stub
	}
	public ErrorResponse(String message,String errDetails) {
		super();
		this.message = message;
		this.errDetails=errDetails;
		this.timeStamp=LocalDateTime.now();
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public LocalDateTime getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(LocalDateTime timeStamp) {
		this.timeStamp = timeStamp;
	}
	public String getErrDetails() {
		return errDetails;
	}
	public void setErrDetails(String errDetails) {
		this.errDetails = errDetails;
	}
	@Override
	public String toString() {
		return  message + " timeStamp=" + timeStamp ;
	}
	
	
	

}
