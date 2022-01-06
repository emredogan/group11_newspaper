import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const DailyTasks = () => {
  return (
    <div> 
 <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Notifications</Breadcrumb.Item>
      </Breadcrumb>
      </>
      <header className="welco">
      <h2>Daily Task Load</h2>
    </header>
    </div>
  );
};

export default DailyTasks;
