import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Parse from "parse";
// import { useNavigate } from "react-router";
import { useNavigate } from "react-router";

import Translation from "./Translation";

function generateUID() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

export function Upload() {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [imageFile, setImageFIle] = useState();
  const [translations, setTranslations] = useState([
    { id: generateUID(), to: "", from: "" },
  ]);
  const [imageFile, setImageFile] = useState();
  const navigate = useNavigate();

  async function handleUpload(e) {
    e.preventDefault();
    const Image = Parse.Object.extend("Image");
    const newImage = new Image();
    const file = new Parse.File(imageFile.name, imageFile);
    newImage.set("file", file);

    const Translation = Parse.Object.extend("Translation");
    const newTranslation = new Translation();
    newTranslation.set("from", from);
    newTranslation.set("to", to);
    newTranslation.set("user", Parse.User.current());
    await Promise.all(
      translations.map((translation) => {
        const Translation = Parse.Object.extend("Translation");
        const newTranslation = new Translation();
        newTranslation.set("from", translation.from);
        newTranslation.set("to", translation.to);
        newTranslation.set("user", Parse.User.current());
        newTranslation.set("image", newImage);

    newTranslation.set("image", newImage);
        try {
          return newTranslation.save();
        } catch (error) {
          alert(error);
        }
      })
    );

    try {
      await newTranslation.save();
    } catch (error) {
      alert(error);
    }
    navigate("/myimages");
  }

  function handleFileUpload(e) {
    console.log(e.target);
    console.dir(e.target);
    console.log(e.target.files[0]);
    console.log(e.target.result);
    setImageFile(e.target.files[0]);
  }

  function addNewTranslation() {
    setTranslations([...translations, { id: generateUID(), to: "", from: "" }]);
  }

  function setFrom(translation, newValue) {
    const updatedList = translations.map((t) =>
      t.id != translation.id
        ? t
        : { id: translation.id, from: newValue, to: translation.to }
    );

    setTranslations(updatedList);
  }

  function setTo(translation, newValue) {
    const updatedList = translations.map((t) =>
      t.id != translation.id
        ? t
        : { id: translation.id, from: translation.from, to: newValue }
    );
    setTranslations(updatedList);
  }

    setImageFIle(e.target.files[0]);
  function deleteTranslation(translation) {
    setTranslations(translations.filter((t) => t.id != translation.id));
  }

  return (
    <>
      {imageFile && (
        <img
          style={{ maxWidth: "400px" }}
          src={URL.createObjectURL(imageFile)}
        />
      )}

      <Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Select an image from your computer</Form.Label>
          <Form.Control onChange={handleFileUpload} type="file" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Word</Form.Label>
          <Form.Control type="text" onChange={(e) => setFrom(e.target.value)} />
        </Form.Group>
        {translations.map((translation) => (
          <Translation
            key={translation.id}
            translation={translation}
            setFrom={setFrom}
            setTo={setTo}
            deleteTranslation={deleteTranslation}
          />
        ))}

        <Form.Group className="mb-3" controlId="formBasicTranslation">
          <Form.Label>Translation</Form.Label>
          <Form.Control type="text" onChange={(e) => setTo(e.target.value)} />
        </Form.Group>
        <Button onClick={handleUpload} variant="primary" type="submit"/>
        <Button onClick={addNewTranslation} variant="light">
          Add new translation
        </Button>
        <br />
        <br />

        <Button
          onClick={handleUpload}
          disabled={!imageFile}
          variant="primary"
          type="submit"
        >
          Upload
        </Button>
      </Form>
    </>
  );
}