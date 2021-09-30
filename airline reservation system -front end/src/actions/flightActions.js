import axios from "axios";
import { BASE_API } from "../constants/ApiConstant";
import {
    FLIGHT_FETCH_REQUEST,
    FLIGHT_FETCH_SUCCESS,
    FLIGHT_FETCH_FAIL,
    FLIGHT_FETCH_RESET,
    FLIGHT_ADD_REQUEST,
    FLIGHT_ADD_SUCCESS,
    FLIGHT_ADD_FAIL,
    FLIGHT_ADD_RESET,
    FLIGHT_CANCEL_REQUEST,
    FLIGHT_CANCEL_SUCCESS,
    FLIGHT_CANCEL_FAIL,
    FLIGHT_CANCEL_RESET
  } from "../constants/flightConstants";

export const getFlights = () => {
    return (dispatch) => {
      dispatch({
        type: FLIGHT_FETCH_REQUEST,
      });
  
      const header = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      
      const url = BASE_API+"/admin/get_flights";
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: FLIGHT_FETCH_SUCCESS,
            payload: response.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: FLIGHT_FETCH_FAIL,
            payload: error,
          });
        });
    };
  };
  export const cancelFlight=(flight_id)=>{
    return (dispatch) => {
      dispatch({
        type: FLIGHT_CANCEL_REQUEST,
      });
      const header = {
        headers: {
          "Content-Type": "application/json",
        },
      };
     
     
      const url = BASE_API+"/admin/cancel_flight/"+flight_id;
      axios.delete(url, header)
      .then((response) => {
        dispatch({
          type: FLIGHT_CANCEL_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FLIGHT_CANCEL_FAIL,
          payload: error,
        });
      });
    }
  }