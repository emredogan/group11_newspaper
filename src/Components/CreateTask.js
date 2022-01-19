import { useState } from "react";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";
import Parse from "parse";
import TitleForm from "../Components/FormComponents/TitleForm";
import DescriptionForm from "./FormComponents/DescriptionForm";
import SelectStatusForm from "./FormComponents/SelectStatusForm";
import SelectSectionForm from "./FormComponents/SelectSectionForm";
import ResponsibleForm from "./FormComponents/ResponsibleForm";
import DeadlineForm from "./FormComponents/DeadlineForm";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import OverviewTable from "./OverviewTable";
import TaskLoadForm from "./FormComponents/TaskLoadForm";

export function CreateTask() {
  //const [title, setTitle] = useState();
  //const [description, setDescription] = useState();
  const [responsible, setResponsible] = useState();
  const [date, setDate] = useState();
  //const [section, setSection] = useState();
  //const [taskload, setTaskLoad] = useState();
  //const [status, setStatus] = useState();

  /** Kepping track of the forms input */
  const [values, setValues] = useState({
    title: "",
    description: "",
    status: "",
    section: "",
    taskload: "",
    date: ""
  }); 

  /** Hold error information for each forms field */
  const [formErrors, setFormErrors] = useState({});

  /**  */
  const [showMessage, setShowMessage] = useState(false);

  /** Check the data from forms */
  const validate = () => {
    console.log("validating form...")

    //local list of errors
    const errors = {};

    //if no title, add error
    if(!values.title) {
      errors.title = "Title is required";
    }

    if(!values.description) {
      errors.description = "Description is required";
    }

    if(!values.status) {
      errors.status = "Status is required";
    }

    if(!values.section) {
      errors.section = "Section is required";
    }

    if(!values.taskload) {
      errors.taskload = "Taskload is required";
    }

    if(!values.date) {
      errors.date = "Date is required";
    }

    //set state of formerror 
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
 
     if (validate(values)) {
       setShowMessage(true);
       handleUpload(e);
     } else {
       setShowMessage(false);
     }
   }

  async function handleUpload(e) {
    e.preventDefault();
    console.log("prevented default");

    console.log(responsible); //current.user? 
    console.log(values.title);
    console.log(values.description);
    console.log(values.status);
    console.log(values.section);
    console.log(values.taskload);
    console.log(values.date.split("-").reverse().join("/"));



    // // REST API CALL POST
    // const postData = {
    //   title: "mir3_rest",
    //   description: "secret_rest",
    // };

    // try {
    //   // const response = await fetch("https://parseapi.back4app.com/users/, if you want to post a user use this one.
    //   const response = await fetch(
    //     "https://parseapi.back4app.com/classes/Task/",

    //     {
    //       method: "POST",
    //       headers: {
    //         "X-Parse-Application-Id":
    //           "oHPQf2X0grpeXteCxywdMAvZ6BaV3lj1o3SUJ4pJ",
    //         "X-Parse-REST-API-Key": "Fsl5RGfjEbhMPls5RMprv43ojWEboqwT2I4xmapo",
    //       },
    //       body: JSON.stringify(postData),
    //     }
    //   );
    //   if (!response.ok) {
    //     const message = "Error with Status Code: " + response.status;
    //     throw new Error(message);
    //   }
    //   const data = await response.json();
    //   console.log(data);
    // } catch (error) {
    //   console.log("Error: " + error);
    // }

    //   // REST API CALL GET
    // const rawResponse = await fetch(
    //   "https://parseapi.back4app.com/classes/Task",
    //   {
    //     method: "GET",
    //     headers: {
    //       "X-Parse-Application-Id": "oHPQf2X0grpeXteCxywdMAvZ6BaV3lj1o3SUJ4pJ",
    //       "X-Parse-REST-API-Key": "Fsl5RGfjEbhMPls5RMprv43ojWEboqwT2I4xmapo",
    //     },
    //   }
    // );
    // const content = await rawResponse.json();
    // console.log("GET", content);

    // // REST API CALL GET

    const Task = Parse.Object.extend("Task");
    const newTask = new Task();
    newTask.set("title", values.title);
    newTask.set("description", values.description);
    newTask.set("status", values.status);
    newTask.set("responsible", "You");
    newTask.set("date", values.date);
    newTask.set("section", values.section);
    newTask.set("taskload", values.taskload);

    try {
      await newTask.save();
      alert("succes");
    } catch (error) {
      alert(error);
    }
  }

  const handleChange = (event) => {
    //this console.log message should be removed once you've tested the event works 
    console.log(
       "handleChange -> " + event.target.name + " : " + event.target.value
     );
     //this is the important bit
     setValues((values) => ({
       ...values,
       [event.target.name]: event.target.value,
     }));

     console.log(values);
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
                //setTitle={setTitle}
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
                text="Task Description"
                innertext="Enter Description"
                //setDescription={setDescription}
                description="description"
                type="text"
                value={values.description}
                handleChange={handleChange}
                formErrors={formErrors}
                required
              />
            </Col>
            <Col lg="4">
              <SelectStatusForm 
                //setStatus={setStatus}
                status="status"
                //type="text"
                value={values.status}
                handleChange={handleChange}
                formErrors={formErrors}
                required
               />
            </Col>
          </Row>
          <Row className="lowerrow">
            <Col lg="4">
              <SelectSectionForm 
              //setSection={setSection} 
              section="section"
              value={values.section}
              handleChange={handleChange}
              formErrors={formErrors}
              required
            />
            </Col>
            <Col lg="4">
              <TaskLoadForm 
              //setTaskLoad={setTaskLoad} 
              taskload="taskload"
              value={values.taskload}
              handleChange={handleChange}
              formErrors={formErrors}
              required
              />
            </Col>
            <Col lg="4">
              <DeadlineForm 
              //setDate={setDate} 
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
        <OverviewTable objectName="Task" /> 
      </div>
    </>
  );
};

export default CreateTask;
