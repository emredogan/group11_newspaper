import React from "react";
import { Form } from "react-bootstrap";

function TitleForm(props){
  return (
    <Form>
          <Form.Group className="formpart" controlId="formControlTextarea">
            <Form.Label>{props.text}</Form.Label>
            <Form.Control
              placeholder = {props.innertext}
              onChange={(e) => props.setTitle(e.target.value)}
            />{" "}
          </Form.Group>
    </Form>
  );
};

export default TitleForm;
