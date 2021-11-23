import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function TitleForm({text}) {
const [title, setTitle] = useState();

console.log(title);

    return (
        <Form>
          <Form.Group className="formpart" controlId="formBasicUsername">
          <Form.Label>{text}</Form.Label>
          <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        </Form>
    )
}
