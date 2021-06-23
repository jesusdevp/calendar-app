import React from "react";
import PropTypes from "prop-types";

import { Redirect, Route } from "react-router-dom";

export const PublicRoute = ({
  isAuthticated,
  component: Component,
  ...rest
}) => {
  return (
    <div>
      <Route
        {...rest}
        component={(props) =>
          isAuthticated ? <Redirect to="/" /> : <Component {...props} />
        }
      />
    </div>
  );
};

PublicRoute.propTypes = {
  isAuthticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
