import Parse from "parse";
import React, { useState, useEffect } from "react";

function OverviewTable(props) {
  const [byDates, setByDates] = useState([]);

  const getColor = (quantity) => {
  var str = quantity + ""
  //console.log(quantity + "")
    if (str.charAt(0) === "1") return '#387B19';
    if (str.charAt(0) === "2") return '#D79400';
    if (str.charAt(0) === "3") return '#C74900';
    if (str.charAt(0) === "4") return '#9B0000';
  return '';
  };

  const renderItem = (object, index) => {
  if (props.objectName === "Task") {
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
  } else if (props.objectName === "Idea") {
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
  } else {
    return (
      <tr key={index}>
      <td>{object.get("name")}</td>
      <td>{object.get("role")}</td>
      <td>{object.get("title")}</td>
      <td>{object.get("description")}</td>
      <td>{object.get("status")}</td>
      <td style={{ backgroundColor: getColor(object.get("taskload")), color: "white" }}>{object.get("taskload")}</td>
      <td>{object.get("remain")}</td>
      <td>{object.get("date")}</td>
    </tr>
    )
  }
  };

  useEffect(() => {
  const object = Parse.Object.extend(`${props.objectName}`);
  const query = new Parse.Query(object);

  if (props.overview === "daily") {
    const current = new Date().toLocaleDateString('en-GB');
    console.log(current)
    query.equalTo("date", current);
    console.log(current)
  }

  query.find().then((result) => {
    console.log(result);
    try {
      setByDates(result.sort((a,b) =>  a.get("date").split("/").reverse().join("") -  b.get("date").split("/").reverse().join("")));
      console.log(byDates);
    } catch (error) {
      console.log(error)
    }
  });
  console.log("render stuff");
  }, []);

    return (
      <div class="table-responsive-sm">
        <table class="table">
        {props.objectName === "Task" && 
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
        }
        {props.objectName === "Idea"  &&
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
        }
        {props.objectName === "Employee"  &&
          <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col">Task Title</th>
            <th scope="col">Task Description</th>
            <th scope="col">Status</th>
            <th scope="col">Task Load</th>
            <th scope="col">Remaining</th>
            <th scope="col">Deadline</th>
            </tr>
          </thead>
        }
          <tbody>
            {/** loop and present all tasks */}
            {byDates.map(renderItem).reverse()}
          </tbody>
        </table>
      </div>
    );
  }

export default OverviewTable;
