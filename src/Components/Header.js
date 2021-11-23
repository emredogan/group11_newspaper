// Auto generate rafce(Creates an arrow functio). (By using the ES7 extension)
const Header = ({ name }) => {
  return (
    <ul>
      <li>
        <header className="welcome">
          <h2>
            Welcome, <span>{name} </span>
          </h2>
        </header>
      </li>
    </ul>
  );
};

Header.defaultProps = {
  name: "there",
};

export default Header;
