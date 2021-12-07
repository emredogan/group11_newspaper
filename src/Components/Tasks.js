import React from "react";
import BtnComponent from "././BtnComponent";
import TaskTable from "./TaskTable";

function Tasks() {
  return (
    <>
      <div className="screenContain">
        <BtnComponent path={"/journalist/task/create-task"} text="NEW TASK" />
        <header className="screentitle">
          <h2>Overview of Tasks</h2>
        </header>

        <TaskTable />
      </div>
    </>
  );
}

export default Tasks;
