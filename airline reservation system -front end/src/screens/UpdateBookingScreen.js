import React, { Component } from "react";
import FlightAPIService from "../service/FlightAPIService";

class UpdateBookingScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          airline: [],
          message: null,
        };
        this.updateBooking = this.updateBooking.bind(this);
    this.reloadAirlineList = this.reloadAirlineList.bind(this);
      }
      componentDidMount() {
        this.reloadAirlineList();
      }
      reloadAirlineList() {
          console.log(window.sessionStorage.getItem("aid"));
        FlightAPIService.fetchFlightById(window.sessionStorage.getItem("aid"))
            .then((res) => {
              console.log(res);
              if (res.data.status == "success")
                this.setState({ airline: res.data.data });
              else this.props.history.push("/admin");
              console.log(this.state.airline);
        });
      }
      updateBooking(aid) {
        console.log(aid);
        FlightAPIService.updateBooking(aid).then((res) => {
          this.setState({ message: "Bookings updated successfully." });
        //   this.setState({
        //     bookings: this.state.bookings.filter((booking) => booking.bookingId !== bookingId),
        //   });
        // console.log(aid);
          this.props.history.push('/admin')
        });
      }
      render() {
        return (
          <div>
            <h2 className="text-center">Update Bookings</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="hidden">Airline Id</th>
                  <th>Airline Name</th>
                  <th>Airline Number</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Departure Date</th>
                  <th>Arrival Date</th>
                  <th>Departure Time</th>
                  <th>Arrival Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
          
                  <tr>
                    <td>{this.state.airline.id}</td>
                    <td>{this.state.airline.airlineName}</td>
                    <td>{this.state.airline.airlineNo}</td>
                    <td>{this.state.airline.fromCity}</td>
                    <td>{this.state.airline.toCity}</td>
                    <td>{this.state.airline.departureDate}</td>
                    <td>{this.state.airline.arrivalDate}</td>
                    <td>{this.state.airline.departureTime}</td>
                    <td>{this.state.airline.arrivalTime}</td> 
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => this.updateBooking(this.state.airline.id)}
                      >
                        {" "}
                        Update All Bookings
                      </button>
                    </td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        );
      }
}
export default UpdateBookingScreen;