import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import Carrito from './Carrito'

function Navbar() {
  const { totalItems } = useCart()
  const [carritoAbierto, setCarritoAbierto] = useState(false)

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, width: '100%', background: 'rgba(255,248,240,0.95)', backdropFilter: 'blur(8px)', zIndex: 100, padding: '0 2rem', borderBottom: '1px solid #f0d0d8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img src="/images/LogoNinis1.png" alt="Ninis Pastelitos" style={{ height: '50px', objectFit: 'contain' }} />
          </Link>
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            {[
              { nombre: 'Nosotros', ruta: '/nosotros' },
              { nombre: 'Tienda', ruta: '/tienda' },
              { nombre: 'Galeria', ruta: '/galeria' },
              { nombre: 'Contacto', ruta: '/contacto' },
            ].map(item => (
              <li key={item.nombre}>
                <Link to={item.ruta} style={{ textDecoration: 'none', color: 'var(--texto-claro)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.5px' }}
                  onMouseEnter={e => e.target.style.color = 'var(--rosa)'}
                  onMouseLeave={e => e.target.style.color = 'var(--texto-claro)'}
                >
                  {item.nombre}
                </Link>
              </li>
            ))}
          </ul>
          <button onClick={() => setCarritoAbierto(true)} style={{ background: 'var(--rosa)', color: 'white', border: 'none', padding: '8px 18px', borderRadius: '20px', fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', position: 'relative' }}>
            Carrito {totalItems > 0 && <span style={{ background: 'white', color: 'var(--rosa)', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, marginLeft: '6px' }}>{totalItems}</span>}
          </button>
        </div>
      </nav>
      {carritoAbierto && <Carrito onCerrar={() => setCarritoAbierto(false)} />}
    </>
  )
}

export default Navbar