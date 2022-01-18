import { Navbar, Container, Nav } from "react-bootstrap";
import Parse from "parse";
import { useNavigate, Link } from "react-router-dom";

// This code is based on the demo from mircealungu

export function NavigationBar() {
  const navigate = useNavigate();

  function handleSignOut(e) {
    e.preventDefault();
    Parse.User.logOut().then(() => {
      navigate("/login");
    });
  }

  return (
    <Navbar className="Navbar" expand="lg">
      <Container>
        <Nav.Link as={Link} to="/">
          <img src="/logo.png" alt="Logo"></img>
        </Nav.Link>
        <div className="align">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" activeKey={window.location.pathname}>
            {!Parse.User.current() && (
               <>
               <Nav.Link as={Link} to="/signup">
                 Sign Up
               </Nav.Link>
               <Nav.Link as={Link} to="/login">
                 Log In
               </Nav.Link>
             </>
           )}
              {Parse.User.current() && (
              <> 
              <Nav.Link as={Link} to="/notifications">
                <img src="/notification.svg" alt="Notification Icon"></img>
              </Nav.Link>
              <Nav.Link as={Link} to="/account">
                <img src="/account.svg" alt="Account Icon"></img>
              </Nav.Link>
              
              <Nav.Link onClick={handleSignOut} as={Link} to="/login">
                <img src="/logout.svg" alt="logout"></img>
                </Nav.Link>
              </>
               )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
