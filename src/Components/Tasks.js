import React from "react";
import TaskBtn from "./TaskBtn";
import TaskTable from "./TaskTable";

function Tasks() {

  return (
    <div className="tasksContainer">
      {/** button to create task */}
      <TaskBtn />
      <TaskTable />

    </div>
  );
}

export default Tasks;
