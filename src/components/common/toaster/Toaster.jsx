import Toast from "react-bootstrap/Toast";
import React from "react";

const Toaster = () => {
  return (
    <>
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Great</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Student Deleted Successfully!!</Toast.Body>
      </Toast>
    </>
  );
};

export default Toaster;
