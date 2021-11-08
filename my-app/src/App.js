// import React, { useState } from 'react'
// import LoginForm from './Components/LoginForm';
// import Navigation from './Components/Navigation';
// import Welcome from './Components/Welcome';

// import { BrowserRouter as Router, Route, Swicth } from 'react-router-dom';

// function App() {
//   const adminUser = {
//     email: "admin@admin.com",
//     password: "admin123"
//   }
// // the following is an Array that we get back from our set state function, once we log in
//   const [user, setUser] = useState({name: "", email:""});
//   const [error, setError] = useState("");
  
//   // the function that is called when we are trying to login
//   const Login = details => {
//     console.log(details);
//     if (details.email === adminUser.email && details.password === adminUser.password) {
//       console.log("Logged in")
//       setUser({
//         name: details.name,
//         email: details.email
//       });
//     } else { 
//       console.log("Details do not match");
//       setError("Details do not match");
//     }
//   }


//   // the function that is called when we are trying to Logout
//   const Logout = () =>
// {
//   console.log("Logout");
//   setUser({ name: "", email:"" });
// }
// /* if users email is not equal to null then we will render a welcome screen that shows the user name */
// // if we are not logged in, we display the login form
//   return (
//     <div className="App">
//    {(user.email !== "" ) ? (
//      <div className="welcome">
//        <h2>Welcome, <span>{user.name} </span></h2>
//        <button onClick={Logout}>Logout</button>
//         </div>
//    )
//   : (
//     //we need to pass the login function when user clicks the login button
//     //here we also pass the error, in case there is an error
//     <LoginForm Login={Login} error={error}/>
//   )
//   }
//     </div>
//   );
// }

// export default App;
