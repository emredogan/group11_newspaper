import React from "react";

function Header({name}) {
  return (
    <header className="welcome">
      <h2>
        Welcome, &nbsp;<span>{name} </span>
      </h2>
    </header>
  );
}

export default Header;
