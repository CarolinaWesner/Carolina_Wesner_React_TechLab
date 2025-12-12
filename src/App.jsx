import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Ofertas from "./components/Ofertas";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import CrudProductos from "./components/CrudProductos";
import ProductDetail from "./components/ProductDetail";
import Categoria from "./components/Categoria";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Header />

          <Routes>
            <Route path="/administracion" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/ofertas" element={<Ofertas />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/crud" element={<CrudProductos />} />
            <Route path="/producto" element={<ProductDetail />} />
            <Route path="/categoria/:category" element={<Categoria />} />
          </Routes>

          <Footer />
        </Router>
      </CartProvider>

      <ToastContainer />
    </>
  );
}

export default App;
