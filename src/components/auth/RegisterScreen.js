import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export const RegisterScreen = () => {
  return (
    <div className="container register-container">
      <div className="col-md-6 register-form">
        <h3>Sign up</h3>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Repeat Password"
            />
          </div>
          <div className="form-group btn-container">
            <input type="submit" className="btnSubmit" value="Create Account" />
          </div>
          <Link to="/auth/login">
            <p className="signup">Sign in</p>
          </Link>
        </form>
      </div>
    </div>
  );
};
