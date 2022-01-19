import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Translation() {
  const [to, setTo] = useState();
  const [from, setFrom] = useState();
  
  const API_KEY = "AIzaSyCIaNmgZjvUPNlj7xISIcKqB8KsGGLf6ZU"

  function automaticTranslation(e) {
    e.preventDefault();

    console.log(from)
    
    let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
    url += `&format=text&source=da&target=en&q=${encodeURIComponent(
      from
    )}`;

    fetch(url).then((response) => {
      response.json().then((result) => {
        console.log(result);
          console.log(from);

        const translated_string = result.data.translations[0].translatedText;
        console.log(translated_string);
        setTo(translated_string)
      });
    });


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