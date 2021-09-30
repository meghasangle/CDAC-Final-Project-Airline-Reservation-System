import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import Navigation from './components/Navigation';
import AdminScreen from './screens/AdminScreen';
import SuperAdminScreen from './screens/SuperAdminScreen';
import SearchFlightScreen from './screens/SearchFlightScreen';
import Footer from './components/Footer';
import UpdateFlightScreen from './screens/UpdateFlightScreen';
import UpdateFlightForm from './screens/UpdateFlightForm';
import CancelFlightScreen from './screens/CancelFlightScreen';
import CancelBookingScreen from './screens/CancelBookingsScreen';
import ShowBookingScreen from './screens/ShowBookingsScreen';
import AddAdminScreen from './screens/AddAdminScreen';
import AddAirlineScreen from './screens/AddAirlineScreen';
import GetPassengerListScreen from './screens/GetPassengerListScreen';
import FinalListPassengerScreen from './screens/FinalListPassengerScreen';
import ShowFeedbackScreen from './screens/ShowFeedbackScreen';
import ListFeedBackScreen from './screens/ListFeedbackScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import UpdateBookingScreen from './screens/UpdateBookingScreen';
import TicketHistoryForCustomerScreen from './screens/TicketHistoryForCustomerScreen';
import PostFeedbackScreen from './screens/PostFeedbackScreen';
import AboutScreen from './screens/AboutScreen';
import ShowUserBookingScreen from './screens/ShowUserBookingsScreen';
import RevenueReportScreen from './screens/RevenueReportScreen';
function App() {
  return (
    <div>
      <Router>
        <div className="container">
        <Navigation/>
        <Switch>
        <div class="jumbotron">
        <img src="/images/plane.png"  width="750" height="500"/>

          <Route path="/"  exact component={SigninScreen}/>
          <Route path="/signin" component={SigninScreen}/>
          <Route path="/signup" component={SignupScreen}/>
          <Route path="/admin" component={AdminScreen}/>
          <Route path="/superadmin" component={SuperAdminScreen}/>
          <Route path="/customer/search_flight" component={SearchFlightScreen}/>
          <Route path="/update_flight" component={UpdateFlightScreen}/>
          <Route path="/update_flight_form" component={UpdateFlightForm}/>
          <Route path="/cancel_flight" component={CancelFlightScreen}/>
          <Route path="/cancel_booking" component={CancelBookingScreen}/>
          <Route path="/show_bookings" component={ShowBookingScreen}/>
          <Route path="/add_admin" component={AddAdminScreen}/>
          <Route path="/add_airline" component={AddAirlineScreen}/>
          <Route path="/passenger_list" component={GetPassengerListScreen}/>
          <Route path="/list" component={FinalListPassengerScreen}/>
          <Route path="/show_feedback" component={ShowFeedbackScreen}/>
          <Route path="/feedback_list" component={ListFeedBackScreen}/>
          <Route path="/edit_profile" component={EditProfileScreen} />
          <Route path="/update_bookings" component={UpdateBookingScreen}/>
          <Route path="/customer_showBookings" component={TicketHistoryForCustomerScreen}/>
          <Route path="/post_Customer_Feedback" component={PostFeedbackScreen}/>
          <Route path="/about" component={AboutScreen}/>
          <Route path="/show_userbookings" component={ShowUserBookingScreen}/>
          <Route path="/revenue_report" component={RevenueReportScreen}/>
          </div>
        </Switch>
        <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
