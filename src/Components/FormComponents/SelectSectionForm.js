import React from "react";
import { Form } from "react-bootstrap";

function SelectSectionForm(props) {
  return (
    <Form.Group className="formpart" controlId="formSectionSelection">
      <Form.Label>Section</Form.Label>
      <Form.Group>
        <Form.Select
          defaultValue="Select"
          onChange={(e) => props.setSection(e.target.value)}
        >
          <option>Select</option>
          <option>Culture</option>
          <option>Finance</option>
          <option>Politics</option>
          <option>Travel</option>
        </Form.Select>
      </Form.Group>
    </Form.Group>
  );
};

export default SelectSectionForm;

