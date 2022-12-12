import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "../../button/Button";
import "./StaffForm.scss";

const StaffForm = ({ handleOnSubmit, handleOnChange, value }) => {
  return (
    <>
      <div className="justify-content-center align-items-center d-flex w-100 staff-form-parent-div">
        <Form
          className="form form-container bg-success "
          onSubmit={handleOnSubmit}
        >
          <div className="row-container">
            <Row className="row-container">
              <Form.Group
                className="form-group-staff"
                as={Col}
                controlId="formGridEmail"
              >
                {/* <Form.Label className="form-label">FullName</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Enter FullName"
                  name="fullName"
                  value={value.fullName}
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                className="form-group-staff"
              >
                {/* <Form.Label>Branch</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Departement"
                  name="departement"
                  value={value.departement}
                  onChange={handleOnChange}
                />
              </Form.Group>
            </Row>
            <Row className="row-container">
              <Form.Group
                as={Col}
                controlId="formGridCity"
                className="form-group-staff"
              >
                {/* <Form.Label>Email</Form.Label> */}
                <Form.Control
                  placeholder="Enter Email"
                  name="email"
                  value={value.email}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                className="form-group"
                controlId="formGridAddress1"
              >
                {/* <Form.Label>Phone Number</Form.Label> */}
                <Form.Control
                  placeholder="9906****"
                  name="phone"
                  value={value.phone}
                  onChange={handleOnChange}
                />
              </Form.Group>
            </Row>

            <Row className="row-container">
              <Form.Group
                as={Col}
                controlId="formGridCity"
                className="form-group-staff"
              >
                {/* <Form.Label>Employement No.</Form.Label> */}
                <Form.Control
                  placeholder="Enter employement No."
                  name="employement"
                  value={value.employement}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                className="form-group"
                controlId="formGridAddress1"
              >
                {/* <Form.Label>Gender</Form.Label> */}
                <Form.Control
                  placeholder="Enter Gender"
                  name="gender"
                  value={value.gender}
                  onChange={handleOnChange}
                />
              </Form.Group>
            </Row>
          </div>

          {/* <Button
            className="btn btn-danger w-40"
            variant="primary"
            type="submit"
          >
            Submit
          </Button> */}
          <div className="staff-form-submit-div">
            <Button text="Submit" className="staff-form-submit-btn" />
          </div>
        </Form>
      </div>
    </>
  );
};

export default StaffForm;
