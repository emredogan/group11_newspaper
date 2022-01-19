import React from "react";
import { Form } from 'react-bootstrap';

function SelectStatusForm(props) {
  return (
    <Form.Group className="formpart" controlId="formStatusSelection">
      <Form.Label>Status</Form.Label>
      <Form.Group>
        {" "}
        {/** right approach? */}
        <Form.Select
          defaultValue="Select"
          //onChange={(e) => props.setStatus(e.target.value)}
          onChange={props.handleChange}
          name={props.status}
          //type={props.type}
        >
          <option>Select</option>
          <option>to Do</option>
          <option>Doing</option>
          <option>Done</option>
        </Form.Select>
        {props.formErrors.status && (
              <p className="text-danger">{props.formErrors.status}</p>)}
      </Form.Group>
    </Form.Group>
  );
};

export default SelectStatusForm;
