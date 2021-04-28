import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { CalendarEvent } from "./CalendarEvent";
import moment from "moment";
import { Navbar } from "../ui/Navbar";
import { messages } from "../../helpers/calendar-messages-es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/es";
import { CalendarModal } from "./CalendarModal";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../actions/ui";

moment.locale("es");

const localizer = momentLocalizer(moment);

const events = [
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
];

export const CalendarScreen = () => {
  const dispatch = useDispatch();

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  const onDoubleClick = (e) => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (e) => {
    console.log(e);
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };

  const eventStylesGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#367cf7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };

    return { style };
  };

  return (
    <div className="container-calendar">
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccesor="start"
        endAccesor="end"
        messages={messages}
        onSelectEvent={onSelectEvent}
        onDoubleClickEvent={onDoubleClick}
        onView={onViewChange}
        view={lastView}
        eventPropGetter={eventStylesGetter}
        components={{
          event: CalendarEvent,
        }}
      />

      <CalendarModal />
    </div>
  );
};
