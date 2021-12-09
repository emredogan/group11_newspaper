import React from "react";
import { Form } from 'react-bootstrap';

export default function SelectStatusForm(props) {
  return (
    <Form.Group className="formpart" controlId="formStatusSelection">
      <Form.Label>Status</Form.Label>
      <Form.Group>
        {" "}
        {/** right approach? */}
        <Form.Select
          defaultValue="Select"
          onChange={(e) => props.setStatus(e.target.value)}
        >
          <option>Select</option>
          <option>to Do</option>
          <option>Doing</option>
          <option>Done</option>
        </Form.Select>
      </Form.Group>
    </Form.Group>
  );
}
