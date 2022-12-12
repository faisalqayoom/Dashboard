import React, { useState } from "react";
import StaffForm from "./StaffForm";
import { MdDeleteForever, MdEditOff } from "react-icons/md";
import nextId from "react-id-generator";
import "../Pages.scss";
import "./StaffForm.scss";
import Button from "../../button/Button";
import { RiLoginCircleFill, RiLogoutCircleFill } from "react-icons/ri";

const Staff = () => {
  const [isStaffFormActive, setIsStaffFormActive] = useState(false);
  const staffDetails = {
    id: "",
    fullName: "",
    departement: "",
    phone: "",
    email: "",
    employementNo: "",
    gender: "",
  };
  const [value, setValue] = useState(staffDetails);

  const [staff, setStaff] = useState([]);

  const handleOnChange = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (value.id === "") {
      let newStaff = value;
      newStaff.id = nextId();
      setValue(newStaff);
      setStaff([value, ...staff]);
    } else {
      const updatedStaff = staff.map((item) => {
        if (item.id === value.id) return value;
        else return item;
      });
      setStaff(updatedStaff);
    }
    setValue(staffDetails);
    setIsStaffFormActive(false);
  };
  const handleOnDelete = (id) => {
    const filteredStaff = staff.filter((item) => item.id !== id);
    setStaff(filteredStaff);
  };

  const handleOnEdit = (staff) => {
    setValue(staff);
    setIsStaffFormActive(true);
  };

  return (
    <>
      <div className="container staff-table-container">
        {/* <button
          className="btn mx-5 mt-5 mb-4 px-4 py-2 add-staff-student"
          onClick={() => setIsStaffFormActive(!isStaffFormActive)}
        >
          {isStaffFormActive ? "Go back" : "Add Staff"}
        </button> */}
        <div className="staff-go-back-button">
          <Button
            text={isStaffFormActive ? "Go back" : "Add Staff"}
            handleClick={() => setIsStaffFormActive(!isStaffFormActive)}
            className="btn"
            icon={
              isStaffFormActive ? <RiLoginCircleFill /> : <RiLogoutCircleFill />
            }
          />
        </div>

        {isStaffFormActive ? (
          <StaffForm
            calssName="d-flex mt-5"
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            value={value}
          />
        ) : (
          <div className="container mt-3">
            <table className="table table-bordered table-success">
              <thead>
                <tr>
                  <th scope="col">S/No.</th>
                  <th scope="col">FullName</th>
                  <th scope="col">Departement</th>
                  <th scope="col">Phone No.</th>
                  <th scope="col">Email</th>
                  <th scope="col">Employement No.</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {staff &&
                  staff?.map((st, i) => (
                    <tr key={st.id}>
                      <th scope="row">{i + 1}</th>
                      <td>{st.fullName}</td>
                      <td>{st.departement}</td>
                      <td>{st.phone}</td>
                      <td>{st.email}</td>
                      <td>{st.employementNo}</td>
                      <td>{st.gender}</td>
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
    </>
  );
};

export default Staff;
