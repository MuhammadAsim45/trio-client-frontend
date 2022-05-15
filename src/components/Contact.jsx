import React from "react";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Contact = () => {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h1 className="disp display-1 my-5">Contact Us</h1>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="fs-1">Name</Form.Label>
            <Form.Control type="text" placeholder="Name" className="fs-2" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="fs-1">Email</Form.Label>
            <Form.Control type="email" placeholder="Email" className="fs-2" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label className="fs-1">Subject</Form.Label>
          <Form.Control type="text" placeholder="Subject" className="fs-2" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="fs-1">Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            className="fs-2"
            placeholder="Message"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="login">
          Submit
        </Button>
      </Form>
      <br />
      <br />
      <br />
    </div>
  );
};
