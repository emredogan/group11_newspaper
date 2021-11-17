import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Parse from "parse";

export function CreateTask() {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


    Parse.initialize(
      "oHPQf2X0grpeXteCxywdMAvZ6BaV3lj1o3SUJ4pJ",
     "wE0CWYnPVC86eVLQAcvOUm37BFhqW6ZBZTcdCL5B",
      "7Tqwx4xkFQ0tZDsoQrsI2nxJdlZxXaSev96e5Dtw")
  
    Parse.serverURL = "https://parseapi.back4app.com/"
  
  
    console.log("STARTING PARSE")
  
    console.log(Parse.applicationId)

  const [title, setTitle] = useState();
  const [responsible, setResponsible] = useState();
  const [description, setDescription] = useState();

  async function handleUpload(e) {
    e.preventDefault();
    console.log("prevented default");

    console.log(title);
    console.log(responsible);
    console.log(description);

    const Task = Parse.Object.extend("Task");
    const newTask = new Task();
    newTask.set("title", title);
    newTask.set("responsible", responsible);
    newTask.set("description", description);


    try {
      const newTaskReference = await newTask.save();
      alert("succes");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTranslation">
          <Form.Label>Responsible</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setResponsible(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formControlTextarea1">
          <Form.Label>
            Task Description
          </Form.Label>
          <Form.Control 
            title="description" rows={5} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
        <Button onClick={handleUpload} variant="primary" type="submit">
          Upload
        </Button>

      </Form>
    </>
  );
}

export default CreateTask;