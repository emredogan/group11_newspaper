import { Form, Button } from "react-bootstrap";
import { NarrowSpace } from "./Upload.sc";
export default function Translation({
  translation,
  setFrom,
  setTo,
  deleteTranslation,
}) {
  console.log(translation.id);
  console.log(translation.from);
  console.log(translation.to);

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

        <NarrowSpace />

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