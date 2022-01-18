import React from "react";
import OverviewTable from "./OverviewTable";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import CustomButton from './CustomButton';

function Tasks() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Tasks</Breadcrumb.Item>
      </Breadcrumb>
      <div className="placingBtnGeneral">
                <CustomButton path="/journalist/task/create-task" text="NEW TASK" />
            </div>

      <div className="screenContain">
        <header className="screentitle">
          <h2>Overview of Tasks</h2>
        </header>
        <OverviewTable objectName="Task" />
      </div>
    </>
  );
}

export default Tasks;
