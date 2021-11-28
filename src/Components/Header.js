// Auto generate rafce(Creates an arrow functio). (By using the ES7 extension)
const Header = ({ name }) => {
  return (
    <ul>
      <li>
        <header className="welcome">
          <h2>
            Welcome, &nbsp;<span>{name} </span>
          </h2>
        </header>
      </li>
    </ul>
  );
};



export default Header;
