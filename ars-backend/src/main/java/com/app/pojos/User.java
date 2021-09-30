package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "users")
public class User extends BaseEntity {
	@Column(length = 30)
	private String firstName;
	@Column(length = 30)
	private String lastName;
	@Column(length = 30, nullable = false, unique = true)
	private String email;
	@Column(length = 30, nullable = false)
	private String password;
	@Column(length = 15)
	private String mobileNo;
	@Enumerated(EnumType.STRING)
	private Role userRole;
	//0-->notVerified, 1-->verified, 2-->Suspended
	private int status;
	@JsonIgnore
	@OneToMany(mappedBy = "userId", orphanRemoval = true, cascade = CascadeType.ALL)
	private List<Booking> bookingList = new ArrayList<>();
	@Embedded
	private CardDetails cardDetails;
	public User() {
		System.out.println("in ctor of : "+getClass().getName());
	}

	public User(String firstName, String lastName, String email, String password, String mobileNo, Role userRole,
			int status) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.mobileNo = mobileNo;
		this.userRole = userRole;
		this.status = status;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public Role getUserRole() {
		return userRole;
	}

	public void setUserRole(Role userRole) {
		this.userRole = userRole;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public List<Booking> getBookingList() {
		return bookingList;
	}

	public void setBookingList(List<Booking> bookingList) {
		this.bookingList = bookingList;
	}

	public CardDetails getCardDetails() {
		return cardDetails;
	}

	public void setCardDetails(CardDetails cardDetails) {
		this.cardDetails = cardDetails;
	}

	@Override
	public String toString() {
		return "UserId="+getId()+" firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", password=" + password
				+ ", mobileNo=" + mobileNo + ", userRole=" + userRole + ", status=" + status + "";
	}
	
}
