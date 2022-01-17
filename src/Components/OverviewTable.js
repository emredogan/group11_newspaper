import Parse from "parse";
import React, { useState, useEffect } from "react";

function OverviewTable({objectName}) {
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
          <td style={{ backgroundColor: getColor(object.get("taskload")), color: "white" }}>{object.get("taskload")}</td>
          <td>{object.get("date")}</td>
        </tr>
      );

      if (objectName === "Idea") { // Idea
      return (
        <tr key={index}>
          <td>{object.get("title")}</td>
          <td>{object.get("description")}</td>
          <td>{object.get("createdby")}</td>
          <td>{object.get("assignedto")}</td>
          <td>{object.get("section")}</td>
          <td style={{ backgroundColor: getColor(object.get("taskload")), color: "white" }}>{object.get("taskload")}</td>
          <td>{object.get("date")}</td>
        </tr>
      );
    }
  };
 


  useEffect(() => {
    const object = Parse.Object.extend(`${objectName}`);
    const query = new Parse.Query(object);
    query.find().then((result) => {
      console.log(result);
      setItem(result);
    });
    console.log("render stuff");
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
  else {
    return (
      /** dynamic table */
      <div class="table-responsive-sm">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Idea Title</th>
              <th scope="col">Idea Description</th>
              <th scope="col">Created by</th>
              <th scope="col">Assigned to</th>
              <th scope="col">Section</th>
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

const getColor = (quantity) => {
  var str = quantity + ""
  console.log(quantity + "")
  if (str.charAt(0) === "1") return '#387b19  ';
  if (str.charAt(0) === "2") return '#d79400';
  if (str.charAt(0) === "3") return '#c74900';
  if (str.charAt(0) === "4") return '#9b0000';
  return '';
};

export default OverviewTable;
