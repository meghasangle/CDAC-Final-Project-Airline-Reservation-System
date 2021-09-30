import React, { Component } from "react";
import UserAPIService from "../service/UserAPIService";
export default class TicketHistoryForCustomerScreen extends Component{
constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      message: null,
    };
    this.reloadBookingList = this.reloadBookingList.bind(this);
  }
  componentDidMount() {
    this.reloadBookingList();
  }

  reloadBookingList() {
    UserAPIService.getbookingsByUserId(window.sessionStorage.getItem("userid"))
        .then((res) => {
          console.log(res);
          if (res.data.status == "success")
            this.setState({ bookings: res.data.data });
          else this.props.history.push("/customer/search_flight");
          console.log(this.state.bookings);
    });
  }
  postFeedback(bookingId){
      sessionStorage.setItem('bid', bookingId);
      this.props.history.push('/post_Customer_Feedback');
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
              <th>Status</th>
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
                {booking.status==1 && <td>Active</td>}
                {booking.status==0 && <td>Cancelled</td>}

                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => this.postFeedback(booking.bookingId)}
                  >
                    {" "}
                    Post feedback
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
