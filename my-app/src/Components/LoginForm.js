import React, { useState} from 'react'

//I am passing my prop as object to the App.js
function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name: "", email:"", password: ""});

//my function is handling the submit so that the page (default) does not re-render
    const  submitHandler = e => {
        e.preventDefault();

//here we call the login function that we called through as prop and pass it the details
        Login(details);
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
        </form>
    )
}

export default LoginForm
