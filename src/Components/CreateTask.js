import { useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import Parse from "parse";
import TitleForm from "../Components/FormComponents/TitleForm"

export function CreateTask() {

  const [title, setTitle] = useState();
  const [responsible, setResponsible] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();

  async function handleUpload(e) {
    e.preventDefault();
    console.log("prevented default");

    console.log(responsible);
    console.log(description);

    const Task = Parse.Object.extend("Task");
    const newTask = new Task();
    newTask.set("title", title);
    newTask.set("responsible", "You");
    newTask.set("date", date)
    newTask.set("status", "To do")
    newTask.set("section", "Culture")
    newTask.set("description", description);

    try {
      await newTask.save();
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
          <Col>
            <TitleForm text="Task Title" setTitle= {setTitle} />
            </Col>

            <Col>
            <TitleForm text="Task Description" setTitle= {setDescription} />

            </Col>

            <Col lg="3">
              <Form.Group className="formpart" controlId="formStatusSelection">
                <Form.Label>Status</Form.Label>
                <Form.Group>
                  {" "}
                  {/** right approach? */}
                  <Form.Select defaultValue="Select">
                    <option>Select</option>
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
                  <Form.Select className="mb-4" defaultValue="Select">
                    <option>Select</option>
                    <option>Culture</option>
                    <option>Finance</option>
                    <option>Politics</option>
                    <option>Travel</option>
                  </Form.Select>
                </Form.Group>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group
                className="formpart"
                controlId="formPlainTextResponsible"
              >
                <Form.Label>Responsible</Form.Label>
                <Container className="row">
                  <Form.Control
                    style={{ width: "35px" }}
                    plaintext
                    readOnly
                    defaultValue="You"
                    onChange={(e) => setResponsible(e.target.value)}
                  />
                  <Button
                    className="resbutton"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingInline: "0px",
                      background: "#FFF",
                      color: "#1C1C1C",
                      borderColor: "#1C1C1C",
                      borderRadius: "20px",
                      border: "solid 2px",
                      fontSize: "1.5rem",
                      height: "1.5rem",
                      width: "1.5rem",
                    }}
                  >
                    {/** add button for adding other employees */}+
                  </Button>
                </Container>
              </Form.Group>
            </Col>

            {/** consider making our own? */}
            <Col lg="3">
              <Form.Group className="formpart" controlId="formDate">
                <Form.Label>Deadline</Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Button
            className="uploadbutton"
            variant="primary"
            type="submit"
            onClick={handleUpload}
          >
            Upload
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default CreateTask;
