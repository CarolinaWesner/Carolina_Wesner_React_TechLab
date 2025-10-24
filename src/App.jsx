import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Ofertas from './components/Ofertas';
import Login from './components/Login'; 
import Footer from './components/Footer';
import Mujer from './components/Mujer';
import Hombre from './components/Hombre';

function App() {

  return (
     <Router>
      <Header />
      <Routes>
        <Route path="/administracion" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/mujer" element={<Mujer />} />
        <Route path="/hombre" element={<Hombre />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App