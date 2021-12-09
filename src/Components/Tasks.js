import React from "react";
import CustomButton from "././CustomButton";
import TaskTable from "./TaskTable";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function Tasks() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Tasks</Breadcrumb.Item>
      </Breadcrumb>
      <div className="screenContain">
        <div className="placingBtnGeneral">
          <CustomButton path="/journalist/task/create-task" text="NEW TASK" />
        </div>
        <header className="screentitle">
          <h2>Overview of Tasks</h2>
        </header>

        <TaskTable />
      </div>
    </>
  );
}

export default Tasks;
