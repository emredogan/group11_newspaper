import React, { useState } from "react";
import Parse from "parse";
import { Form, Row, Col, Button } from "react-bootstrap";
import SelectSectionForm from "./FormComponents/SelectSectionForm";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import DescriptionForm from "./FormComponents/DescriptionForm";
import TitleForm from "./FormComponents/TitleForm";
import TaskTable from "./TaskTable";
import ResponsibleForm from "./FormComponents/ResponsibleForm";
import DeadlineForm from "./FormComponents/DeadlineForm";

export default function CreateArticleIdea() {
  {
    /** Same logic as with CreateTask */
  }
  const [title, setTitle] = useState();
  const [responsible, setResponsible] = useState();
  const [assigned, setAssigned] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [section, setSection] = useState();

  async function handleUpload(e) {
    e.preventDefault();
    console.log("prevented default");
    console.log(title);
    console.log(responsible);
    console.log(description);
    console.log(date);
    console.log(section);

    {
      /** db logik - "Idea" instead of "Task"? */
    }
    const Idea = Parse.Object.extend("Idea");
    const newIdea = new Idea();
    newIdea.set("title", title);
    newIdea.set("responsible", "You");
    newIdea.set("assigned", assigned);
    newIdea.set("description", description);
    newIdea.set("date", date);
    newIdea.set("section", section);

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
        </Row>
        <Row>
          <Col lg="4">
            <SelectSectionForm setSection={setSection} />
          </Col>
          <Col lg="2">
            <ResponsibleForm title="Responisble" who="You" setResponsible={setResponsible} />
          </Col>
          <Col lg="2">
          <ResponsibleForm title="Assigned to" who="" setResponsible={setAssigned} />
          </Col>
          <Col lg="4">
          <DeadlineForm />
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
