import { Component } from "react";
import FlightAPIService from "../service/FlightAPIService";

export default class UpdateFlightForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airlineName: "",
      airlineNo: "",
      departureDate: "",
      arrivalDate: "",
      fromCity: "",
      toCity: "",
      departureTime: "",
      arrivalTime: "",
      capacity: 0,
      availableSeats: 0,
      economyFare: 0.0,
      businessFare: 0.0,
      nameError: "",
      numberError: "",
      departureDateError: "",
      arrivalDateError: "",
      fromCityError: "",
      toCityError: "",
      departureTimeError: "",
      arrivalTimeError: "",
      capacityError: "",
      availableSeatsError: "",
      economyFareError: "",
      businessFareError: "",
    };
    this.addFlight = this.addFlight.bind(this);
  }
  componentDidMount() {}

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  addFlight = (e) => {
    e.preventDefault();
    if (!this.state.airlineName)
      this.setState({ nameError: "Airline Name required!!!!!" });
    else this.setState({ nameError: "" });
    if (!this.state.airlineNo)
      this.setState({ numberError: "Airline Number required!!!!!" });
    else this.setState({ numberError: "" });
    if (!this.state.departureDate)
      this.setState({ departureDateError: "Departure Date required!!!!!" });
    else this.setState({ departureDateError: "" });
    if (!this.state.arrivalDate)
      this.setState({ arrivalDateError: "Arrival Date required!!!!!" });
    else this.setState({ arrivalDateError: "" });
    if (!this.state.fromCity)
      this.setState({ fromCityError: "From city required!!!!!" });
    else this.setState({ fromCityError: "" });
    if (!this.state.toCity)
      this.setState({ toCityError: "To city required!!!!!" });
    else this.setState({ toCityError: "" });
    if (!this.state.departureTime)
      this.setState({ departureTimeError: "Departure time required!!!!!" });
    else this.setState({ departureTimeError: "" });
    if (!this.state.arrivalTime)
      this.setState({ arrivalTimeError: "Arrival time required!!!!!" });
    else this.setState({ arrivalTimeError: "" });
    if (!this.state.capacity)
      this.setState({ capacityError: "Capacity required!!!!!" });
    else this.setState({ capacityError: "" });
    if (!this.state.economyFare)
      this.setState({ economyFareError: "Economy class fare required!!!!!" });
    else this.setState({ economyFareError: "" });
    if (!this.state.businessFare)
      this.setState({ businessFareError: "Business class fare required!!!!!" });
    else this.setState({ businessFareError: "" });
    if (
      this.state.airlineName &&
      this.state.airlineNo &&
      this.state.arrivalDate &&
      this.state.departureDate &&
      this.state.fromCity &&
      this.state.toCity &&
      this.state.departureTime &&
      this.state.arrivalTime &&
      this.state.capacity &&
      this.state.economyFare &&
      this.state.businessFare
    ) {
      let cities={
        cityNames:[this.state.fromCity,this.state.toCity]
      };
      FlightAPIService.addCities(cities).then((res) => {
        console.log("in add Cities");
      });
      let flight = {
        airlineName: this.state.airlineName,
        airlineNo: this.state.airlineNo,
        departureDate: this.state.departureDate,
        arrivalDate: this.state.arrivalDate,
        fromCity: this.state.fromCity,
        toCity: this.state.toCity,
        departureTime:
          this.state.departureDate + ` ${this.state.departureTime}`,
        arrivalTime: this.state.arrivalDate + ` ${this.state.arrivalTime}`,
        capacity: this.state.capacity,
        availableSeats: this.state.capacity,
        economyFare: this.state.economyFare,
        businessFare: this.state.businessFare,
      };
      FlightAPIService.addAirline(flight).then((res) => {
        this.setState({ message: "flight Added successfully." });
        this.props.history.push("/superadmin");
      });
    }
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Add Airline</h2>
        <div className="icon d-flex align-items-center justify-content-center">
          <form>
            <div className="mb-3">
              <label>Airline Name</label>
              <input
                type="text"
                placeholder="airlineName"
                name="airlineName"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.nameError}
              </h6>
            </div>

            <div className="mb-3">
              <label>Airline Number</label>
              <input
                type="text"
                placeholder="airlineNo"
                name="airlineNo"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.numberError}
              </h6>
            </div>

            <div className="mb-3">
              <label>Departure Date</label>
              <input
                type="date"
                placeholder="departureDate"
                name="departureDate"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.departureDateError}
              </h6>
            </div>

            <div className="mb-3">
              <label>Arrival Date</label>
              <input
                type="date"
                placeholder="arrivalDate"
                name="arrivalDate"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.arrivalDateError}
              </h6>
            </div>
            <div className="mb-3">
              <label>From City</label>
              <input
                type="text"
                placeholder="fromCity"
                name="fromCity"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.fromCityError}
              </h6>
            </div>
            <div className="mb-3">
              <label>To City</label>
              <input
                type="text"
                placeholder="toCity"
                name="toCity"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.toCityError}
              </h6>
            </div>
            <div className="mb-3">
              <label>Departure Time[24 hrs format]</label>
              <input
                type="text"
                placeholder="00:00:00"
                name="departureTime"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.departureTimeError}
              </h6>
            </div>
            <div className="mb-3">
              <label>Arrival Time[24 hrs format]</label>
              <input
                type="text"
                placeholder="00:00:00"
                name="arrivalTime"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.arrivalTimeError}
              </h6>
            </div>
            <div className="mb-3">
              <label>Capacity</label>
              <input
                type="number"
                placeholder="capacity"
                name="capacity"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.capacityError}
              </h6>
            </div>
            <div className="mb-3">
              <label>Economy Fare</label>
              <input
                type="number"
                placeholder="economyFare"
                name="economyFare"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.economyFareError}
              </h6>
            </div>
            <div className="mb-3">
              <label>Business Fare</label>
              <input
                type="number"
                placeholder="businessFare"
                name="businessFare"
                className="form-control"
                onChange={this.onChange}
              />
              <h6 className="text-danger text-center">
                {this.state.businessFareError}
              </h6>
            </div>
            <button className="btn btn-primary" onClick={this.addFlight}>
              Add Airline
            </button>
          </form>
        </div>
      </div>
    );
  }
}
