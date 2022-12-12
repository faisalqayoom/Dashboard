import React from "react";
import "./Modal.scss";

const Modal = (props) => {
  const { setisModalOpen, handleConfirm } = props;

  // const handleConfirm = (id) => {
  //   const filteredStudents = students.filter((std) => std.id !== id);
  //   setStudents(filteredStudents);
  //   setisModalOpen(false);
  // };

  return (
    <div
      className="backdrop-div d-flex align-items-center justify-content-center"
      onClick={() => setisModalOpen(false)}
    >
      <div className=" d-flex flex-column align-items-center justify-content-center">
        <div className="modal-cont">
          <h4 className="text-center mb-3">Are You Sure ?</h4>
          <div>
            <button
              className="btn btn-danger me-5 px-4"
              onClick={() => setisModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="btn btn-success ms-5 px-4 "
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
