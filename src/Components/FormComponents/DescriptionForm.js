import React from 'react';
import { Form } from 'react-bootstrap';

export default function DescriptionForm(props) {
    return (
    <Form>
        <Form.Group className="formpart" controlId="formControlTextarea">
          <Form.Label>{ props.text }</Form.Label>
          <Form.Control
            placeholder = { props.innertext }
            as="textarea" /** as brings the style of textarea */
            rows={1}
            onChange={(e) => props.setTitle(e.target.value)}
          />{" "}
        </Form.Group>
    </Form>
    )
}
