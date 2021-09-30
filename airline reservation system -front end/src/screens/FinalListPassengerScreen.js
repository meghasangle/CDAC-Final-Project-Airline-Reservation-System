import React, { Component } from "react";
import AdminAPIService from "../service/AdminAPIService";
import Header from "../components/Header";

class FinalListPassengerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passengers: [],
      message: null,
    };
    this.reloadPassengerList = this.reloadPassengerList.bind(this);
  }
  componentDidMount() {
    this.reloadPassengerList();
  }
  reloadPassengerList() {
    AdminAPIService.fetchPassengersByFlightId(
      window.sessionStorage.getItem("airId")
    ).then((res) => {
      if (res.data.status == "success")
        this.setState({ passengers: res.data.data });
      else this.props.history.push("/admin");
      console.log(this.state.passengers);
      // this.check()
    });
  }
  //  check=()=>{
  //   if(this.status ==1)
  //    this.history.props('/admin')
  // }

  render() {
    return (
      <div>
        <Header title="Passenger List" />
        <table
          class="table caption-top table-striped table-responsive table-hover result-point"
        >
          <thead>
            <tr>
              <th scope="col">Passenger Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Seat Number</th>
            </tr>
          </thead>
          <tbody>
            {/* {this.state.passengers==0 && <a href='/admin'>Go to previous page</a>} */}
            {this.state.passengers.map((passenger) => (
              <tr>
                <td scope="row">{passenger.passengerName}</td>
                <td>{passenger.passengerAge}</td>
                <td>{passenger.gender}</td>
                <td>{passenger.seatNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FinalListPassengerScreen;
