package com.app.dto;

import java.util.Arrays;

public class CityDTO {
	private String[] cityNames;

	public CityDTO() {
		System.out.println("in ctor of CityDto");
	}

	public CityDTO(String[] cityNames) {
		super();
		this.cityNames = cityNames;
	}

	public String[] getCityNames() {
		return cityNames;
	}

	public void setCityNames(String[] cityNames) {
		this.cityNames = cityNames;
	}

	@Override
	public String toString() {
		return "CityDTO [cityNames=" + Arrays.toString(cityNames) + "]";
	}

	
}
