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
import { useNavigate } from "react-router";

function CreateArticleIdea() {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const [values, setValues] = useState({
    title: "",
    description: "",
    taskload: "",
    section: "",
    date: ""
  }); 


  const handleSubmit = (e) => {
    e.preventDefault()

    if (validate(values)) {
      handleUpload(e);
    } 

   // console.log(Object.values(values))
  }

  async function handleUpload(e) {
    e.preventDefault();
    console.log("prevented default");

    console.log(Object.values(values))

    const Idea = Parse.Object.extend("Idea");
    const newIdea = new Idea();
    newIdea.set("title", values.title);
    newIdea.set("description", values.description);
    newIdea.set("taskload", values.taskload);
    newIdea.set("section", values.section);
    newIdea.set("date", values.date);

    newIdea.set("createdby", "You");
    newIdea.set("assignedto", "TBA");


    try {
      await newIdea.save();
      alert("succes");
      navigate("/journalist/article-ideas");
    } catch (error) {
      alert(error);
    }
  }

  const handleChange = (event) => {
     setValues((values) => ({
       ...values,
       [event.target.name]: event.target.value,
     }));
   };

   const validate = () => {
    console.log("validating form...")

    const errors = {};

    if(!values.title) { //if "" is true
      errors.title = "Title is required";
    }

    if(!values.description) {
      errors.description = "Description is required";
    }

    if(!values.taskload) {
      errors.taskload = "Taskload is required";
    }

    if(!values.section) {
      errors.section = "Section is required";
    }

    if(!values.date) {
      errors.date = "Date is required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/journalist/article-ideas">Article Ideas</Breadcrumb.Item>
        <Breadcrumb.Item active>Create Article Idea</Breadcrumb.Item>
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
              title="title"
              type="text"
              value={values.title}
              handleChange={handleChange}
              formErrors={formErrors}
              required
            />
          </Col>
          <Col lg="4">
            <DescriptionForm
              text="Idea Description"
              innertext="Enter Description"
              description="description"
              type="text"
              value={values.description}
              handleChange={handleChange}
              formErrors={formErrors}
              required
            />
          </Col>
          <Col lg="4">
            <TaskLoadForm 
            taskload="taskload"
            value={values.taskload}
            handleChange={handleChange}
            formErrors={formErrors}
            required
          />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <SelectSectionForm
            section="section"
            value={values.section}
            handleChange={handleChange}
            formErrors={formErrors}
            required
          />
          </Col>
          <Col lg="4">
          </Col>
          <Col lg="4">
            <DeadlineForm
            date="date"
            value={values.date}
            handleChange={handleChange}
            formErrors={formErrors}
            required
          />
          </Col>
        </Row>
        <div className="placingSubmitBtn">
            <Button 
              className="toButton" 
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              SAVE
            </Button>
          </div>

        </Form>
        <OverviewTable objectName="Idea" />
    </div>
    </>
  );
};

export default CreateArticleIdea;
