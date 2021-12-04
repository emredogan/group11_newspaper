import React from "react";
import { Link } from "react-router-dom";

function TaskBtn() {
  return (
    <div className="tasksContainer">
      {/** button to create task */}
      <Link to="/journalist/task/create-task">
        <button className="toTaskButton" variant="primary" type="submit">
          TASK
        </button>
      </Link>
    </div>
  );
}

export default TaskBtn;