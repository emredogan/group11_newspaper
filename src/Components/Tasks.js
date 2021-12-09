import React from "react";
import CustomButton from "././CustomButton";
import TaskTable from "./TaskTable";

function Tasks() {
  return (
    <>
      <div className="screenContain">
      <div className="placingBtnGeneral">
        <CustomButton path="/journalist/task/create-task" text="NEW TASK" />
      </div>
        <header className="screentitle">
          <h2>Overview of Tasks</h2>
        </header>

        <TaskTable objecttitle="Task"/>
      </div>
    </>
  );
}

export default Tasks;
