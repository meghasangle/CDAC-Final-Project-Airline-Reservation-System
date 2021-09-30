import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";

const Navigation = (props) => {
  const dispatch = useDispatch();
  const userSignin = useSelector((store) => store.userSignin);

  const onLogout = () => {
    dispatch(logout());
    window.sessionStorage.removeItem("user");
    window.sessionStorage.removeItem("userid");
    window.sessionStorage.removeItem("userRole");
    props.history.push("/signin");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Airline Reservation System
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">
                <span className="nav-link">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <span className="nav-link">About</span>
              </Link>
            </li>
            {!userSignin.response && (
              <li className="nav-item">
                <Link to="/signup">
                  <span className="nav-link">Signup</span>
                </Link>
              </li>
            )}
            {userSignin.response && (
              <li className="nav-item">
                <Link to="/edit_profile">
                  <span className="nav-link">Edit Profile</span>
                </Link>
              </li>
            )}
          </ul>
          {userSignin.response && userSignin.response.data.userRole == "ADMIN" && (
            <div
              className="collapse navbar-collapse"
              id="navbarNavDarkDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Admin Actions
                  </span>
                  <ul
                    className="dropdown-menu dropdown-menu-light"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <Link to="/update_flight">
                        <span className="dropdown-item">
                          Update Flight Schedule
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/cancel_flight">
                        <span className="dropdown-item">Cancel Flight</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/cancel_booking">
                        <span className="dropdown-item">Cancel Booking</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/passenger_list">
                        <span className="dropdown-item">Passenger List</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
          {userSignin.response &&
            userSignin.response.data.userRole == "SUPERADMIN" && (
              <div
                className="collapse navbar-collapse"
                id="navbarNavDarkDropdown"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <span
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Super Admin Actions
                    </span>
                    <ul
                      className="dropdown-menu dropdown-menu-light"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <Link to="/add_admin">
                          <span className="dropdown-item" href="#">
                            Add Admin
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/add_airline">
                          <span className="dropdown-item" href="#">
                            Add Airline
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/show_feedback">
                          <span className="dropdown-item" href="#">
                            Show Feedbacks
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/revenue_report" >
                          <span className="dropdown-item" href="#">
                            Revenue Report
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          {userSignin.response &&
            userSignin.response.data.userRole == "CUSTOMER" && (
              <div
                className="collapse navbar-collapse"
                id="navbarNavDarkDropdown"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <span
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Other Options
                    </span>
                    <ul
                      className="dropdown-menu dropdown-menu-light"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                      <Link to = "/show_userbookings">
                        <span className="dropdown-item" href="#">
                          Cancel Booking
                        </span>
                      </Link>
                      </li>
                      <li>
                        <Link to="/customer_showBookings">
                          <span className="dropdown-item" href="#">
                            Booking History
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
        </div>
        {userSignin.response && (
          <div className="d-flex">
            <button onClick={onLogout} className="btn btn-outline-danger">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
