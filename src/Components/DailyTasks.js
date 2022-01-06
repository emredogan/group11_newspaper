import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Progressbar from './FormComponents/Progress_bar';
import OverviewTable from "./OverviewTable";


const DailyTasks = () => {
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
        <Progressbar margin="0" bgcolor="#387B19" progress='25' height={25} />
        <OverviewTable objectName="Task" />
        </div>
    </div>
  </>
  );
};

export default DailyTasks;
