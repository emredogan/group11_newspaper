import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Tasks() {
  {/** just testing - should be db data */}
  const tasks = [
    {status: 'Doing', title: "Interview Tiger King", des: "Contact manager og Exotic", section: 'Culture', resp: 'You', deadl: '23.03.20'},
    {status: 'Doing', title: "Console Games", des: "Fifa 2022", section: 'Sports', resp: "You, Michael Barbaro", deadl: '02.10.21'},
    {status: 'Doing', title: "Visit ITU", des: "Visit ITU", section: 'Culture', resp: 'You', deadl: '01.10.21'}
  ]

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
    ) 
  }


  return (
    <div className="tasksContainer">
      {/** button to create task */}
      <Link to="/journalist/task/create-task">
      <button className="toTaskButton"
        variant="primary"
        type="submit"
      >
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
            {tasks.map(renderTask)}
          </tbody>
        </table>

    </div>
    
  );
}

export default Tasks;

