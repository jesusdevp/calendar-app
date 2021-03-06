import React from "react";
import { useDispatch } from "react-redux";
import { startEventDeleted } from "../../actions/events";

export const DeleteEventFab = () => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(startEventDeleted());
  };

  return (
    <button className="btn btn-danger fab-danger" onClick={handleDelete}>
      <i className="fas fa-trash"> Borrar evento</i>
    </button>
  );
};
