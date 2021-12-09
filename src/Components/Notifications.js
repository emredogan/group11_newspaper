import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Notifications = () => {
  return (
    <header className="welcome">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Notifications</Breadcrumb.Item>
      </Breadcrumb>
      <h2>There are no new notifications, you can relax!</h2>
    </header>
  );
};

export default Notifications;
