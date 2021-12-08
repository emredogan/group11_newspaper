const MyButton = ({ text, imageURL }) => {
  return (
    <div>
      <big-button className="welcome">
        <img
          className="ourIcons"
          src={imageURL}
        ></img>
        {text}
      </big-button>
    </div>
  );
};
export default MyButton;
