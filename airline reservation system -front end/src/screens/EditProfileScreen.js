import { Component } from "react";
import UserAPIService from "../service/UserAPIService";

export default class EditProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobileNo: "",
    };
    this.loadUser = this.loadUser.bind(this);
  }
  componentDidMount() {
    this.loadUser();
  }

  loadUser() {
    UserAPIService.fetchUserById(window.sessionStorage.getItem("userid")).then(
      (res) => {
        let user = res.data.data;
        console.log(user.firstName);
        this.setState({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
          mobileNo: user.mobileNo,
          status: user.status,
          passwordError: "",
          mobileNoError: "",
        });
      }
    );
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  saveUser = (e) => {
    e.preventDefault();
    if (this.state.password.length < 5)
      this.setState({ passwordError: "Enter a valid Password" });
    else this.setState({ passwordError: "" });
    if (!this.state.mobileNo)
      this.setState({ mobileNoError: "Please enter mobile number" });
    else this.setState({ mobileNoError: "" });
    if (this.state.password && this.state.mobileNo) {
      let user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        mobileNo: this.state.mobileNo,
        status: this.state.status,
      };
      UserAPIService.editUser(
        user,
        window.sessionStorage.getItem("userid")
      ).then((res) => {
        this.setState({ message: "Profile Updated Successfully" });
        if (sessionStorage.getItem("userRole") == "SUPERADMIN")
          this.props.history.push("/superadmin");
        if (sessionStorage.getItem("userRole") == "ADMIN")
          this.props.history.push("/admin");
        if (sessionStorage.getItem("userRole") == "CUSTOMER")
          this.props.history.push("/customer");
      });
    }
  };

  render() {
    return (
      <div>
        <div class="container rounded mt-5 mb-5">
          <div class="row">
            <div class="col-md-3 border-right">
              <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  class="rounded-circle mt-5"
                  width="150px"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                />
              </div>
            </div>
            <div class="col-md-5 border-right">
              <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4 class="text-right">Edit Profile</h4>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="firstName"
                      name="firstName"
                      className="form-control"
                      readonly="true"
                      defaultValue={this.state.firstName}
                    />
                  </div>
                  <div class="col-md-6">
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="lastName"
                      name="lastName"
                      className="form-control"
                      readonly="true"
                      value={this.state.lastName}
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label>Email</label>
                    <input
                      placeholder="email"
                      name="email"
                      className="form-control"
                      readonly="true"
                      value={this.state.email}
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Password</label>
                    <input
                      type="text"
                      placeholder="password"
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    <h6 className="text-danger text-center my-4">
                      {this.state.passwordError}
                    </h6>
                  </div>
                  <div class="col-md-12">
                    <label className="labels">Mobile Number</label>
                    <input
                      type="number"
                      placeholder="mobileNo"
                      name="mobileNo"
                      className="form-control"
                      value={this.state.mobileNo}
                      onChange={this.onChange}
                    />
                    <h6 className="text-danger text-center my-4">
                      {this.state.mobileNoError}
                    </h6>
                  </div>
                </div>
                <div class="mt-5 text-center">
                  <button class="btn btn-primary profile-button" type="button"  onClick={this.saveUser}>
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
