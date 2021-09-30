package com.app.dto;

import java.time.LocalDate;

public class CardDTO {
	private String cardNumber;
	private String nameOnCard;
	private LocalDate expiryDate;
	
	public CardDTO() {
		System.out.println("in ctor of : "+getClass().getName());
	}

	public CardDTO(String cardNumber, String nameOnCard, LocalDate expiryDate) {
		super();
		this.cardNumber = cardNumber;
		this.nameOnCard = nameOnCard;
		this.expiryDate = expiryDate;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public String getNameOnCard() {
		return nameOnCard;
	}

	public void setNameOnCard(String nameOnCard) {
		this.nameOnCard = nameOnCard;
	}

	public LocalDate getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(LocalDate expiryDate) {
		this.expiryDate = expiryDate;
	}

	@Override
	public String toString() {
		return "CardDetails [cardNumber=" + cardNumber + ", nameOnCard=" + nameOnCard + ", expiryDate=" + expiryDate
				+ "]";
	}
}
