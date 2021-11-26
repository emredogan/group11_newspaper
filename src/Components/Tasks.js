import React from "react";
import {Button} from "react-bootstrap";


import { Link } from "react-router-dom";

function Tasks() {
  return (
    <div>
      <Link to="/journalist/task/create-task">
      <Button
            variant="primary"
            type="submit"
          >
            Create task
          </Button>
      </Link>
    </div>
  );
}

export default Tasks;
