import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function TitleForm({ text }) {
  const [title, setTitle] = useState();

  console.log(title);

  return (
    <Form>
          <Form.Group className="formpart" controlId="formControlTextarea">
            <Form.Label>{ text }</Form.Label>
            <Form.Control
              placeholder = "Enter Title"
              as="textarea" /** as brings the style of textarea */
              rows={1}
              onChange={(e) => setTitle(e.target.value)}
            />{" "}
          </Form.Group>
    </Form>
  );
}
