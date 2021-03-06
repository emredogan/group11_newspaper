import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Parse from "parse";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  async function createAccount() {
    const user = new Parse.User();
    user.setUsername(username);
    user.setPassword(password);
    user.setEmail(email);
    try {
      await user.signUp();
    } catch (error) {
      alert("Error: " + error.message);
    }
    navigate("/journalist");
  }

  function usernameChange(e) {
    setUsername(e.target.value);
  }
  function passwordChange(e) {
    setPassword(e.target.value);
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <Form className="loginForm"> 
     <div className="form-inner">
      <h2>Sign Up</h2>

      <Form.Group className="form-group" controlId="formBasicUsrname">
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={usernameChange}
          type="text"
          placeholder="Enter username"
          autoFocus
        />
      </Form.Group>

      <Form.Group className="form-group" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={passwordChange}
        />
      </Form.Group>

      <Form.Group className="form-group" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={emailChange}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Button className="signUpButton" onClick={createAccount}>
        New Account
      </Button>
      </div>
      </Form>
  );
}