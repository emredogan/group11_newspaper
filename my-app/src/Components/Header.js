// Auto generate rafce(Creates an arrow functio). (By using the ES7 extension)
const Header = (props) => {
    return (
        <header className='welcome'>
            <h2>Welcome, <span>{props.name} </span></h2>
        </header>
    )
}

Header.defaultProps = {
    name: 'there'
}

export default Header
