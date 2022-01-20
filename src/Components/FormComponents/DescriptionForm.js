import React from 'react';
import { Form } from 'react-bootstrap';

function DescriptionForm(props) {
    return (
    <Form>
        <Form.Group className="formpart" controlId="formControlTextarea">
          <Form.Label>{ props.text }</Form.Label>
          <Form.Control
            placeholder = { props.innertext }
            as="textarea" /** as brings the style of textarea */
            rows={1}
            type="text"
            //onChange={(e) => props.setDescription(e.target.value)}
            onChange={props.handleChange}
            name={props.description}
            type={props.type}
          />
            {props.formErrors.description && (
              <p className="text-danger">{props.formErrors.description}</p>)}
        </Form.Group>
    </Form>
    )
};
export default DescriptionForm;
