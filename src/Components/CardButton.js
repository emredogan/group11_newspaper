import React from "react";

const CardButton = ({ text, imageURL }) => {
  return (
    <div>
      <button className="welcome">
        <img
          className="ourIcons"
          alt="button_image"
          src={imageURL}
        />
        {text}
      </button>
    </div>
  );
};
export default CardButton;
