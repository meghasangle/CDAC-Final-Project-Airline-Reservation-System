import React, { Component } from "react";
import SuperAdminAPIService from "../service/SuperAdminAPIService";
import Header from "../components/Header";

class ListFeedBackScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      message: null,
    };
    this.reloadFeedbackList = this.reloadFeedbackList.bind(this);
  }
  componentDidMount() {
    this.reloadFeedbackList();
    console.log("in component did mount");
  }
  
  reloadFeedbackList() {
      console.log("in reloade feedback list");
    SuperAdminAPIService.fetchFeedbackByFlightId(
      window.sessionStorage.getItem("airId")
    ).then((res) => {
        console.log(res);
      if (res.data.status == "success"){
        this.setState({ bookings: res.data.data });
        window.sessionStorage.removeItem("airId")
      } 
      else {
        window.sessionStorage.removeItem("airId")
        this.props.history.push("/superadmin");
      }
       
      console.log(this.state.bookings);
    });
  }

  render() {
    return (
      <div>
        <Header title="Feedback List" />
        <table class="table caption-top">
          <thead>
            <tr>
              <th scope="col">Airline ID</th>
              <th scope="col">Booking ID</th>
              <th scope="col">User ID</th>
              <th scope="col">Customer Feedback</th>
            </tr>
          </thead>
          <tbody>
            {this.state.bookings.map((booking) => (
              <tr>
                <td scope="row">{booking.airlineId}</td>
                <td>{booking.bookingId}</td>
                <td>{booking.userId}</td>
                <td>{booking.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListFeedBackScreen;
