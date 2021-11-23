import { useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import Parse from "parse";

export function CreateTask() {


  console.log("DATE");
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
      <Container className="container">
      <Form>
      <Row className="upperrow">
        <Col lg="3">
        <Form.Group className="formpart" controlId="formBasicUsername">
          <Form.Label>Task Title</Form.Label>
          <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        </Col>
        
        <Col>
        <Form.Group className="formpart" controlId="formControlTextarea">
          <Form.Label>Task Description</Form.Label>
          <Form.Control as="textarea" rows={1} onChange={(e) => setDescription(e.target.value)} /> {/** as brings the style of textarea */}
        </Form.Group>
        </Col>

        <Col lg="3">
        <Form.Group className="formpart" controlId="formStatusSelection">
        <Form.Label>Status</Form.Label>
          <Form.Group> {/** right approach? */}
          <Form.Select defaultValue="Select Status..">
            <option>Select Status..</option>
            <option>to Do</option>
            <option>Doing</option>
            <option>Done</option>
          </Form.Select>
          </Form.Group>
        </Form.Group>
        </Col>
      </Row>

      <Row className="lowerrow">
        <Col lg="3">
        <Form.Group className="formpart" controlId="formSectionSelection">
          <Form.Label>Section</Form.Label>
          <Form.Group>
          <Form.Select className="mb-4" defaultValue="Select Section..">
            <option>Select Section..</option>
            <option>Culture</option>
            <option>Finance</option>
            <option>Politics</option>
            <option>Travel</option>
          </Form.Select>
          </Form.Group>
        </Form.Group>
        </Col>
        
        <Col>
        <Form.Group className="formpart" controlId="formPlainTextResponsible">
          <Form.Label>Responsible</Form.Label>
          <Container className="row">
            <Form.Control style={{ width: '35px'}} plaintext readOnly defaultValue="You" onChange={(e) => setResponsible(e.target.value)} />
            <Button className="resbutton" style={{ display: "flex", justifyContent: "center",alignItems: "center", paddingInline: "0px", background: "#FFF" , color: "#1C1C1C", borderColor: "#1C1C1C", borderRadius: "20px", border: "solid 2px", fontSize: "1.5rem", height: "1.5rem", width: "1.5rem" }}>
            {/** add button for adding other employees */}
               +
            </Button>
          </Container>
        </Form.Group>
        </Col>

          {/** consider making our own? */}
        <Col lg="3">
        <Form.Group className="formpart" controlId="formDate">
          <Form.Label>Deadline</Form.Label> 
          <Form.Control type="date" onChange={(e) => setDate(e.target.value)} />
        </Form.Group>
        </Col>
      </Row>

      <Button className="uploadbutton" variant="primary" type="submit" onClick={handleUpload}>
          Upload
      </Button>

      </Form>
      </Container>

    </>
  );
}

export default CreateTask;