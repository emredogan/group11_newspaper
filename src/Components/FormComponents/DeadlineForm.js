import React from 'react';
import { Form } from 'react-bootstrap';

function DeadlineForm(props) {
  return (
    <Form.Group className="formpart" controlId="formDate">
      <Form.Label>Deadline</Form.Label>
      <Form.Control type="date" onChange={(e) => props.setDate(e.target.value.split("-").reverse().join("/"))} />
    </Form.Group>
  );
};

export default DeadlineForm;
