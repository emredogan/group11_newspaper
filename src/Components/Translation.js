import { Form, Button } from "react-bootstrap";

export default function Translation({
  translation,
  setFrom,
  setTo,
  deleteTranslation,
}) {
  
  console.log(translation.id);
  console.log(translation.from);
  console.log(translation.to);
  const API_KEY = "AIzaSyCIaNmgZjvUPNlj7xISIcKqB8KsGGLf6ZU"
  function automaticTranslation(e) {
    e.preventDefault();
  
  let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
  url += `&format=text&source?da&target=en&q${encodeURIComponent(
    translation.form
  )}`;

  fetch(url).then((response) => {
    response.json().then((result)=>{
    console.log(result);
    const translated_string=result.data.translations[0].translatedText;
    setTo(translation,translated_string)});
  });
}

  return (
    <>
      <div style={{ display: "flex" }}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Word</Form.Label>
          <Form.Control
            autoFocus
            value={translation.from}
            type="text"
            onChange={(e) => setFrom(translation, e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTranslation">
          <Form.Label>Translation</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setTo(translation, e.target.value)}
          />
        </Form.Group>

        <Button
          tabIndex="-1"
          onClick={(e) => deleteTranslation(translation)}
          variant="link"
        >
          x
        </Button>
      </div>
    </>
  );
}