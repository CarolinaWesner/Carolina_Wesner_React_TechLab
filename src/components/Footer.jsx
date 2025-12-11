import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold text-uppercase" style={{ color: "#d4af37" }}>
              INSIGNIA
            </h5>
            <p className="small">
              Tienda especializada en juegos de mesa. <br />Encontrá los mejores títulos y viví grandes momentos en cada partida.
            </p>
            <div>
              <a
                href="https://instagram.com"
                className="text-light me-3"
                style={{ fontSize: "1.4rem" }}
              >
                <i className="bi bi-instagram" style={{ color: "#d4af37" }}></i>
              </a>
              <a
                href="https://facebook.com"
                className="text-light me-3"
                style={{ fontSize: "1.4rem" }}
              >
                <i className="bi bi-facebook" style={{ color: "#d4af37" }}></i>
              </a>
              <a
                href="https://tiktok.com"
                className="text-light"
                style={{ fontSize: "1.4rem" }}
              >
                <i className="bi bi-tiktok" style={{ color: "#d4af37" }}></i>
              </a>
            </div>
          </Col>

          <Col md={4}>
            <h6 className="fw-bold mb-3" style={{ color: "#d4af37" }}>
              Contacto
            </h6>
            <p className="small mb-1">📧 contacto@insignia.com</p>
            <p className="small mb-1">📱 +54 9 11 5555 1234</p>
            <p className="small mb-3">🕓 Lun a Vie 10 a 18 hs</p>
            <p className="small text-secondary mb-0">
              © {new Date().getFullYear()} INSIGNIA — Todos los derechos
              reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
