import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { CartContext } from '../context/CartContext';



const ProductDetail =  () => {
  //para recibir el componente
  const location = useLocation();
  const { product } = location.state;

  const { agregarAlCarrito } = useContext(CartContext);

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid rounded />
        </Col>

        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <h2>{product.title}</h2>
            <p className="text-muted">{product.category}</p>

            <h3 className="text-success">
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(product.price)}
            </h3>

            <p className="py-4" style={{ textAlign: "justify" }}>{product.description}</p>

            <Button variant="primary" onClick={() => agregarAlCarrito(product)}>Agregar al carrito</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default ProductDetail;
