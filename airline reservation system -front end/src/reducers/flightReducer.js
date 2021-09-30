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

export const fetchFlightsReducer = (state = {}, action) => {
    switch(action.type) {
        case FLIGHT_FETCH_REQUEST :
            return {loading : true}
        case FLIGHT_FETCH_SUCCESS:
            return {loading : false, response: action.payload}
        case FLIGHT_FETCH_FAIL:
            return {loading : false, error: action.payload}
        case FLIGHT_FETCH_RESET:
            return {}
        default:
            return state
    }
}
export const cancelFlightReducer = (state = {}, action) => {
    switch(action.type) {
        case FLIGHT_CANCEL_REQUEST :
            return {loading : true}
        case FLIGHT_CANCEL_SUCCESS:
            return {loading : false, response: action.payload}
        case FLIGHT_CANCEL_FAIL:
            return {loading : false, error: action.payload}
        case FLIGHT_CANCEL_RESET:
            return {}
        default:
            return state
    }
}