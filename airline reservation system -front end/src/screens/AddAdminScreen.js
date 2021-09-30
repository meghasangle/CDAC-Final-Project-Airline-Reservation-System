import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAdmin } from "../actions/SuperAdminActions";
import { ADDADMIN_RESET } from "../constants/SuperAdminConstants";

import store from "../store";
const AddAdminScreen = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [status, setStatus] = useState(1);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [mobileNoError, setMobileNoError] = useState("");

  const AddAdmin = useSelector((store) => store.addAdmin);
  const { loading, error, response } = AddAdmin;

  const dispatch = useDispatch();
  const onAddAdmin = () => {
    if (!firstName) setFirstNameError("First Name required!!!!!!");
    else setFirstNameError("");
    if (!lastName) setLastNameError("Last Name required!!!!!!");
    else setLastNameError("");
    if (!email) setEmailError("Email required!!!!!!");
    else setEmailError("");
    if (!password) setPasswordError("Password required!!!!!!");
    else setPasswordError("");
    if (mobileNo.length < 10)
      setMobileNoError("Mobile number required/enter valid number!!!!!!");
    else setMobileNoError("");
    if (firstName && lastName && email && password && mobileNo.length >= 10) {
      console.log(mobileNo);
      dispatch(
        addAdmin(firstName, lastName, email, password, mobileNo, status)
      );
    }
  };

  useEffect(() => {
    if (response && response.status === "success") {
      props.history.push("/superadmin");
      dispatch({
        type: ADDADMIN_RESET,
      });
    } else if (response && response.status === "error") {
      alert("Appoint admin failed");
    } else if (error) {
      alert("Appoint admin failed");
    }
  }, [loading, error, response]);
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="login-wrap p-4 p-md-5">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="fa fa-user-o"></span>
            </div>
            <h3 className="text-center mb-4">AddAdmin </h3>
            <div className="form-group">
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                className="form-control rounded-left"
                placeholder="First Name"
                required=""
              />
              <h6 className="text-danger text-center">{firstNameError}</h6>
            </div>
            <div className="form-group my-2">
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                className="form-control rounded-left"
                placeholder="Last Name"
                required=""
              />
              <h6 className="text-danger text-center">{lastNameError}</h6>
            </div>
            <div className="form-group my-2">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                className="form-control rounded-left"
                placeholder="Email"
                required=""
              />
              <h6 className="text-danger text-center">{emailError}</h6>
            </div>
            <div className="form-group d-flex my-2">
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="form-control rounded-left"
                placeholder="Password"
                required=""
              />
              <h6 className="text-danger text-center">{passwordError}</h6>
            </div>
            <div className="form-group d-flex my-2">
              <input
                onChange={(e) => {
                  setMobileNo(e.target.value);
                }}
                type="number"
                className="form-control rounded-left"
                placeholder="Mobile Number"
                required=""
              />
              <h6 className="text-danger text-center">{mobileNoError}</h6>
            </div>
            <div className="form-group my-3">
              <button
                onClick={onAddAdmin}
                type="submit"
                className="btn btn-primary rounded submit p-2 px-4"
              >
                addAdmin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdminScreen;
