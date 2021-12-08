import Parse from "parse";
import React, { useState, useEffect } from "react";

function TaskTable(props) {
    const [tasks, setTasks] = useState([]);
  
    console.log("STARTS GETTING THE OBJECT");
  
    const task = Parse.Object.extend(props.objecttitle);
    const query = new Parse.Query(task);
  
    const renderTask = (task, index) => {
      return (
        <tr key={index}>
          <td>{task.get("status")}</td>
          <td>{task.get("title")}</td>
          <td>{task.get("description")}</td>
          <td>{task.get("section")}</td>
          <td>{task.get("responsible")}</td>
          <td>{task.get("deadline")}</td>
        </tr>
      );
    };
  
    useEffect(() => {
      const task = Parse.Object.extend("Task");
  
  const query = new Parse.Query(task);
  
  query.find().then( (result) => {
  
  console.log(result);
  setTasks(result)
  });
      console.log('render stuff')
    },[])
  
    return (
      

        /** dynamic table */
      <div class="table-responsive-sm">
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
  
  export default TaskTable;
  