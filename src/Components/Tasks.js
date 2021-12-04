import React from "react";
import TaskBtn from "./TaskBtn";
import TaskTable from "./TaskTable";

function Tasks() {

  return (
    <div className="tasksContain">
        <header className="welcome">
          <h2>
            Overview of Tasks
          </h2>
        </header>
      <TaskBtn />
      <TaskTable />

    </div>
  );
}

export default Tasks;
