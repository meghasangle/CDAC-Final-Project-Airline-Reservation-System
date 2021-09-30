package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Cities;

public interface CitiesRepository extends JpaRepository<Cities, Integer> {
	@Query("select c from Cities c")
	List<Cities> getCities();
}
