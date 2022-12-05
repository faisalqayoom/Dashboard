import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { BsAppIndicator, BsFillPersonFill } from "react-icons/bs";

const LoginForm = () => {
  const defaultData = { email: "", password: "" };
  const [value, setValue] = useState(defaultData);
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const handleonChange = (e) => {
    seterror("");
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const getdata = async (eml, psd) => {
    const data = await fetch("/api/Api.json");
    const resp = await data.json();
    console.log(resp);
    if (eml === resp.email && psd === resp.password) {
      return true;
    } else return false;
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (value.email === "" && value.password === "") {
      seterror("Email and Password not found");
    } else if (value.email === "") {
      seterror("Email not found");
    } else if (value.password === "") {
      seterror("Password not found");
    } else {
      const res = await getdata(value.email, value.password);
      if (res) {
        navigate("/dashboard", { replace: true });
      } else if (!res) {
        seterror("Invalid Credentials");
      }
    }
  };

  return (
    <div className="container parent-div">
      <div className="justify-content-center align-items-center d-flex after-container">
        <form className="loginform d-block" onSubmit={handleOnSubmit}>
          <div className="login-icon">
            <p>Admin Login</p>
            <BsFillPersonFill className="login-icon" />
            {error && <p className="errorMessage">{error}</p>}
          </div>
          <div className="form-group my-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="EmailInput"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={value.email}
              onChange={handleonChange}
              // onChange={(event) => setEmail(event.target.value)}
            />
            <small id="emailHelp" className="text-danger form-text">
              {/*emailError*/}
            </small>
          </div>
          <div className="form-group my-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="exampleInputPassword1"
              placeholder="Password"
              value={value.password}
              onChange={handleonChange}
              // onChange={(event) => setPassword(event.target.value)}
            />
            <small id="passworderror" className="text-danger form-text">
              {/* {passwordError} */}
            </small>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Check me out</label>
          </div>
          <button
            type="submit"
            className="btn btn-success align-center w-100 px-5 mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
