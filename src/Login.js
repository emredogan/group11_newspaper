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
    <>
      <h1>Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Button onClick={handleLoginAttempt} variant="primary" type="submit">
          Submit
        </Button>
        <br />
        <br />
        Don't have an account? <Link to="/signup"> Create one!</Link>
      </Form>
    </>
  );
}