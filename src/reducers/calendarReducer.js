import moment from "moment";
import { types } from "../types/types";

const initialState = {
  events: [
    {
      title: "Cumpleaños del jefe",
      start: moment().toDate(), // New date
      end: moment()
        .add(2, "hours")
        .toDate(),
      bgcolor: "#fafafa",
      notes: "Comprar cerveza",
      user: {
        _id: "123",
        name: "Jesus",
      },
    },
  ],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };

    case types.eventAddNew:
      return {
        ...state,
        events: [...state, action.payload],
      };

    default:
      return state;
  }
};
