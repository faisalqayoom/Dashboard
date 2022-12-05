import React, { useState } from "react";
import EventsForm from "./EventsForm";
import "./Events.scss";
import nextId from "react-id-generator";
import { MdDeleteForever, MdEditOff } from "react-icons/md";

const Events = () => {
  const [isStaffFormActive, setIsStaffFormActive] = useState(false);

  const [event, setEvent] = useState([]);

  const handleOnSubmit = (newEvent, e) => {
    setEvent([...event, { ...newEvent, id: nextId() }]);
    setIsStaffFormActive(false);
    e.target.reset();
  };
  return (
    <div className="container">
      <button
        className="btn mx-5 mt-5 mb-4 px-4 py-2 add-staff-student"
        onClick={() => setIsStaffFormActive(!isStaffFormActive)}
      >
        {isStaffFormActive ? "Go back" : "Add Event"}
      </button>

      {isStaffFormActive ? (
        <EventsForm
          className="d-flex mt-5"
          handleOnSubmit={handleOnSubmit}
          // value={value}
        />
      ) : (
        <div className="container mt-3">
          <table className="table table-bordered table-success">
            <thead>
              <tr>
                <th scope="col">S/No.</th>
                <th scope="col">EventName</th>
                <th scope="col">EventTheme</th>
                <th scope="col">EventDate</th>
                <th scope="col">EventSlogan</th>
                <th scope="col">Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {event &&
                event?.map((evt, i) => (
                  <tr key={evt.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{evt.eventName}</td>
                    <td>{evt.eventTheme}</td>
                    <td>{evt.eventDate}</td>
                    <td>{evt.eventSlogan}</td>
                    <td>
                      <MdDeleteForever
                        className="delete-icon"
                        // onClick={() => handleOnDelete(st.id)}
                      />
                      <MdEditOff
                        className="edit-icon"
                        // onClick={() => handleOnEdit(st)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Events;
