import { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
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
  const [title, setTitle] = useState();
  const [responsible, setResponsible] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [section, setSection] = useState();
  const [taskload, setTaskLoad] = useState();
  const [status, setStatus] = useState();

  async function handleUpload(e) {
    e.preventDefault();
    console.log("prevented default");

    console.log(responsible);
    console.log(description);
    console.log(date);
    console.log(section);
    console.log(taskload);
    console.log(status);

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
    newTask.set("title", title);
    newTask.set("responsible", "You");
    newTask.set("description", description);
    newTask.set("date", date);
    newTask.set("section", section);
    newTask.set("taskload", taskload);
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
              {/* <ResponsibleForm
                title="Responsible"
                who="You"
                setResponsible={setResponsible}
              /> */}
              <TaskLoadForm setTaskLoad={setTaskLoad} />
            </Col>
            <Col lg="4">
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
        <OverviewTable objectName="Task" />
      </div>
    </>
  );
};

export default CreateTask;
