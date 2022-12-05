import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const StaffForm = ({ handleOnSubmit, handleOnChange, value }) => {
  return (
    <>
      <div className="container px-5 py-5">
        <Form
          className="form form-container bg-success p-5"
          onSubmit={handleOnSubmit}
        >
          <Row className="mb-3">
            <Form.Group
              className="form-group p-2"
              as={Col}
              controlId="formGridEmail"
            >
              <Form.Label className="form-label">FullName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter FullName"
                name="fullName"
                value={value.fullName}
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Branch</Form.Label>
              <Form.Control
                type="text"
                placeholder="Departement"
                name="departement"
                value={value.departement}
                onChange={handleOnChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Enter Email"
                name="email"
                value={value.email}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                placeholder="9906****"
                name="phone"
                value={value.phone}
                onChange={handleOnChange}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Employement No.</Form.Label>
              <Form.Control
                placeholder="Enter employement No."
                name="employement"
                value={value.employement}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                placeholder="Enter Gender"
                name="gender"
                value={value.gender}
                onChange={handleOnChange}
              />
            </Form.Group>
          </Row>

          <Button
            className="btn btn-danger w-40"
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default StaffForm;
