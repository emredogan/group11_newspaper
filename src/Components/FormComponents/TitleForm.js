import React from "react";
import { Form } from "react-bootstrap";

function TitleForm(props){
  return (
    <Form>
          <Form.Group className="formpart" controlId="formControlTextarea">
            <Form.Label>{props.text}</Form.Label>
            <Form.Control
              placeholder={props.innertext}
              onChange={props.handleChange}
              name={props.title}
              type={props.type}
            />{""}
            {/** if title is in errorForms, present its error message */}
            {props.formErrors.title && (
              <p className="text-danger">{props.formErrors.title}</p>)}

          </Form.Group>
    </Form>
  );
};

export default TitleForm;
