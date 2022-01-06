import React from "react";
import { Form, Container, Button } from "react-bootstrap";

function ResponsibleForm(props) {
  return (
    <Form.Group className="formpart" controlId="formPlainTextResponsible">
      <Form.Label>{props.title}</Form.Label>
      <Container className="row">
        <Form.Control
          style={{ width: "35px" }}
          plaintext
          readOnly
          defaultValue={props.who}
          onChange={(e) => props.setResponsible(e.target.value)}
        />
        <Button className="resbutton">
        +
        </Button>
      </Container>
    </Form.Group>
  );
};

export default ResponsibleForm;
