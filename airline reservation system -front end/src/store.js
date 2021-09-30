import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { userSigninReducer, userSignupReducer } from "./reducers/userReducers";
import { cancelFlightReducer, fetchFlightsReducer } from "./reducers/flightReducer";
import { addAdminReducer } from "./reducers/SuperAdminReducer";

const reducers = combineReducers({
    userSignin: userSigninReducer,
    userSignup: userSignupReducer,
    fetchFlight: fetchFlightsReducer,
    cancelFlight: cancelFlightReducer,
    addAdmin: addAdminReducer
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store