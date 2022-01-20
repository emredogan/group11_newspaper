import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import OverviewTable from "./OverviewTable";

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

          <div className="number">
            <span> 4/4 </span>
          </div>
          <div className="progress">
            <div className="progress__bar"></div>
          </div>

          <OverviewTable objectName="Task" overview="daily" />
        </div>
      </div>
    </>
  );
}

export default DailyTasks;
