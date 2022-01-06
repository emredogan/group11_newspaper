import Parse from "parse";
import React, { useState, useEffect } from "react";

function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  
  const renderEmployee = (employee, index) => {
    return (
      <tr key={index}>
        <td>{employee.get("name")}</td>
        <td>{employee.get("Role")}</td>
        <td>{employee.get("TaskTitle")}</td>
        <td>{employee.get("TaskDescription")}</td>
        <td>{employee.get("Status")}</td>
        <td style={{ backgroundColor: getColor(employee.get("TaskLoad")), color: "black" }}>{employee.get("TaskLoad")}</td>
        <td>{employee.get("Remaining")}</td>
        <td>{employee.get("Deadline")}</td>
      </tr>
    );
  };

  useEffect(() => {
    const employee = Parse.Object.extend("Employee");
    const query = new Parse.Query(employee);
    query.find().then((result) => {
      console.log(result);
      setEmployees(result);
    });
    console.log("render stuff");
  }, []);

  return (
    /** dynamic table */
    <div class="table-responsive-sm">
      <table class="table">
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
        <tbody>
          {/** loop and present all tasks */}
          {employees.map(renderEmployee)}
        </tbody>
      </table>
    </div>
  );
}

const getColor = (quantity) => {
    var str = quantity + ""
    console.log(quantity + "")
    if (str.charAt(0) === "1") return 'green';
    if (str.charAt(0) === "2") return 'yellow';
    if (str.charAt(0) === "3") return 'yellow';
    if (str.charAt(0) === "4") return 'red';
    return '';
};

export default EmployeeTable;
