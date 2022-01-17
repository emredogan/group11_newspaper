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
            imageURL="/accounts.svg"
          ></CardButton>
          </Link>
          
        </li>
        <li>
          <CardButton text="Article Idea" imageURL="/dialogue.svg"></CardButton>
        </li>
        {/* In according to prototype, editor has three categories to choose from */}
        {/*<li><MyButton text="Overview of Tasks" imageURL="statistic.svg"></MyButton></li>*/}
        <li>
          <CardButton text="Tomorrows Newspaper" imageURL="/newspaper.svg"></CardButton>
        </li>
      </ul>
    </div>
  );
}

export default EditorCards;
