// import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "../../../components/button/Button";

const AddStudentForm = ({ value, handleOnChange, handleOnSubmit }) => {
  return (
    <>
      <div className="container px-5 py-5">
        <Form
          className="form form-container bg-success p-5"
          onSubmit={handleOnSubmit}
        >
          <h5 className="text-center text-light mb-4 ">
            Please Fill Up the Form with Correct Details
          </h5>
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
                placeholder="Branch"
                name="branch"
                value={value.branch}
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

          <Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>USN Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Usn"
                name="usn"
                value={value.usn}
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label>Batch Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Batch Number"
                name="batch"
                value={value.batch}
                onChange={handleOnChange}
              />
            </Form.Group>
          </Row>

          <Button text="Submit" className="btn-danger" />
          {/* <Button
            className="btn btn-danger px-4 mt-3 student-Submit-btn"
            variant="primary"
            type="submit"
          >
            Submit
          </Button> */}
        </Form>
      </div>
    </>
  );
};

export default AddStudentForm;
