
const CardButton = ({ text, imageURL }) => {
  return (
    <div>
      <big-button className="welcome">
        <img
          className="ourIcons"
          alt="button_image"
          src={imageURL}
        />
        {text}
      </big-button>
    </div>
  );
};
export default CardButton;
