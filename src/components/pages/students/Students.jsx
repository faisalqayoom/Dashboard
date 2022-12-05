import React, { useState } from "react";
import "../Pages.scss";
import AddStudentForm from "./AddStudentForm";
import { MdDeleteForever, MdEditOff } from "react-icons/md";
import nextId from "react-id-generator";

const Students = () => {
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);

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
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (value.id === "") {
      let newStudent = value;
      newStudent.id = nextId();
      setValue(newStudent);
      setStudents([value, ...students]);
    } else {
      const updatedStudents = students.map((item) => {
        if (item.id === value.id) return value;
        else return item;
      });
      setStudents(updatedStudents);
    }
    setValue(studentDetails);
    setIsAddStudentOpen(false);
  };

  const handleOnDelete = (id) => {
    const filteredStudents = students.filter((std) => std.id !== id);
    setStudents(filteredStudents);
  };
  const handleOnEdit = (student) => {
    setValue(student);
    setIsAddStudentOpen(true);
  };
  return (
    <div className="container">
      <button
        onClick={() => setIsAddStudentOpen(!isAddStudentOpen)}
        className="btn  mx-5 mt-5 mb-4 px-4 py-2 add-staff-student"
      >
        {isAddStudentOpen ? " Go Back  " : "Add Students"}
      </button>

      {isAddStudentOpen ? (
        <AddStudentForm
          value={value}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
        />
      ) : (
        <div className="container mt-3">
          <table className="table table-bordered table-success">
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
                        onClick={() => handleOnDelete(st.id)}
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
  );
};

export default Students;
