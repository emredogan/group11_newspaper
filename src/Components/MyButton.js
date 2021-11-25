import { Link } from "react-router-dom";

const MyButton = ({ text, imageURL }) => {
  return (
    <div>
      <big-button className="welcome">
        <img
          className="ourIcons"
          src={imageURL}
        />
        {text}
      </big-button>
    </div>
  );
};
export default MyButton;
