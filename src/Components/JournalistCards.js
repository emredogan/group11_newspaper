import React from "react";
import Header from "./Header";
import CardButton from "./CardButton";

import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="welcome">
      <Header name={"Journalist"} />
      <ul className="Cards">
        {/** if possible make Link reusable */}
        <li>
          <Link to="" style={{ textDecoration: "none" }}>
            <CardButton text="Newspaper" imageURL="/statistic.svg"></CardButton>
          </Link>
        </li>
        <li>
          <Link to="/journalist/article-ideas" style={{ textDecoration: "none" }}>
            <CardButton text="Article Idea" imageURL="/dialogue.svg"></CardButton>
          </Link>
        </li>
        <li>
          <Link to="/journalist/task" style={{ textDecoration: "none" }}>
            <CardButton
              text="Tasks"
              imageURL="/tasks.svg"
            ></CardButton>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Cards;
