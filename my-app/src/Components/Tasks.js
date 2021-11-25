import React from "react";
import MyButton from "./MyButton";

import { Link } from "react-router-dom";

function Tasks() {
  return (
    <div>
      <Link to="/journalist/task/create-task">
        <MyButton text="create task"></MyButton>
      </Link>
    </div>
  );
}

export default Tasks;
