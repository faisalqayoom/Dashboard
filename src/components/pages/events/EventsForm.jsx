import React from "react";
import { useForm } from "react-hook-form";
// import { Form, Button } from "semantic-ui-react";
import Button from "react-bootstrap/Button";
import "./Events.scss";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const EventsForm = ({ handleOnSubmit, event }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    handleOnSubmit(data, e);
  };
  console.log(errors);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <Form
          className="form form-container bg-success p-5 pb-3 px-3 w-60%"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h5 className="text-center text-light mb-4 ">
            Please Fill Up the Form with Correct Details
          </h5>
          <Row className="mb-3 form-wrapper w-100">
            <Form.Group
              className="form-group"
              as={Col}
              controlId="formGridEmail"
            >
              {/* <Form.Label className="form-label">Event Name</Form.Label> */}
              <Form.Control
                className="form-control m-3"
                type="text"
                placeholder="Enter Event Name"
                name="firstName"
                {...register("eventName", {
                  required: "Event Name is required",
                  maxLength: 20,
                })}
              />
              {errors.eventName && (
                <p className="message">Please check the Event Name</p>
              )}
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              {/* <Form.Label>Event Theme</Form.Label> */}
              <Form.Control
                className="form-control m-3"
                type="text"
                placeholder="Enter Event Theme"
                name="eventTheme"
                {...register("eventTheme", { required: true, maxLength: 10 })}
              />
              {errors.eventSlogan && (
                <p className="message">Please check the Event Slogan</p>
              )}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              {/* <Form.Label>Event Time</Form.Label> */}
              <Form.Control
                className="form-control m-3"
                placeholder="Event Date"
                type="datetime-local"
                name="eventDate"
                {...register("eventDate", {
                  required: true,
                  maxLength: 20,
                })}
              />
              {errors.eventDate && (
                <p className="message">Please check the Event Theme</p>
              )}
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
              {/* <Form.Label>Event Slogan</Form.Label> */}
              <Form.Control
                className="form-control m-3"
                placeholder="Event Slogan"
                name="eventSlogan"
                {...register("eventSlogan", {
                  required: true,
                  // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                })}
              />
              {errors.eventSlogan && (
                <p className="message">Please check the Event Slogan</p>
              )}
            </Form.Group>
          </Row>

          <Button
            className="btn btn-danger px-4 mt-3 student-Submit-btn"
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
      {/* <div className="form-wrapper h-100 d-flex align-items-center justify-content-center">
        <Form onSubmit={handleSubmit(onSubmit)} className="form-class">
          <Form.Field class="form-field">
            <input
              placeholder="First Name"
              type="text"
              {...register("firstName", { required: true, maxLength: 5 })}
            />
            {errors.firstName && (
              <p className="message">Please check the First Name</p>
            )}
          </Form.Field>
          <Form.Field class="form-field">
            <input
              placeholder="Last Name"
              type="text"
              {...register("lastName", { required: true, maxLength: 5 })}
            />
            {errors.lastName && (
              <p className="message">Please check the Last Name</p>
            )}
          </Form.Field>
          <Form.Field class="form-field">
            <input
              placeholder="Email"
              type="email"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.lastName && (
              <p className="message">Please check the Email</p>
            )}
          </Form.Field>
          <Form.Field class="form-field">
            <input
              placeholder="Password"
              type="password"
              {...register("password", {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              })}
            />
            {errors.password && (
              <p className="message">Please check the Password</p>
            )}
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div> */}
    </>
  );
};

export default EventsForm;
