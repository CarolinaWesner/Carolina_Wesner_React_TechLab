import React, { useEffect, useState } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";

const API_URL = "https://6919de2c9ccba073ee942d44.mockapi.io/products";

const CrudProductos = () => {
  const [productos, setProductos] = useState([]);
  const [show, setShow] = useState(false); //controla el modal, si se ve o no
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    image: "",
    category: "",
    minTime: "",
    maxTime: "",
    minPlayers: "",
    maxPlayers: "",
  }); //el imput (los datos que voy a ingresar y que luego se enviaran a la api)
  const [editId, setEditId] = useState(null); //para saber si estamos editando

  ///obtengo los productos de la api
  const getProductos = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al obtener productos:", error));
  };

  // cierro el modal: resetea todo lo que ingreso
  const handleClose = () => {
    setShow(false);
    setForm({
      title: "",
      description: "",
      price: "",
      stock: "",
      image: "",
      category: "",
      minTime: "",
      maxTime: "",
      minPlayers: "",
      maxPlayers: "",
    });
    setEditId(null);
  };

  //Abrir modal: si recibe un producto es editar
  const handleShow = (producto) => {
    setShow(true);
    if (producto) {
      setForm({
        ...producto, //operador de propagacion, mete todos los elementos en objetos
        price: Number(producto.price), //parsea a numero
        stock: Number(producto.stock),
        minPlayers: Number(producto.minPlayers),
        maxPlayers: Number(producto.maxPlayers),
        minTime: Number(producto.minTime),
        maxTime: Number(producto.maxTime),
      });
      setEditId(producto.id);
    }
  };

  //Crear o editar producto
  const handleSubmit = (e) => {
    e.preventDefault(); //valida el formulario

    const productData = {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
      minPlayers: Number(form.minPlayers),
      maxPlayers: Number(form.maxPlayers),
      minTime: Number(form.minTime),
      maxTime: Number(form.maxTime),
    };

    const method = editId ? "PUT" : "POST";
    const url = editId ? `${API_URL}/${editId}` : API_URL;

    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al guardar el producto");
        return res.json();
      })
      .then(() => {
        handleClose();
        getProductos();
      })
      .catch((error) => console.error("Error:", error));
  };

  // Eliminar
  const eliminarProducto = (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar este producto?")) return;

    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) throw new Error("Error al eliminar el producto");
        getProductos();
      })
      .catch((error) => console.error("Error:", error));
  };

  //productos al iniciar
  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div className="container mt-3">
      <h1
        style={{
          color: "#0a0000ff",
          fontWeight: 600,
          fontSize: "2rem",
          borderBottom: "2px solid #d4af37",
          paddingBottom: "0.5rem",
          marginBottom: "2rem",
        }}
      >
        Gestión de productos
      </h1>

      <Button className="mb-4" onClick={() => handleShow()}>
        Agregar Producto
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Imágen</th>
            <th>Categoría</th>
            <th>Jugadores</th>
            <th>Tiempo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.title}</td>
              <td style={{ textAlign: "justify" }}>{prod.description}</td>
              <td>
                {new Intl.NumberFormat("es-AR", {
                  style: "currency",
                  currency: "ARS",
                }).format(prod.price)}
              </td>

              <td>{prod.stock}</td>
              <td>
                {prod.image?.startsWith("http") ? (
                  <img
                    src={prod.image}
                    alt={prod.title}
                    width={50}
                    height={50}
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <span>{prod.image}</span>
                )}
              </td>
              <td>{prod.category}</td>
              <td>
                {prod.minPlayers} - {prod.maxPlayers}
              </td>
              <td>
                {prod.minTime} - {prod.maxTime}
              </td>
              <td>
                <Button
                  size="sm"
                  variant="success"
                  onClick={() => handleShow(prod)}
                  className="w-100 mb-1"
                >
                  Editar
                </Button>{" "}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => eliminarProducto(prod.id)}
                  className="w-100"
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal de agregar / editar */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? "Editar" : "Agregar"} Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Título</Form.Label>
              <Form.Control
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Categoria</Form.Label>


              <Form.Select
                aria-label="Default select example"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                <option value="Estrategia">Estrategia</option>
                <option value="Construcción">Construcción</option>
                <option value="Familiar">Familiar</option>
                <option value="Cooperativo">Cooperativo</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                value={form.price}
                min={1}
                onChange={(e) =>
                  setForm({ ...form, price: Number(e.target.value) })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                min={0}
                value={form.stock}
                onChange={(e) =>
                  setForm({ ...form, stock: Number(e.target.value) })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Imagen (URL)</Form.Label>
              <Form.Control
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Mínimo de jugadores</Form.Label>
              <Form.Control
                type="number"
                min={1}
                value={form.minPlayers}
                onChange={(e) =>
                  setForm({ ...form, minPlayers: Number(e.target.value) })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Máximo de jugadores</Form.Label>
              <Form.Control
                type="number"
                min={1}
                value={form.maxPlayers}
                onChange={(e) =>
                  setForm({ ...form, maxPlayers: Number(e.target.value) })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Mínimo de tiempo</Form.Label>
              <Form.Control
                type="number"
                min={1}
                value={form.minTime}
                onChange={(e) =>
                  setForm({ ...form, minTime: Number(e.target.value) })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Máximo de tiempo</Form.Label>
              <Form.Control
                type="number"
                min={1}
                value={form.maxTime}
                onChange={(e) =>
                  setForm({ ...form, maxTime: Number(e.target.value) })
                }
                required
              />
            </Form.Group>

            <Button type="submit" className="mt-2">
              Guardar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CrudProductos;
