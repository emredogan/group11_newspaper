import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Parse from "parse";

export function CreateTask() {


  console.log("DATE", date);
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
  const [date, setDate] = useState();

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
          <Form.Control type="text" onChange={(e) => setResponsible(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formControlTextarea">
          <Form.Label>Task Description</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(e) => setDescription(e.target.value)} /> {/** as brings the style of textarea */}
        </Form.Group>

        {/** consider making our own? */}
        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Deadline</Form.Label> 
          <Form.Control type="date" onChange={(e) => setDate(e.target.value)} />
        </Form.Group>

        <Button onClick={handleUpload} variant="primary" type="submit">
          Upload
        </Button>

      </Form>
    </>
  );
}

export default CreateTask;