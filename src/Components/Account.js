import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Parse from "parse";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function Account() {
  const [username, setUsername] = useState("");
  const [date, setDate] = useState();

  useEffect(() => {
    async function getCurrentUser() {
      if (username === "") {
        const currentUser = await Parse.User.currentAsync();
        if (currentUser !== null) {
          setUsername(currentUser.getUsername());
        }
        const sick = Parse.Object.extend("sick");
        const newSickLeave = new sick();
        newSickLeave.set("date", date);
      }
    }
    getCurrentUser();
  }, [username, date]);

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
          <Button variant="primary" type="submit">
          UPDATE
        </Button>
        <Button variant="primary" type="submit">
          DELETE
        </Button>
        </div>
      </Form>
    </>
  );
}

export default Account;
