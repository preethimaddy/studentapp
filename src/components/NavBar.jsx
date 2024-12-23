import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LuLogOut } from "react-icons/lu";
import  "./NavBar.css"
const NavBar = () => {
  return (
   <>
   
   <Navbar expand="lg" className="full-navbar">
      <Container fluid>
        <Navbar.Brand href="#home" className='brand'>Student Login Details</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
  <Nav>
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#about">About</Nav.Link>
    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
    </NavDropdown>
  </Nav>
  <Nav>
    <Navbar.Brand href="./login">Login</Navbar.Brand>
    <Navbar.Brand href="./signup">Sign Up</Navbar.Brand>
    <Navbar.Brand href="./signout"><LuLogOut /></Navbar.Brand>
  </Nav>
</Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default NavBar