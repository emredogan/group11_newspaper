import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import OverviewTable from "./OverviewTable";

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
        <OverviewTable objectName="Employee" />
      </div>

    </>
  );
}

export default Employees;
