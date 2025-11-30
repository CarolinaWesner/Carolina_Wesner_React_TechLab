import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Ofertas from "./components/Ofertas";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Mujer from "./components/Mujer";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import CrudProductos from "./components/CrudProductos";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/administracion" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/mujer" element={<Mujer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/crud" element={<CrudProductos />} />
          <Route path="/producto" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
