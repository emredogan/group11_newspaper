import React from "react";

function CardButton(props) {
  return (
    <div>
      <big-button className="welcome">
        <img
          className="ourIcons"
          alt="button_image"
          src={props.imageURL}
        />
        {props.text}
      </big-button>
    </div>
  );
};

export default CardButton;
