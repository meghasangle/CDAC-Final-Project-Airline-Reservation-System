package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Passenger;

public interface PassengerRepository extends JpaRepository<Passenger, Integer> {
@Query("select p from Passenger p where p.bookingId.id=:bid")
List<Passenger>getPassengerByBookingId(@Param("bid") int bookingId);
@Modifying
@Query("delete from Passenger p where p.bookingId.id=:bid")
int deletePassengerByBookingId(@Param("bid")int bookingId);
}
