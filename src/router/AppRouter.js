import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={CalendarScreen} />
        </Switch>
      </div>
    </Router>
  );
};
