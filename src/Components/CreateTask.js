import { useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import Parse from "parse";
import TitleForm from "../Components/FormComponents/TitleForm";
import TaskTable from "./TaskTable";
import DescriptionForm from "./FormComponents/DescriptionForm";
import SelectStatusForm from "./FormComponents/SelectStatusForm";
import SelectSectionForm from "./FormComponents/SelectSectionForm";
import ResponsibleForm from "./FormComponents/ResponsibleForm";
import DeadlineForm from "./FormComponents/DeadlineForm";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export function CreateTask() {
  const [title, setTitle] = useState();
  const [responsible, setResponsible] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [section, setSection] = useState();
  const [status, setStatus] = useState();

  async function handleUpload(e) {
    e.preventDefault();
    console.log("prevented default");

    console.log(responsible);
    console.log(description);
    console.log(date);
    console.log(section);
    console.log(status);

    const Task = Parse.Object.extend("Task");
    const newTask = new Task();
    newTask.set("title", title);
    newTask.set("responsible", "You");
    newTask.set("description", description);
    newTask.set("date", date);
    newTask.set("section", section);
    newTask.set("status", status);

    try {
      await newTask.save();
      alert("succes");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/journalist/task">Tasks</Breadcrumb.Item>
        <Breadcrumb.Item active>Create Task</Breadcrumb.Item>
      </Breadcrumb>
      <div className="screenContain">
        <header className="screentitle">
          <h2>Create a new Task</h2>
        </header>

        <Form className="formcontainer">
          <Row className="upperrow">
            <Col lg="4">
              <TitleForm
                text="Task Title"
                innertext="Enter Title"
                setTitle={setTitle}
              />
            </Col>
            <Col lg="4">
              <DescriptionForm
                text="Task Description"
                innertext="Enter Description"
                setDescription={setDescription}
              />
            </Col>
            <Col lg="4">
              <SelectStatusForm setStatus={setStatus} />
            </Col>
          </Row>

          <Row className="lowerrow">
            <Col lg="4">
              <SelectSectionForm setSection={setSection} />
            </Col>
            <Col lg="4">
              <ResponsibleForm
                title="Responsible"
                who="You"
                setResponsible={setResponsible}
              />
            </Col>
            {/** consider making our own? */}
            <Col lg="4">
              {/* <Form.Group className="formpart" controlId="formDate">
                <Form.Label>Deadline</Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group> */}
              <DeadlineForm setDate={setDate} />
            </Col>
          </Row>

          <div className="placingSubmitBtn">
            <Button
              className="toButton"
              variant="primary"
              type="submit"
              onClick={handleUpload}
            >
              SAVE
            </Button>
          </div>
        </Form>
        <TaskTable />
      </div>
    </>
  );
}

export default CreateTask;
