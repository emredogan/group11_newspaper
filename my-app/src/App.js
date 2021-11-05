import React, { useState } from 'react'
import Header from './Components/Header';
import LoginForm from './Components/LoginForm';
import MyButton from './Components/MyButton';




function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }
// the following is an Array that we get back from our set state function, once we log in
  const [user, setUser] = useState({name: "", email:""});
  const [error, setError] = useState("");
  
  // the function that is called when we are trying to login
  const Login = details => {
    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in")
      setUser({
        name: details.name,
        email: details.email
      });
    } else { 
      console.log("Details do not match");
      setError("Details do not match");
    }
  }


  // the function that is called when we are trying to Logout
  const Logout = () =>
{
  console.log("Logout");
  setUser({ name: "", email:"" });
}
/* if users email is not equal to null then we will render a welcome screen that shows the user name */
// if we are not logged in, we display the login form
  return (
    <div className="App">
   {(user.email !== "" ) ? (
     <div className="welcome"
     >
       <Header name={user.name} >
       </Header>

       <ul
       style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
    <li><MyButton text="Overview of Emp" imageURL="account_multiple.png"></MyButton></li>
    <li><MyButton text="Article Idea" imageURL="alert-octagon.png"></MyButton></li>
    <li><MyButton text="Overview of Tasks" imageURL="clipboard-check.png"></MyButton></li>
</ul>

       
       <button onClick={Logout}>Logout</button>
       
        </div>
   )
  : (
    //we need to pass the login function when user clicks the login button
    //here we also pass the error, in case there is an error
    <LoginForm Login={Login} error={error}/>
  )
  }
    </div>
  );
}

export default App;
