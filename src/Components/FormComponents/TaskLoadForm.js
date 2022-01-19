import React from "react";
import { Form } from "react-bootstrap";

function TaskLoadForm(props) {
  return (
    <Form.Group className="formpart" controlId="formTaskLoad">
      <Form.Label>Task Load</Form.Label>
      <Form.Group>
        <Form.Select
          defaultValue="Select"
          //onChange={(e) => props.setTaskLoad(e.target.value)}
          onChange={props.handleChange}
          name={props.taskload}
        >
          <option>Select</option>
          <option>1/4</option>
          <option>2/4</option>
          <option>3/4</option>
          <option>4/4</option>
        </Form.Select>
        {props.formErrors.taskload && (
              <p className="text-danger">{props.formErrors.taskload}</p>)}
      </Form.Group>
    </Form.Group>
  );
};

export default TaskLoadForm;
