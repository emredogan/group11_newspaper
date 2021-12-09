import React from "react";
import { Link } from "react-router-dom";

function CustomButton(props) {
  return (
    <>
      {/** reusable buttonbutton */}
      <Link to={props.path}>
          <button className="toButton" variant="primary" type="submit">
            {props.text}
          </button>
      </Link>
    </>
  );
}

export default CustomButton;