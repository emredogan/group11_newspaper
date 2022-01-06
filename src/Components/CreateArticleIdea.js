import React, { useState } from "react";
import Parse from "parse";
import { Form, Row, Col, Button } from "react-bootstrap";
import SelectSectionForm from "./FormComponents/SelectSectionForm";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import DescriptionForm from "./FormComponents/DescriptionForm";
import TitleForm from "./FormComponents/TitleForm";
import DeadlineForm from "./FormComponents/DeadlineForm";
import OverviewTable from "./OverviewTable";
import TaskLoadForm from "./FormComponents/TaskLoadForm";

export default function CreateArticleIdea() {
  {
    /** Same logic as with CreateTask */
  }
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [createdby, setCreatedBy] = useState();
  const [assignedto, setAssignedTo] = useState();
  const [section, setSection] = useState();
  const [taskload, setTaskLoad] = useState();
  const [date, setDate] = useState();

  async function handleUpload(e) {
    e.preventDefault();
    console.log("prevented default");
    console.log(title);
    console.log(description);
    console.log(createdby);
    console.log(assignedto);
    console.log(section);
    console.log(taskload);
    console.log(date);
 

    {
      /** db logik - "Idea" instead of "Task"? */
    }
    const Idea = Parse.Object.extend("Idea");
    const newIdea = new Idea();
    newIdea.set("title", title);
    newIdea.set("description", description);
    newIdea.set("createdby", "You");
    newIdea.set("assignedto", "TBA");
    newIdea.set("section", section);
    newIdea.set("taskload", taskload);
    newIdea.set("date", date);

    try {
      await newIdea.save();
      alert("succes");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
    <Breadcrumb>
    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
    <Breadcrumb.Item active>Account</Breadcrumb.Item>
  </Breadcrumb>
    <div className="screenContain">
      <header className="screentitle">
        <h2>Create Article Idea</h2>
      </header>
      <Form className="formcontainer">
        <Row>
          <Col lg="4">
            <TitleForm
              text="Idea Title"
              innertext="Enter Title"
              setTitle={setTitle}
            />
          </Col>
          <Col lg="4">
            <DescriptionForm
              text="Idea Description"
              innertext="Enter Description"
              setDescription={setDescription}
            />
          </Col>
          <Col lg="4">
            <TaskLoadForm setTaskLoad={setTaskLoad} />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <SelectSectionForm setSection={setSection} />
          </Col>
          <Col lg="2">
          </Col>
          <Col lg="2">
          </Col>
          <Col lg="4">
          <DeadlineForm setDate={setDate}/>
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
        <OverviewTable />
    </div>
    </>
  );
}
