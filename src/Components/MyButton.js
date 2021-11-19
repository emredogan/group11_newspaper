const MyButton = ({ text, imageURL }) => {
  return (
    <div>
      <big-button className="welcome">
        <img
          style={{
            width: "80px",
            margin: "20px",
            marginTop: "-10px",
          }}
          className="ourIcons"
          src={imageURL}
        ></img>
        {text}
      </big-button>
    </div>
  );
};
export default MyButton;
