import React, { useEffect, useState, useContext  } from "react";
import { Row, Col ,Form} from 'react-bootstrap';
import ProductCard from "./ProductCard";
import { CartContext } from '../context/CartContext';

const ProductList = ({ category = null }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { agregarAlCarrito } = useContext(CartContext);
  const [barraDeBusqueda, setBarraDeBusqueda] = useState("");


  useEffect(() => {
    let url = "https://6919de2c9ccba073ee942d44.mockapi.io/products";
    if (category) {
      url = `https://6919de2c9ccba073ee942d44.mockapi.io/products?category=${category}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredProducts=products.filter(product=>
      product.title.toLowerCase().includes(barraDeBusqueda.toLowerCase()) ||
      product.description.toLowerCase().includes(barraDeBusqueda.toLowerCase())
);

  return (
    <>
    <Form.Control
      type="text"
      placeholder="Buscar juego"
      className="mb-4"
      value={barraDeBusqueda}
      onChange={(e) =>setBarraDeBusqueda(e.target.value)}
    >

    </Form.Control>
  
    <Row>

      {filteredProducts.map((product) => (
        <Col md={4} key={product.id} className="mb-4">
          <ProductCard product={product} agregarAlCarrito={agregarAlCarrito} />
        </Col>
      ))}
    </Row>
      </>
  );
};

export default ProductList;