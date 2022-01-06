import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

// This code is based on the demo from mircealungu

export function NavigationBar() {
  return (
    <Navbar className="Navbar" expand="lg">
      <Container>
        <Nav.Link as={Link} to="/">
          <img src="/logo.png" alt="Logo"></img>
        </Nav.Link>
        <div className="align">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/notifications">
                <img src="/notification.svg" alt="Notification Icon"></img>
              </Nav.Link>
              <Nav.Link as={Link} to="/account">
                <img src="/account.svg" alt="Account Icon"></img>
              </Nav.Link>
              <Navbar.Brand href="/editor">
                <img src="/logout.svg" alt="Switch to editor"></img>
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
