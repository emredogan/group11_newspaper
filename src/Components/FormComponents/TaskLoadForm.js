import React from "react";
import { Form } from "react-bootstrap";

export default function TaskLoadForm(props) {
  return (
    <Form.Group className="formpart" controlId="formTaskLoad">
      <Form.Label>Task Load</Form.Label>
      <Form.Group>
        <Form.Select
          defaultValue="Select"
          onChange={(e) => props.setTaskLoad(e.target.value)}
        >
          <option>Select</option>
          <option>1/4</option>
          <option>2/4</option>
          <option>3/4</option>
          <option>4/4</option>
        </Form.Select>
      </Form.Group>
    </Form.Group>
  );
}
