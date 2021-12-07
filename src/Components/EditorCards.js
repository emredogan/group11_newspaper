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
            imageURL="/accounts.svg"
          ></CardButton>
        </li>
        <li>
          <CardButton text="Article Idea" imageURL="/dialogue.svg"></CardButton>
        </li>
        {/* In according to prototype, editor has three categories to choose from */}
        {/*<li><MyButton text="Overview of Tasks" imageURL="statistic.svg"></MyButton></li>*/}
        <li>
          <CardButton text="Newspaper" imageURL="/newspaper.svg"></CardButton>
        </li>
      </ul>
    </div>
  );
}

export default EditorCards;
