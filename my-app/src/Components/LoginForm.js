import React, { useState } from 'react'

//I am passing my prop as object to the App.js
function LoginForm() {
    const [details, setDetails] = useState({name: "", email:"", password: ""});

//my function is handling the submit so that the page (default) does not re-render
    const  submitHandler = e => {
        e.preventDefault();

//here we call the login function that we called through as prop and pass it the details
        Login(details);
    }

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
      const Logout = () => {
      console.log("Logout");
      setUser({ name: "", email:"" });
    }

    
    return (
// returns the error function and has a form-group for styling
        <form onSubmit={submitHandler}> 
        <div className="form-inner">
            <h2>Login</h2>
            {(error !== "") ? ( <div className="error">{error} </div> ) : ""}
            <div className="form-group">
                <label htmlFor="name">Name:</label>

 {/* anytime we change "onChange" the name, the function will be called, it passes the event "e" and the event holds the target value
 we are updating the set details and are passing through the new value for name --> that will update name                */}
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                 </div>
               
               <div className="form-group"> 
               <label htmlFor="email">Email: </label>
               <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
               </div>

               <div className="form-group"> 
               <label htmlFor="password">Password: </label>
               <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
               </div>
               <input className="thebutton" type="submit" value="Login"></input>
        </div>

        {/* if users email is not equal to null then we will render a welcome screen that shows the user name */}
        {/* if we are not logged in, we display the login form*/} 
        <div className="App">
            {(user.email !== "" ) ? (
                <div className="welcome">
                <h2>Welcome, <span>{user.name} </span></h2>
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
        </form>
        

        

        
    );
}

export default LoginForm
