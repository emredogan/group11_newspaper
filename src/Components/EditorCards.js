import React from "react";
import Header from "./Header";
import CardButton from "./CardButton";
import { Link } from "react-router-dom";

function EditorCards() {
  return (
    <div className="welcome">
      <Header name={"Editor"} />
      <ul className="Cards">
        <li>
        <Link to="/editor/employees" style={{ textDecoration: "none" }}>
          <CardButton 
          text="Employee Overview" 
          imageURL="/accounts.svg" />
        </Link>
        </li>
        <li>
        <Link to="/editor/article-ideas" style={{ textDecoration: "none" }} >
          <CardButton 
          text="Article Idea" 
          imageURL="/dialogue.svg" />
        </Link>
        </li>
        <li>
          <CardButton 
          text="Tomorrows Newspaper" 
          imageURL="/newspaper.svg" />
        </li>
      </ul>
    </div>
  );
}

export default EditorCards;
