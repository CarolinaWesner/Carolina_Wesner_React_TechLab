import React, { useContext } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const Carrito = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } =
    useContext(CartContext);

  //const eliminarDelCarrito = (id) => {
  //  setCarrito(prev => prev.filter(producto => producto.id !== id));
  //};

  const total = carrito.reduce(
    (acc, item) => acc + Number(item.price) * item.cantidad,
    0
  );

  if (carrito.length === 0) {
    return (
      <Container className="mt-4">
        <h3>Tu carrito está vacío</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
     <h1 style={{
          color: '#0a0000ff',          
          fontWeight: 600,           
          fontSize: '2rem',       
          borderBottom: '2px solid #d4af37',
          paddingBottom: '0.5rem',
          marginBottom: '2rem'
        }}>Carrito de compras</h1>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td> {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(Number(item.price).toFixed(2))}</td>
              <td>{item.cantidad}</td>
              <td>{new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format((Number(item.price) * item.cantidad).toFixed(2))}</td>

              
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h5 className="text-end">Total a pagar: ${total.toFixed(2)}</h5>
      <Button
        variant="danger"
        size="sm"
        onClick={() => vaciarCarrito()}
      >
        Vaciar carrito
      </Button>
    </Container>
  );
};

export default Carrito;
