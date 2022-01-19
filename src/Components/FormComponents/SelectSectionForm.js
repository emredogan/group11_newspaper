import React from "react";
import { Form } from "react-bootstrap";

function SelectSectionForm(props) {
  return (
    <Form.Group className="formpart" controlId="formSectionSelection">
      <Form.Label>Section</Form.Label>
      <Form.Group>
        <Form.Select
          defaultValue="Select"
          //onChange={(e) => props.setSection(e.target.value)}
          onChange={props.handleChange}
          name={props.section}
        >
          <option>Select</option>
          <option>Culture</option>
          <option>Finance</option>
          <option>Politics</option>
          <option>Travel</option>
        </Form.Select>
        {props.formErrors.section && (
              <p className="text-danger">{props.formErrors.section}</p>)}
      </Form.Group>
    </Form.Group>
  );
};

export default SelectSectionForm;

