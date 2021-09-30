package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class CardDetails {
	@Column(unique = true)
	private String cardNumber;
	private String nameOnCard;
	private LocalDate expiryDate;
	
	public CardDetails() {
		System.out.println("in ctor of : "+getClass().getName());
	}

	public CardDetails(String cardNumber, String nameOnCard, LocalDate expiryDate) {
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
