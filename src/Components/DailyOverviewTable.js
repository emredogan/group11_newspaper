import Parse from "parse";
import React, { useState, useEffect } from "react";

function DailyOverviewTable({objectName}) {
  const [items, setItem] = useState([]);

  const renderItem = (object, index) => {
    if (objectName === "Task")
      return (
        <tr key={index}>
          <td>{object.get("status")}</td>
          <td>{object.get("title")}</td>
          <td>{object.get("description")}</td>
          <td>{object.get("section")}</td>
          <td>{object.get("responsible")}</td>
          <td>{object.get("taskload")}</td>
          <td>{object.get("date")}</td>
        </tr>
      );

  };
 
  // The new Date() constructor creates a new date instance that contains the following methods to construct the full date.
  // getDate() method: It returns the day of the month.
  // then I compare the date to the date in the DB
  useEffect(() => {
    const object = Parse.Object.extend(`${objectName}`);
    const query = new Parse.Query(object);
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    query.equalTo("date", date);
    query.find().then((result) => {
      console.log(result);
      setItem(result);
    });
    console.log("Current date is " + date);
  }, []);

  if (objectName === "Task") {
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
              <th scope="col">Task Load</th>
              <th scope="col">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {/** loop and present all tasks */}
            {items.map(renderItem)}
          </tbody>
        </table>
      </div>
    );
  }
  
}

export default DailyOverviewTable;

