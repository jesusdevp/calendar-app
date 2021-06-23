import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { startRegister } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import "./Register.css";

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    rName: "Jesus",
    rEmail: "jesus@gmail.com",
    rPassword1: "123456",
    rPassword2: "123456",
  });

  const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (rPassword1 !== rPassword2) {
      return Swal.fire(
        "Error",
        "Las contraseñas deben de ser iguales",
        "error"
      );
    }

    dispatch(startRegister(rEmail, rPassword1, rName));
  };

  return (
    <div className="container register-container">
      <div className="col-md-6 register-form">
        <h3>Sign up</h3>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="rName"
              value={rName}
              onChange={handleRegisterInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="rEmail"
              value={rEmail}
              onChange={handleRegisterInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              name="rPassword1"
              value={rPassword1}
              onChange={handleRegisterInputChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Repeat Password"
              name="rPassword2"
              value={rPassword2}
              onChange={handleRegisterInputChange}
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
