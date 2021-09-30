import React, { Component } from "react";
import FlightAPIService from "../service/FlightAPIService";

class ShowBookingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      message: null,
    };
    this.cancelBooking = this.cancelBooking.bind(this);
    this.reloadBookingList = this.reloadBookingList.bind(this);
  }

  componentDidMount() {
    this.reloadBookingList();
  }

  reloadBookingList() {
    FlightAPIService.getBookingsByFlightId(window.sessionStorage.getItem("aid"))
        .then((res) => {
          console.log(res);
          if (res.data.status == "success")
            this.setState({ bookings: res.data.data });
          else this.props.history.push("/admin");
          console.log(this.state.bookings);
    });
  }

  cancelBooking(bookingId) {
    FlightAPIService.cancelBookingByBookId(bookingId).then((res) => {
      this.setState({ message: "Booking cancelled successfully." });
      this.setState({
        bookings: this.state.bookings.filter((booking) => booking.bookingId !== bookingId),
      });
      if(this.state.bookings==0)
      this.props.history.push('/admin')
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Bookings</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="hidden">Booking Id</th>
              <th>Airline Id</th>
              <th>User Id</th>
              <th>Booking Date</th>
              <th>Departure Date</th>
              <th>Arrival Date</th>
              <th>Total Fare</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.bookings.map((booking) => (
              <tr key={booking.bookingId}>
                <td>{booking.bookingId}</td>
                <td>{booking.airlineId}</td>
                <td>{booking.userId}</td>
                <td>{booking.bookingDate}</td>
                <td>{booking.journeyDate}</td>
                <td>{booking.arrivalDate}</td>
                <td>{booking.totalFare}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => this.cancelBooking(booking.bookingId)}
                  >
                    {" "}
                    Cancel Booking
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShowBookingScreen;
