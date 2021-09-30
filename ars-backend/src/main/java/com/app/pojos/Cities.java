package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "cities")
public class Cities extends BaseEntity {
	private String City;
	
	public Cities() {
		System.out.println("in ctor of : "+getClass().getName());
	}

	public Cities(String city) {
		super();
		City = city;
	}

	public String getCity() {
		return City;
	}

	public void setCity(String city) {
		City = city;
	}

	@Override
	public String toString() {
		return "CitiesId="+getId()+" City=" + City + "";
	}
	
	
}
