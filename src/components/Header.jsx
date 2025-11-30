import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <span style={{ color: "#d4af37", fontWeight: "bold" }}>RONDA FINAL - Juegos de mesa</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/ofertas" className="me-3">Ofertas</Nav.Link>
            <Nav.Link as={Link} to="/mujer" className="me-3">Mujer</Nav.Link>
            <Nav.Link as={Link} to="/hombre" className="me-3">Hombre</Nav.Link>

            <div className="d-flex align-items-center">
              <Button
                variant="outline-light"
                as={Link}  //renderiza el boton a un link para poder usar la
                to="/administracion"
                className="me-2 mt-2 mt-lg-0"
              >
                Administración
              </Button>

              <Link to="/carrito" className="text-white ms-2">
                <FontAwesomeIcon icon={faShoppingCart} size="lg" style={{ color: "#d4af37" }} />
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

