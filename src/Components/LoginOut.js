import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Parse from "parse";

function LoginOut() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  Parse.initialize(
    "oHPQf2X0grpeXteCxywdMAvZ6BaV3lj1o3SUJ4pJ",
    "wE0CWYnPVC86eVLQAcvOUm37BFhqW6ZBZTcdCL5B",
    "7Tqwx4xkFQ0tZDsoQrsI2nxJdlZxXaSev96e5Dtw"
  );

  Parse.serverURL = "https://parseapi.back4app.com/";

  console.log("STARTING PARSE");

  console.log(Parse.applicationId);

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  // the following is an Array that we get back from our set state function, once we log in
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  // the function that is called when we are trying to login
  const Login = (details) => {
    console.log(details);
    const user = new Parse.User();
    user.set("username", details.email);
    user.set("password", details.password);
    user.set("email", details.email);

    try {
      user.signUp();
      // Hooray! Let them use the app now.
    } catch (error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match");
      setError("Details do not match");
    }
  };

  // the function that is called when we are trying to Logout
  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  };
  /* if users email is not equal to null then we will render a welcome screen that shows the user name */
  // if we are not logged in, we display the login form
  return (
    <div className="App2">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name} </span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        //we need to pass the login function when user clicks the login button
        //here we also pass the error, in case there is an error
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default LoginOut;
