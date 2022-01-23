import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Parse from "parse";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function Account() {
  const [username, setUsername] = useState("");
  const [date, setDate] = useState();

  useEffect(() => {
    getCurrentUser();
  }, []);

  function getCurrentUser() {
    setUsername(Parse.User.current().get("username"));
  }

  function setSickLeave(e) {
    e.preventDefault();
    console.log("this works")
    const sickLeave = Parse.Object.extend("sickLeave");
    const newSickLeave = new sickLeave();
    newSickLeave.set("userId", Parse.User.current());
    newSickLeave.set("date", date);
    newSickLeave.save().then((sickLeaveSet) => {
      alert("new sickleave created");
    })
  }

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Account</Breadcrumb.Item>
      </Breadcrumb>
      <Form className="loginForm">
        <div className="form-inner">
          <header className="welc">
            <h2>
              {" "}
              Hi &nbsp;<span> {username} </span> , &nbsp;this is your account.{" "}
            </h2>
          </header>

          <Form.Group className="formpart" controlId="formDate">
            <Form.Label>Register sick leave:</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={(e) => setSickLeave(e)}>
          UPDATE
        </Button>
        <Button variant="primary" type="submit" >
          DELETE
        </Button>
        </div>
      </Form>
    </>
  );
}

export default Account;
