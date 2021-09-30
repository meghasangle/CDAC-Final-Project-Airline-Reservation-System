import { Component } from "react";
import FlightAPIService from "../service/FlightAPIService";

export default class UpdateFlightForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      departureTime: "",
      arrivalTime: "",
      departureDate: "",
      arrivalDate: "",
    };
  }
  componentDidMount() {
    this.loadFlight();
  }

  loadFlight() {
    FlightAPIService.fetchFlightById(window.sessionStorage.getItem("aid")).then(
      (res) => {
        let flight = res.data.data;
        this.setState({
          id: flight.id,
          departureTime: flight.departureTime,
          arrivalTime: flight.arrivalTime,
          departureDate: flight.departureDate,
          arrivalDate: flight.arrivalDate,
        });
      }
    );
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  saveFlight = (e) => {
    e.preventDefault();
    let flight = {
      id: this.state.id,
    departureTime: this.state.departureDate + ` ${this.state.departureTime}`,
      arrivalTime: this.state.arrivalDate + ` ${this.state.arrivalTime}`,
      departureDate: this.state.departureDate,
      arrivalDate: this.state.arrivalDate,
    };
    FlightAPIService.editFlight(flight).then((res) => {
      this.setState({ message: "flight rescheduled successfully." });
      this.props.history.push("/update_bookings");
    });
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Update Flight</h2>
        <div  className="icon d-flex align-items-center justify-content-center">
        <form>
          <div className="mb-3">
            <label>Flight ID:</label>
            <input
              type="text"
              placeholder="id"
              name="id"
              className="form-control"
              readonly="true"
              defaultValue={this.state.id}
            />
          </div>

          <div className="mb-3">
            <label>Departure Time:</label>
            <input
              placeholder="departureTime"
              name="departureTime"
              className="form-control"
              value={this.state.departureTime}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label>Arrival Time:</label>
            <input
              placeholder="arrivalTime"
              name="arrivalTime"
              className="form-control"
              value={this.state.arrivalTime}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label>Departure Date:</label>
            <input
              type="date"
              placeholder="departureDate"
              name="departureDate"
              className="form-control"
              value={this.state.departureDate}
              onChange={this.onChange}
            />
          </div>

          <div className="mb-3">
            <label>Arrival Date:</label>
            <input
              type="date"
              placeholder="arrivalDate"
              name="arrivalDate"
              className="form-control"
              value={this.state.arrivalDate}
              onChange={this.onChange}
            />
          </div>

          <button className="btn btn-success" onClick={this.saveFlight}>
            Save
          </button>
        </form>
        </div>
      </div>
    );
  }
}
