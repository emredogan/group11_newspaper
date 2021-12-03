import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Parse from "parse";
import React, { useState } from "react";

function Tasks() {
  {
    /** just testing - should be db data */
  }
  const [tasks, setTasks] = useState([]);

  console.log("STARTS GETTING THE OBJECT");

  const task = Parse.Object.extend("Task");
  const query = new Parse.Query(task);
  query.get("Ws4qPsemkG").then(
    (task) => {
      // The object was retrieved successfully.
      console.log(task);
      const status = task.get("status");
      const title = task.get("title");
      const description = task.get("description");
      const section = task.get("section");
      const responsible = task.get("responsible");
      const deadline = task.get("deadline");

      console.log(status);

      setTasks({
        status: status,
        title: title,
        des: description,
        section: section,
        resp: responsible,
        deadl: deadline,
      });
      console.log("Tasks object");

      console.log(tasks);
    },
    (error) => {
      console.log(error);
      // The object was not retrieved successfully.
      // error is a Parse.Error with an error code and message.
    }
  );

  const renderTask = (task, index) => {
    return (
      <tr key={index}>
        <td>{task.status}</td>
        <td>{task.title}</td>
        <td>{task.des}</td>
        <td>{task.section}</td>
        <td>{task.resp}</td>
        <td>{task.deadl}</td>
      </tr>
    );
  };

  return (
    <div className="tasksContainer">
      {/** button to create task */}
      <Link to="/journalist/task/create-task">
        <button className="toTaskButton" variant="primary" type="submit">
          TASK
        </button>
      </Link>

      {/** dynamic table */}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Task Title</th>
            <th scope="col">Task Description</th>
            <th scope="col">Section</th>
            <th scope="col">Responsible</th>
            <th scope="col">Deadline</th>
          </tr>
        </thead>
        <tbody>
          {/** loop and present all tasks */}
          {renderTask(tasks)}
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;
