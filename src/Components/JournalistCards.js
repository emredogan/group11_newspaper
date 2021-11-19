import React from "react";
import Header from "./Header";
import MyButton from "./MyButton";

function Cards() {
  return (
    <div className="welcome">
      <Header name={"Journalist"} />
      <ul className="Cards">
        <li>
          <MyButton text="Newspaper" imageURL="/newspaper.svg"></MyButton>
        </li>
        <li>
          <MyButton text="Article Idea" imageURL="/dialogue.svg"></MyButton>
        </li>
        <li>
          <MyButton
            text="Overview of Tasks"
            imageURL="/statistic.svg"
          ></MyButton>
        </li>
      </ul>
    </div>
  );
}

export default Cards;
