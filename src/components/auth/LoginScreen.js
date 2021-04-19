import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export const LoginScreen = () => {
  return (
    <div className="container login-container">
      <div className="col-md-6 login-form-1">
        <h3>Sign in</h3>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
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
