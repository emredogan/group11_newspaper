import { useState } from "react";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";
import Parse from "parse";
import TitleForm from "../Components/FormComponents/TitleForm";
import DescriptionForm from "./FormComponents/DescriptionForm";
import SelectStatusForm from "./FormComponents/SelectStatusForm";
import SelectSectionForm from "./FormComponents/SelectSectionForm";
import DeadlineForm from "./FormComponents/DeadlineForm";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import OverviewTable from "./OverviewTable";
import TaskLoadForm from "./FormComponents/TaskLoadForm";

import { useNavigate} from "react-router-dom";

function CreateTask() {
  const navigate = useNavigate();

  /** Hold error information for each forms field */
  const [formErrors, setFormErrors] = useState({});

  /** Kepping track of the forms input */
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    status: "",
    section: "",
    taskload: "",
    date: ""
  }); 

  /** Check the data from forms */
  const isFormValid = () => {
    console.log("validating form...")

    const errors = {};

    if(!formValues.title) {
      errors.title = "Title is required";
    }

    if(!formValues.description) {
      errors.description = "Description is required";
    }

    if(!formValues.status) {
      errors.status = "Status is required";
    }

    if(!formValues.section) {
      errors.section = "Section is required";
    }

    if(!formValues.taskload) {
      errors.taskload = "Taskload is required";
    }

    if(!formValues.date) {
      errors.date = "Date is required";
    }

    setFormErrors(errors);

    console.log(errors);

    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      return false;
    }

  }

  const handleSubmit = (e) => {
      e.preventDefault()
 
     if (isFormValid(formValues)) {
       handleUpload(e);
     } 
  }

  async function handleUpload(e) {
    e.preventDefault();
    console.log("prevented default");

    const Task = Parse.Object.extend("Task");
    const newTask = new Task();
    newTask.set("title", formValues.title);
    newTask.set("description", formValues.description);
    newTask.set("status", formValues.status);
    newTask.set("responsible", "You");
    newTask.set("date", formValues.date.split("-").reverse().join("/"));
    newTask.set("section", formValues.section);
    newTask.set("taskload", formValues.taskload);

    try {
      await newTask.save();
      alert("succes");
      navigate("/journalist/task");
    } catch (error) {
      alert(error);
    }

  }

  /** updates the state of values, inserts the key value pair of form name and form value*/
  const handleChange = (event) => {

     setFormValues((values) => ({
       ...values,
       [event.target.name]: event.target.value,
     }));

     console.log(formValues);
   };

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
        <Form className="formcontainer" onSubmit={handleSubmit}>
          <Row className="upperrow">
            <Col lg="4">
              <TitleForm
                text="Task Title"
                innertext="Enter Title"
                title="title"
                type="text"
                value={formValues.title}
                handleChange={handleChange}
                formErrors={formErrors}
                required
              />
            </Col>
            <Col lg="4">
              <DescriptionForm
                text="Task Description"
                innertext="Enter Description"
                description="description"
                type="text"
                value={formValues.description}
                handleChange={handleChange}
                formErrors={formErrors}
                required
              />
            </Col>
            <Col lg="4">
              <SelectStatusForm 
                status="status"
                value={formValues.status}
                handleChange={handleChange}
                formErrors={formErrors}
                required
               />
            </Col>
          </Row>
          <Row className="lowerrow">
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
              <TaskLoadForm 
              taskload="taskload"
              value={formValues.taskload}
              handleChange={handleChange}
              formErrors={formErrors}
              required
              />
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
        <OverviewTable objectName="Task" /> 
      </div>
    </>
  );
};

export default CreateTask;
