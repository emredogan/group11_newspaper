import React from "react";
import { Form, Container, Button } from "react-bootstrap";

export default function ResponsibleForm(props) {
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
        <Button
          className="resbutton"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingInline: "0px",
            background: "#FFF",
            color: "#1C1C1C",
            borderColor: "#1C1C1C",
            borderRadius: "20px",
            border: "solid 2px",
            fontSize: "1.5rem",
            height: "1.5rem",
            width: "1.5rem",
          }}
        >
        +
        </Button>
      </Container>
    </Form.Group>
  );
}
