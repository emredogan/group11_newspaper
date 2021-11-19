import { Navbar, Container, Nav } from "react-bootstrap";

// This code is based on the demo from mircealungu

export function NavigationBar() {
  return (
    <Navbar className="Navbar" bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src="/logo.png" alt="Logo"></img>
        </Navbar.Brand>
        <div className="align"> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="/notifications">
              <img src="/notification.svg" alt="Notification Icon"></img>
            </Nav.Link>
            <Nav.Link href="/account">
              <img src="/account.svg" alt="Account Icon"></img>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
      
    </Navbar>
  );
}
