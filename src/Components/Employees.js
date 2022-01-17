import React from "react";
import EmployeeTable from "./EmployeeTable";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function Employees() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/editor">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Employees</Breadcrumb.Item>
      </Breadcrumb>
      <div className="screenContain">
        <header className="screentitle">
          <h2>Overview of Employees</h2>
        </header>

        <EmployeeTable />
      </div>
    </>
  );
}

export default Employees;
