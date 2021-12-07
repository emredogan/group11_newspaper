import React from "react";
import Header from "./Header";
import CustomButton from "./CustomButton";

import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="welcome">
      <Header name={"Journalist"} />
      <ul className="Cards">
        {/** if possible make Link reusable */}
        <li>
          <Link to="" style={{ textDecoration: "none" }}>
            <CustomButton text="Newspaper" imageURL="/newspaper.svg"></CustomButton>
          </Link>
        </li>
        <li>
          <Link to="" style={{ textDecoration: "none" }}>
            <CustomButton text="Article Idea" imageURL="/dialogue.svg"></CustomButton>
          </Link>
        </li>
        <li>
          <Link to="/journalist/task" style={{ textDecoration: "none" }}>
            <CustomButton
              text="Overview of Tasks"
              imageURL="/statistic.svg"
            ></CustomButton>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Cards;
