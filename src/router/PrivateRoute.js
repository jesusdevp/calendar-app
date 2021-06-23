import React from "react";
import PropTypes from "prop-types";

import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({
  isAuthticated,
  component: Component,
  ...rest
}) => {
  return (
    <div>
      <Route
        {...rest}
        component={(props) =>
          isAuthticated ? (
            <Component {...props} />
          ) : (
            <Redirect to="/auth/login" />
          )
        }
      />
    </div>
  );
};

PrivateRoute.propTypes = {
  isAuthticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
