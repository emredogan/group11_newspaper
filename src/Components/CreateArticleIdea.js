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

  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    taskload: "",
    section: "",
    date: ""
  }); 


  const handleSubmit = (e) => {
    e.preventDefault()

    if (validate(formValues)) {
      handleUpload(e);
    } 

   // console.log(Object.values(values))
  }

  async function handleUpload(e) {
    e.preventDefault();
    console.log("prevented default");

    //console.log(Object.values(formValues))

    const Idea = Parse.Object.extend("Idea");
    const newIdea = new Idea();
    newIdea.set("title", formValues.title);
    newIdea.set("description", formValues.description);
    newIdea.set("taskload", formValues.taskload);
    newIdea.set("section", formValues.section);
    newIdea.set("date", formValues.date.split("-").reverse().join("/"));

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
     setFormValues((values) => ({
       ...values,
       [event.target.name]: event.target.value,
     }));
   };

   const validate = () => {
    console.log("validating form...")

    const errors = {};

    if(!formValues.title) { //if "" is true
      errors.title = "Title is required";
    }

    if(!formValues.description) {
      errors.description = "Description is required";
    }

    if(!formValues.taskload) {
      errors.taskload = "Taskload is required";
    }

    if(!formValues.section) {
      errors.section = "Section is required";
    }

    if(!formValues.date) {
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
              value={formValues.title}
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
              value={formValues.description}
              handleChange={handleChange}
              formErrors={formErrors}
              required
            />
          </Col>
          <Col lg="4">
            <TaskLoadForm 
            taskload="taskload"
            value={formValues.taskload}
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
            value={formValues.section}
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
            value={formValues.date}
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
