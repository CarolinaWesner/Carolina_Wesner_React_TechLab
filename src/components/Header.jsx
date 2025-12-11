import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Button,
  NavbarToggle,
  NavbarCollapse,
  NavDropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar style={{backgroundColor:"#1B4332"}} variant="dark" expand="lg" className="mb-4 shadow-sm" >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
        src="src\images\logo.png"
        className="logo-img me-2"
        alt="Logo insignia"
      />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="me-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/ofertas" className="me-3">
              Ofertas
            </Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown" className="me-3">
              <NavDropdown.Item as={Link} to="/categoria/Familiar" >
                Familiar
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/Estrategia" >
                Estrategia
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/Cooperativo" >
                Cooperativo
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/Construcción" >
                Construcción
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center">
          <Button
            variant="outline-light"
            as={Link}
            to="/administracion"
            className="me-2 mt-2 mt-lg-0"
          >
            Ingresar
          </Button>

          <Link to="/carrito" className="text-white ms-2">
            <FontAwesomeIcon
              icon={faShoppingCart}
              size="lg"
              style={{ color: "#d4af37" }}
            />
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
