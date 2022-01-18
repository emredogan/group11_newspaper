import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ProgressBar from './FormComponents/ProgressBar';
import DailyOverviewTable from "./DailyOverviewTable";

function DailyTasks() {
  return (
  <>
    <div> 
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Daily Task Load</Breadcrumb.Item>
      </Breadcrumb>
      <div className="screenContain">
      <header className="screentitle">
          <h2>Daily Task Load</h2>
        </header>
        <ProgressBar 
          bgcolor="#387B19" 
          progress='25' 
          height={25} />
        <DailyOverviewTable objectName="Task" />
        </div>
      </div>
    </>
  );
};

export default DailyTasks;
