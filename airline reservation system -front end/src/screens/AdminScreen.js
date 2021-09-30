import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlights } from "../actions/flightActions";
import Header from "../components/Header";

const AdminScreen = (props) => {
  const dispatch = useDispatch();
  const flights = useSelector((store) => store.fetchFlight);
  const { loading, error, response } = flights;
  useEffect(() => {
    console.log("admin screen use effect called");
    dispatch(getFlights());
  }, []);
  return (
    <div>
      <Header title="Scheduled Flights" />
      <table class="table caption-top">
        <thead>
          <tr>
            <th scope="col">Airline Name</th>
            <th scope="col">Airline Number</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Departure Date</th>
            <th scope="col">Arrival Date</th>
            <th scope="col">Departure Time</th>
            <th scope="col">Arrival Time</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.data &&
            response.data.length > 0 &&
            response.data.map((flight) => {
              return(
              <tr>
                <td scope="row">{flight.airlineName}</td>
                <td>{flight.airlineNo}</td>
                <td>{flight.fromCity}</td>
                <td>{flight.toCity}</td>
                <td>{flight.departureDate}</td>
                <td>{flight.arrivalDate}</td>
                <td>{flight.departureTime}</td>
                <td>{flight.arrivalTime}</td>
              </tr>)
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminScreen;
