import React, { Component } from "react";
import FlightAPIService from "../service/FlightAPIService";
import Modal from "react-modal";


class ShowUserBookingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      message: null,
      Open: false,


    };
    this.cancelBooking = this.cancelBooking.bind(this);
    this.reloadBookingList = this.reloadBookingList.bind(this);
    this.onClickButton=this.onClickButton.bind(this);
    this.onCancelModal=this.onCancelModal.bind(this);
  }

  componentDidMount() {
    this.reloadBookingList();
  }

  reloadBookingList() {
    FlightAPIService.getBookingsByUserId(window.sessionStorage.getItem("userid"))
        .then((res) => {
          console.log(res);
          if (res.data.status == "success")
            this.setState({ bookings: res.data.data });
          else this.props.history.push("/customer/search_flight");
          console.log(this.state.bookings);
    });
  }

  cancelBooking(bookingId) {
    FlightAPIService.cancelBookingByUserId(bookingId).then((res) => {
      this.setState({Open: false});
      this.setState({ message: "Booking cancelled successfully." });
      this.setState({
        bookings: this.state.bookings.filter((booking) => booking.bookingId !== bookingId),
       
      });
     
      if(this.state.bookings==0)
      this.props.history.push('/customer/search_flight')
    });
  }
  onClickButton=()=>{
    this.setState({Open: true})
  }
  onCancelModal=()=>{
    this.setState({Open: false})
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Bookings</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Booking Id</th>
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
                    onClick={() => this.onClickButton()}
                  >
                    {" "}
                    Cancel Booking
                  </button>
                  <Modal isOpen = {this.state.Open} 
                 
                  style={
                    {
                      overlay: {
                       
                        backgroundColor: 'grey'
                      },
                      content: {
                        paddingTop: "200px",
                        textAlign: "center"
                      }
                    }
                  }>
                    <h1>Refund Details</h1> 
                    <br/>
                    <h4>Refund Amount Of : {booking.totalFare/2} will be Initiated Shortly</h4>
                    <br/>                    
                    <h4>Are You Sure You Want To Cancel Your booking</h4>
                    <br/>
                    <button className="btn btn-success mx-3" onClick={this.onCancelModal}> No </button>

                    <button className="btn btn-danger" onClick={()=>this.cancelBooking(booking.bookingId)}> Yes </button>
                  </Modal>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShowUserBookingScreen;
