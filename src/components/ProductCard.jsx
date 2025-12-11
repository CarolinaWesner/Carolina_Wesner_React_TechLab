import React from "react";
import { Card, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

const ProductCard = ({ product, agregarAlCarrito }) => {
  return (
    <Card
      className="h-100 d-flex flex-column shadow"
      style={{
        
        border: "none",
        borderRadius: "8px",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
      }}
    >
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        style={{
          height: "250px",
          objectFit: "contain",
        }}
        className="my-3"
      />

      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title
            style={{ color: "#070707ff", fontWeight: 600, fontSize: "1.2rem" }}
          >
            {product.title}
          </Card.Title>
        </div>

        <div>
          <Card.Text
            className="mb-2 text-success"
            style={{
              fontWeight: "bold",
              fontSize: "1.7rem",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(product.price)}
          </Card.Text>
        </div>
        <div >
          <Button 
            className="w-100 mb-2"
            variant="outline-primary"
            onClick={() => agregarAlCarrito(product)}
            aria-label="Agregar al carrito"
            
            
          >
            Agregar
          </Button>
          <Button
            variant="outline-info"
            as={Link}
            to={`/producto`}
            state={{ product }} 
            className="w-100"
          >
            Ver detalle
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
