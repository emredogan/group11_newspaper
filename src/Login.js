import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Parse from "parse";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function handleLoginAttempt(e) {
    e.preventDefault();

    const user = new Parse.User();
    user.setPassword(password);
    user.setUsername(username);
    user.logIn().then((loggedInUser) => {
      navigate("/journalist");
    });
  }

  return (
    
      <Form className="loginForm">
      <div className="form-inner">
      <h2>Login</h2>
        <Form.Group className="form-group" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            autoFocus
          />
        </Form.Group>
        <Form.Group className="form-group" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Button onClick={handleLoginAttempt} className="accountButton" type="submit">
          Submit
        </Button>
        <br />
        <br />
        Don't have an account? <Link to="/signup"> Create one!</Link>
        </div>
      </Form>
    
  );
}