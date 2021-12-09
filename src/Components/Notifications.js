import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Notifications = () => {
  return (
    <div> 
 <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Notifications</Breadcrumb.Item>
      </Breadcrumb>
      </>
      <header className="welco">
      <h2>There are no new notifications, you can relax!</h2>
    </header>
    </div>
  );
};

export default Notifications;
