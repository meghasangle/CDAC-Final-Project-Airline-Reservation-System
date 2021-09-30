import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlights } from "../actions/flightActions";
import Header from "../components/Header";

const GetPassengerListScreen = (props) => {
  const dispatch = useDispatch();
  const flights = useSelector((store) => store.fetchFlight);
  const { loading, error, response } = flights;
  useEffect(() => {
    dispatch(getFlights());
  }, []);
  const getList = (id) => {
    sessionStorage.setItem("airId", id);
    props.history.push("/list");
  };

  return (
    <div>
      {/* <Header title="Scheduled Flights" />
          <table class="table caption-top ">
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
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response.data &&
                response.data.length > 0 &&
                response.data.map((flight) => {
                  return (
                    <tr>
                      <td scope="row">{flight.airlineName}</td>
                      <td>{flight.airlineNo}</td>
                      <td>{flight.fromCity}</td>
                      <td>{flight.toCity}</td>
                      <td>{flight.departureDate}</td>
                      <td>{flight.arrivalDate}</td>
                      <td>{flight.departureTime}</td>
                      <td>{flight.arrivalTime}</td>
                      <td>
                        <button
                          className="btn btn-outline-danger "
                          onClick={() => getList(flight.id)}
                        >
                          {" "}
                           Get List
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table> */}
      <section class="content-info">
        <div class="container paddings-mini">
          <div class="row card-table table">
            <div class="col-xs-12 col-sm-12 col-md-12 ">
              <table class="table table-responsive table-hover result-point">
                <thead class="point-table-head">
                  <tr>
                    <th class="text-left">Airline Name</th>
                    <th class="text-left">Airline Number</th>
                    <th class="text-center">From</th>
                    <th class="text-center">To</th>
                    <th class="text-center">Departure Date</th>
                    <th class="text-center">Arrival Date</th>
                    <th class="text-center">Departure Time</th>
                    <th class="text-center">Arrival Time</th>
                    <th class="text-center">Action</th>
                   
                  </tr>
                </thead>
                <tbody class="text-center">
                {response &&
                response.data &&
                response.data.length > 0 &&
                response.data.map((flight) => {
                  return (
                  <tr>
                    <td scope="row">{flight.airlineName}</td>
                      <td>{flight.airlineNo}</td>
                      <td>{flight.fromCity}</td>
                      <td>{flight.toCity}</td>
                      <td>{flight.departureDate}</td>
                      <td>{flight.arrivalDate}</td>
                      <td>{flight.departureTime}</td>
                      <td>{flight.arrivalTime}</td>
                      <td>
                        <button
                          className="btn btn-outline-danger "
                          onClick={() => getList(flight.id)}
                        >
                          {" "}
                           Get List
                        </button>
                      </td>
                  </tr>
                  )})}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default GetPassengerListScreen;
