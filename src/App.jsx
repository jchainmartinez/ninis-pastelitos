import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Tienda from './components/Tienda'
import Nosotros from './components/Nosotros'
import Galeria from './components/Galeria'
import Contacto from './components/Contacto'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
