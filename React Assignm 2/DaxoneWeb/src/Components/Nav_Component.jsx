import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavAdd_Ser_Component } from './NavAdd_Ser_Component';
import { Image_Component } from './image_component';

function Nav_Component() {
  return (
    <Navbar expand="lg" className="pt-4">
      <Container>
        <Navbar.Brand className='p-0' href="#"><Image_Component src="../src/assets/logo-1.webp"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto p-2 homeitems">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Shop</Nav.Link>
            <Nav.Link href="#home">Mens</Nav.Link>
            <Nav.Link href="#home">Pages</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
            <NavAdd_Ser_Component/>
      </Container>
    </Navbar>
  );
}

export {Nav_Component};