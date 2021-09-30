package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.dto.AirlineWiseRevenueDTO;
import com.app.dto.FeedbackDTO;
import com.app.dto.MonthlyRevenueDTO;
import com.app.dto.QuarterlyRevenueDTO;
import com.app.dto.YearlyRevenueDTO;
import com.app.pojos.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer> {
	@Query("select new com.app.dto.MonthlyRevenueDTO(month(b.bookingDate),sum(b.totalFare)) from Booking b inner join Airline a on a.id=b.airlineId where year(b.bookingDate)=year(current_date()) and b.status=1 and a.airlineName=:nm group by month(b.bookingDate) order by month(b.bookingDate)")
	List<MonthlyRevenueDTO> getMonthlyRevenue(@Param("nm") String airlineName);
	
	@Query("select b from Booking b where b.airlineId=:id")
	List<Booking> getBookingByAirlineId(@Param("id") int airId);

	@Modifying
	@Query("Update Booking b set b.feedback=:fd where b.id=:bid")
	void postFeedback(@Param("bid") int bookingId, @Param("fd") String feedback);
	
	List<Booking> findByAirlineId(int airID);
	@Query("select b.airlineId from Booking b where b.id=:bid")
	int getAirlineIdByBookingId(@Param("bid")int bookingId);
	
	@Query("select new com.app.dto.FeedbackDTO(b.airlineId,b.id,b.userId.id,b.feedback) from Booking b where b.airlineId=:id")
	List<FeedbackDTO> getFeedbackByAirlineId(@Param("id") Integer airId);
	
	@Query("select new com.app.dto.QuarterlyRevenueDTO(quarter(b.bookingDate), sum(b.totalFare)) from Booking b inner join Airline a on a.id=b.airlineId where year(b.bookingDate)=year(current_date) and b.status=1 and a.airlineName=:nm group by Quarter(b.bookingDate) order by Quarter(b.bookingDate)")
	List<QuarterlyRevenueDTO> getQuarterlyRevenue(@Param("nm") String airlineName);
	
	@Query("select new com.app.dto.YearlyRevenueDTO(year(b.bookingDate), sum(b.totalFare)) from Booking b inner join Airline a on a.id=b.airlineId where status=1 and a.airlineName=:nm group by year(b.bookingDate) order by year(b.bookingDate)")
	List<YearlyRevenueDTO> getYearlyRevenue(@Param("nm") String airlineName);
    
	@Query("select b from Booking b where b.userId.id=:id")
	List<Booking> getBookingByUserId(@Param("id") int userId);
	
	@Query("select count(b.id) from Booking b ")
	int getTotalBooking();
	
	@Query("select count(b.id) from Booking b where status=0")
	int getCancelledBooking();
	
	@Query("select sum(b.totalFare) from Booking b where status=1")
	double getTotalRevenue();
	
	@Query("select new com.app.dto.AirlineWiseRevenueDTO(a.airlineName,sum(b.totalFare)) from Booking b inner join Airline a on a.id=b.airlineId where b.status=1 group by a.airlineName")
	List<AirlineWiseRevenueDTO> getAirlineRevenue();
}