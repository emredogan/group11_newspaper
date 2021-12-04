import React from "react";
import { Link } from "react-router-dom";

function TaskBtn() {
  return (
    <div>
      {/** button to create task */}
      <Link to="/journalist/task/create-task">
        <button className="toTaskButton" variant="primary" type="submit">
          NEW  TASK
        </button>
      </Link>
    </div>
  );
}

export default TaskBtn;