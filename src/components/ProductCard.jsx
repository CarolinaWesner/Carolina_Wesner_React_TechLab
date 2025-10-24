import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product, agregarAlCarrito }) => {
  return (
    <Card
      className="h-100 d-flex flex-column shadow"
      style={{
        backgroundColor: "#d4af3729",
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
          height: "180px",
          objectFit: "cover",

        }}
      />

      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title
            style={{ color: "#070707ff", fontWeight: 600, fontSize: "1.2rem" }}
          >
            {product.title}
          </Card.Title>
          <Card.Text
            style={{
              color: "#383737ff",
              fontSize: "0.875rem",
              marginTop: "0.3rem",
            }}
          >
            {product.description.slice(0, 80)}...
          </Card.Text>
        </div>

        <div className="mt-3 d-flex justify-content-between align-items-center">
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{
              fontWeight: "bold",
              fontSize: "1.7rem",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            ${product.price}
          </Card.Subtitle>
          <Button
            variant="outline-dark"
            onClick={() => agregarAlCarrito(product)}
          >
            Agregar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
