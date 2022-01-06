import React from "react";
import Header from "./Header";
import CardButton from "./CardButton";

function EditorCards() {
  return (
    <div className="welcome">
      <Header name={"Editor"} />
      <ul className="Cards">
        <li>
          <CardButton 
          text="Employee Overview" 
          imageURL="/accounts.svg" />
        </li>
        <li>
          <CardButton 
          text="Article Idea" 
          imageURL="/dialogue.svg" />
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
