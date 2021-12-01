import React from "react";
import Parse from "parse";

const Notifications = () => {
  
  const getCurrentUser = async function () {
    const currentUser = await Parse.User.currentAsync();
    if (currentUser !== null) {
      alert(
        `Being directed to your account page: ${currentUser.get('username')}`,
      );
    }
    return currentUser;
  };
  
  try {
    getCurrentUser()
  } catch (error) {
    alert("Error: " + error.code + " " + error.message);
  }
    
  return (
    <ul>
      <li>
        <header className="welcome">
          <h2>
            Welcome journalist this is your account. 
          </h2>
        </header>
      </li>
    </ul>

  );
};

  export default Notifications;
  