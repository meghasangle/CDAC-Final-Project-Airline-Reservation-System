import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelFlight, getFlights } from "../actions/flightActions";
import Header from "../components/Header";

const CancelFlightScreen = (props) => {
  const [message , setMessage] = useState('')
  const dispatch = useDispatch();
  const flights = useSelector((store) => store.fetchFlight);
  const { loading, error, response } = flights;
  useEffect(() => {
    dispatch(getFlights())
    
  }, []);
  const onCancel=(flight_id)=>{
      dispatch(cancelFlight(flight_id))
      if(response.status === 'success'){
        setMessage('Flight Deleted Successfully')  
        props.history.push('/admin')   
      }
      
     
  }
  return (
    <div>
      <Header title="Flights List" />
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
            <th scope="col">Action</th>
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
                <td><button onClick={()=>onCancel(flight.id)} type="submit" className="btn btn-primary rounded submit p-2 px-4">Cancel</button></td>
              </tr>)
            })}
        </tbody>
      </table>
      <h6 Style="color: red; text-align: center">{message}</h6>
    </div>
  );
};

export default CancelFlightScreen;
