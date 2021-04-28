import React, { useState } from "react";
import moment from "moment";
import Modal from "react-modal";
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from "@material-ui/pickers";
import Swal from "sweetalert2";
import DateFnsUtils from "@date-io/date-fns";
import { useSelector, useDispatch } from "react-redux";
import { uiCloseModal } from "../../actions/ui";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const now = moment()
  .minutes(0)
  .seconds(0)
  .add(1, "hours");

const nowPlusHour = now.clone().add(1, "hours");

export const CalendarModal = () => {
  const { modalOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(nowPlusHour.toDate());
  const [titleValid, setTitleValid] = useState(true);

  const [formValues, setFormValues] = useState({
    title: "Evento",
    notes: "",
    start: now.toDate(),
    end: nowPlusHour.toDate(),
  });

  const { notes, title, start, end } = formValues;

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const closeModal = () => {
    dispatch(uiCloseModal());
  };

  const handleStartDateChange = (e) => {
    setDateStart(e);
    setFormValues({
      ...formValues,
      start: e,
    });
  };

  const handleEndDateChange = (e) => {
    setDateEnd(e);
    setFormValues({
      ...formValues,
      end: e,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const momentStart = moment(start);
    const momentEnd = moment(end);

    if (momentStart.isSameOrAfter(momentEnd)) {
      Swal.fire(
        "Error",
        "La fecha fin debe de ser mayor a la fecha de inicio",
        "error"
      );
      return;
    }

    if (title.trim().length < 2) {
      return setTitleValid(false);
    }

    setTitleValid(true);
    closeModal();
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={200}
        className="modal"
        overlayClassName="modal-fondo"
      >
        <h1> Nuevo evento </h1>
        <hr />
        <form className="container" onSubmit={handleSubmitForm}>
          <div className="form-group ">
            <KeyboardDateTimePicker
              inputVariant="outlined"
              ampm={false}
              label="Fecha y hora inicio"
              value={dateStart}
              onChange={handleStartDateChange}
              format="MMMM dd yyyy, HH:mm "
            />
          </div>

          <div className="form-group">
            <KeyboardDateTimePicker
              inputVariant="outlined"
              ampm={false}
              label="Fecha y hora fin"
              value={dateEnd}
              onChange={handleEndDateChange}
              minDate={dateStart}
              format="MMMM dd yyyy, HH:mm "
            />
          </div>

          <hr />
          <div className="form-group">
            <label>Titulo y notas</label>
            <input
              type="text"
              className={`form-control ${!titleValid && "is-invalid"} `}
              placeholder="Título del evento"
              name="title"
              autoComplete="off"
              value={title}
              onChange={handleInputChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              Una descripción corta
            </small>
          </div>

          <div className="form-group">
            <textarea
              type="text"
              className="form-control"
              placeholder="Notas"
              rows="5"
              name="notes"
              value={notes}
              onChange={handleInputChange}
            ></textarea>
            <small id="emailHelp" className="form-text text-muted">
              Información adicional
            </small>
          </div>

          <button type="submit" className="btn btn-outline-primary btn-block">
            <i className="far fa-save"></i>
            <span> Guardar</span>
          </button>
        </form>
      </Modal>
    </MuiPickersUtilsProvider>
  );
};
