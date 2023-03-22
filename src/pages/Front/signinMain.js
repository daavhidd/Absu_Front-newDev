import React, { Component } from "react";
import { loginUser } from "../../utils/auth";
import EndpointAlt from "../../utils/endpointalt";
import Endpoint from "../../utils/endpoint";
import { PulseSpinner } from "react-spinners-kit";
import $ from "jquery";
import axios from "axios";
import { Link } from "react-router-dom";
class SignForm extends Component {
  state = {};
  handleInput = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };
  handleLogin = (e) => {
    e.preventDefault();
    $("#preloader").fadeIn();
    if (this.state.username != null && this.state.pass != null) {
      const payload = {
        "username":this.state.username,
        "password":this.state.pass
    }
    Endpoint.authenticateUser(payload)
      .then(function (response) {
        console.log(response);
         loginUser(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
return
      EndpointAlt.authenticateAlt(this.state.username, this.state.pass)
        .then((res) => {
          console.log(res.data);
          return;
          if (res.data.active == true) {
            loginUser(res.data);
          } else {
            $("#preloader").fadeOut();
            alert("Invalid Login credentials");
          }
        })
        .catch((err) => {
          $("#preloader").fadeOut();
          alert("Invalid Login credentials..");
        });
    }
  };
  validateUser = () => {
    Endpoint.getStaff()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    setTimeout(() => {
      $("#preloader").fadeOut();
    }, 2000);
  }

  render() {
    return (
      <>
        <div id="preloader">
          <div id="status">
            <center>
              <PulseSpinner
                color="white"
                backColor="#FFF"
                frontColor="#FFF"
                size={45}
              />
            </center>
          </div>
        </div>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100" style={{ marginTop: "-10em" }}>
              <form
                className="login100-form"
                onSubmit={(e) => this.handleLogin(e)}
              >
                <div
                  className="login100-form-avatar"
                  style={{ background: "#fff" }}
                >
                  {/* <i className="fa fa-user"/> */}
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png" />
                </div>
                <span
                  className="login100-form-title monte"
                  style={{ marginTop: "30px" }}
                >
                  Admin Login
                </span>
                <div
                  class="wrap-input100 validate-input m-b-10"
                  style={{ marginTop: "30px" }}
                >
                  <input
                    class="input100 qsand"
                    required
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={this.handleInput}
                  />
                  <span class="focus-input100"></span>
                  <span class="symbol-input100">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
                <div
                  class="wrap-input100 validate-input m-b-10"
                  style={{ marginTop: "10px" }}
                >
                  <input
                    class="input100 qsand"
                    required
                    type="password"
                    name="pass"
                    placeholder="Password"
                    onChange={this.handleInput}
                  />
                  <span class="focus-input100"></span>
                  <span class="symbol-input100">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
                <div
                  class="container-login100-form-btn p-t-10"
                  style={{ marginTop: "30px" }}
                >
                  <button
                    class="login100-form-btn monte"
                    style={{ border: "none" }}
                  >
                    Login
                  </button>
                  <Link
                    to={"/"}
                    className="mt-4"
                    style={{ color: "#fff", fontSize: "12px" }}
                  >
                    Go to Home
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignForm;
