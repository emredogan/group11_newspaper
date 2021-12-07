import React from "react";
import CustomButton from "./CustomButton";
import TaskTable from "./TaskTable";

function Tasks() {
  return (
    <>
      <div className="screenContain">
        <CustomButton path={"/journalist/task/create-task"} text="NEW TASK" />
        <header className="screentitle">
          <h2>Overview of Tasks</h2>
        </header>
        <TaskTable />
      </div>
    </>
  );
}

export default Tasks;
