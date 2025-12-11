import React, { useEffect, useState, useContext } from "react";
import { Row, Col, Form } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { CartContext } from "../context/CartContext";

const ProductList = ({ category = null }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { agregarAlCarrito } = useContext(CartContext);
  const [barraDeBusqueda, setBarraDeBusqueda] = useState("");

  //paginacion
  const productosPorPagina = 8;
  const [paginaActual, setPaginaActual] = useState(1);

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

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(barraDeBusqueda.toLowerCase()) ||
      product.description.toLowerCase().includes(barraDeBusqueda.toLowerCase())
  );

  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosActuales = filteredProducts.slice(
    indicePrimerProducto,
    indiceUltimoProducto
  );
  // Cambiar de página
  const totalPaginas = Math.ceil(filteredProducts.length / productosPorPagina);
  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

  return (
    <>
      <Form.Control
        type="text"
        placeholder="Buscar juego"
        className="mb-4"
        value={barraDeBusqueda}
        onChange={(e) => setBarraDeBusqueda(e.target.value)}
      ></Form.Control>

      <Row>
        {productosActuales.length > 0 ? (
          productosActuales.map((product) => (
            <Col md={3} key={product.id} className="col-12 col-md-6 col-lg-3">
              <ProductCard
                product={product}
                agregarAlCarrito={agregarAlCarrito}
              />
            </Col>
          ))
        ) : (
          <p>No hay productos que coincidan con la búsqueda.</p>
        )}
      </Row>

      {/* Paginador */}
      <div className="d-flex justify-content-center my-4">
        {Array.from({ length: totalPaginas }, (_, index) => (
          <button
            key={index + 1}
            className={`btn mx-1 ${
              paginaActual === index + 1 ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => cambiarPagina(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default ProductList;
