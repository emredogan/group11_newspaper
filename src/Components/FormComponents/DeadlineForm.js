import React from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';


export default function DeadlineForm(props) {
  return (
    <Form.Group className="formpart" controlId="formDate">
      <Form.Label>Deadline</Form.Label>
      <Form.Control type="date" formControlName="endDate" value="{{ post.endDate | date:'yyyy-MM-dd' }}" onChange={(e) => props.setDate(e.target.value)} />
    </Form.Group>
  );
}
