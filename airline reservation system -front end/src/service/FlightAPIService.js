import axios from "axios";
import { BASE_API } from "../constants/ApiConstant";

const FLIGHT_API_BASE_URL = "http://localhost:8080";

class ApiService {
  fetchFlightById(aid) {
    return axios.get(BASE_API+"/customer/select_flight", {
      params: { aid: aid },
    });
  }

  editFlight(flight) {
    return axios.put(BASE_API+"/admin/update_airline", flight);
  }

  getBookingsByFlightId(aid) {
    return axios.get(BASE_API+"/admin/get_bookings/" + aid);
  }

  getBookingsByUserId(uid){
    return axios.get(BASE_API+'/customer/get_userbookings/' + uid)
}

  cancelBookingByBookId(bid) {
    return axios.delete(BASE_API+"/admin/delete_booking", {
      params: { bid: bid },
    });
  }

  addAirline(flight) {
    return axios.post(BASE_API+"/superadmin/add_airline", flight);
  }
  updateBooking(airlineId) {
    console.log(airlineId);
    return axios.put(
      BASE_API+"/admin/update_booking/" + airlineId
    );
  }

  cancelBookingByUserId(bId){
    return axios.delete(BASE_API+'/customer/cancel_ticket' ,{ params: { bId : bId } })
}

  getFlight(from, to, departure) {
    //console.log("in get flight"+fromCity + "  " + toCity + "  " + departureDate);
    return axios.get(
      BASE_API+"/customer/search_flight/" + departure,
      {
        params: {
          fromCity: from,
          toCity: to,
        },
      }
    );
  }
  getAirlineNames(){
    return axios.get(BASE_API+'/superadmin/airline_names')
  }
  addCities(cities){
    console.log("add cities axios");
    return axios.put(BASE_API+'/superadmin/add_city', cities)
  }
}

export default new ApiService();
