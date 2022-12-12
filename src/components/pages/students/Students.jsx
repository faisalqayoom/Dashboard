import React, { useState } from "react";
import "../Pages.scss";
import AddStudentForm from "./AddStudentForm";
import { MdDeleteForever, MdEditOff } from "react-icons/md";
import nextId from "react-id-generator";
import Modal from "../../common/modal/Modal";
import Toaster from "../../common/toaster/Toaster";
import Button from "../../button/Button";
import { RiLoginCircleFill, RiLogoutCircleFill } from "react-icons/ri";

const Students = () => {
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isToasterVisible, setisToasterVisible] = useState(false);

  const [students, setStudents] = useState([]);
  const studentDetails = {
    id: "",
    fullName: "",
    branch: "",
    phone: "",
    email: "",
    usn: "",
    batch: "",
  };
  const [value, setValue] = useState(studentDetails);

  const handleOnChange = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (value.id === "") {
      let newStudent = value;
      newStudent.id = nextId();
      setStudents([newStudent, ...students]);
    } else {
      const updatedStudents = students.map((item) => {
        if (item.id === value.id) return value;
        else return item;
      });
      setStudents(updatedStudents);
    }
    setValue(studentDetails);
    setIsAddStudentOpen(false);

    await fetch(
      "https://dashboard-b8e56-default-rtdb.asia-southeast1.firebasedatabase.app/value.json",
      {
        method: "POST",
        body: JSON.stringify(),
        headers: {
          "content-type": "application/json",
        },
      }
    );
  };
  const handleConfirm = () => {
    // setisModalOpen(true);
    const filteredStudents = students.filter((std) => std.id !== value.id);
    setStudents(filteredStudents);
    setisModalOpen(false);
    setValue(studentDetails);
    setisToasterVisible(true);
    roaster();
  };

  const handleOnDelete = (st) => {
    // const filteredStudents = students.filter((std) => std.id !== id);
    // setStudents(filteredStudents);
    setisModalOpen(true);
    setValue(st);
  };

  const handleOnEdit = (student) => {
    setValue(student);
    setIsAddStudentOpen(true);
  };
  const roaster = () => {
    setTimeout(() => {
      setisToasterVisible(false);
    }, 3000);
  };

  return (
    <>
      <div className="roaster-div position-absolute ms-auto ">
        {/* <Toaster /> */}
        {isToasterVisible && (
          <Toaster setisVisible={setisToasterVisible} autohide={true} />
        )}
      </div>
      {isModalOpen && (
        <Modal
          setisModalOpen={setisModalOpen}
          students={students}
          setStudents={setStudents}
          handleConfirm={handleConfirm}
          id={value.id}
        />
      )}
      <div className="container">
        <Button
          text={isAddStudentOpen ? " Go Back  " : "Add Students"}
          handleClick={() => setIsAddStudentOpen(!isAddStudentOpen)}
          className="btn  mx-5 mt-5 mb-4 px-4 py-2 "
          icon={
            isAddStudentOpen ? <RiLoginCircleFill /> : <RiLogoutCircleFill />
          }
        />
        {/* <button
          onClick={() => setIsAddStudentOpen(!isAddStudentOpen)}
          className="btn  mx-5 mt-5 mb-4 px-4 py-2 add-staff-student"
        >
          {isAddStudentOpen ? " Go Back  " : "Add Students"}
        </button> */}

        {isAddStudentOpen ? (
          <AddStudentForm
            value={value}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        ) : (
          <div className="container mt-3">
            <table className="table table-bordered table-success student-table">
              <thead>
                <tr>
                  <th scope="col">S/No.</th>
                  <th scope="col">FullName</th>
                  <th scope="col">Branch</th>
                  <th scope="col">Phone No.</th>
                  <th scope="col">Email</th>
                  <th scope="col">Usn</th>
                  <th scope="col">Branch</th>
                  <th scope="col">Edit/Delete.</th>
                </tr>
              </thead>
              <tbody>
                {students &&
                  students.map((st, i) => (
                    <tr key={st.id}>
                      <th scope="row">{i + 1}</th>
                      <td>{st.fullName}</td>
                      <td>{st.branch}</td>
                      <td>{st.phone}</td>
                      <td>{st.email}</td>
                      <td>{st.usn}</td>
                      <td>{st.branch}</td>
                      <td>
                        <MdDeleteForever
                          className="delete-icon"
                          onClick={() => handleOnDelete(st)}
                        />
                        <MdEditOff
                          className="edit-icon"
                          onClick={() => handleOnEdit(st)}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Students;
