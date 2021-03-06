import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import "./Login.css";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: "",
    lPassword: "",
  });

  const { lEmail, lPassword } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(startLogin(lEmail, lPassword));
  };

  return (
    <div className="container login-container">
      <div className="col-md-6 login-form-1">
        <h3>Sign in</h3>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              name="lEmail"
              value={lEmail}
              onChange={handleLoginInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="lPassword"
              value={lPassword}
              onChange={handleLoginInputChange}
            />
          </div>
          <div className="form-group btn-container">
            <input type="submit" className="btnSubmit" value="Login" />
          </div>
          <Link to="/auth/register">
            <p>Create Account</p>
          </Link>
        </form>
      </div>
    </div>
  );
};
