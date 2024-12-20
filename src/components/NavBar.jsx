import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  "./NavBar.css"
const NavBar = () => {
  return (
   <>
   <Navbar expand="lg" className="full-navbar">
      <Container fluid>
        <Navbar.Brand href="#home" className='brand'>Student Login Details</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="./signup">Sign Up</Nav.Link>
            <Nav.Link href="./login">Login</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default NavBar