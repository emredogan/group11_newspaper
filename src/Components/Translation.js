import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {translateWordRequest}  from "./../Network"

export default function Translation() {
  const [to, setTo] = useState();
  const [from, setFrom] = useState();
  
  async function automaticTranslation(e) {
    e.preventDefault();

    translateWordRequest(from).then(value => {
    setTo(value)  
  }) 
  }

  return (
    <>
      <div className="translationContainer">
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Word</Form.Label>
          <Form.Control
            autoFocus
            value={from}
            type="text"
            onChange={(e) => setFrom(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTranslation">
          <Form.Label>Translation</Form.Label>
          <Form.Control
            readOnly
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </Form.Group>

        <Button
          className="transButton"
          onClick={automaticTranslation}
        >
          Go!
        </Button>
      </div>
    </>
  );
}