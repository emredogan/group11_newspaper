import React from "react";
import CustomButton from "./CustomButton";
import EmployeeTable from "./EmployeeTable";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function Employees() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Employees</Breadcrumb.Item>
      </Breadcrumb>
      <div className="screenContain">
        <div className="placingBtnGeneral">
          <CustomButton path="/journalist/task/create-task" text="NEW EMP." />
        </div>
        <header className="screentitle">
          <h2>Overview of Employees</h2>
        </header>

        <EmployeeTable />
      </div>
    </>
  );
}

export default Employees;
