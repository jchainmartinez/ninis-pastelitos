import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

function Carrito({ onCerrar }) {
  const { carrito, eliminarDelCarrito, actualizarCantidad, vaciarCarrito, total } = useCart()
  const navigate = useNavigate()

  function handleCheckout() {
    onCerrar()
    navigate('/checkout')
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', justifyContent: 'flex-end' }}
      onClick={onCerrar}
    >
      <div style={{ background: 'white', width: '100%', maxWidth: '420px', height: '100%', overflowY: 'auto', padding: '2rem', display: 'flex', flexDirection: 'column' }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: 'var(--texto)' }}>Tu carrito</h2>
          <button onClick={onCerrar} style={{ background: 'var(--rosa-claro)', border: 'none', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', fontSize: '1rem', color: 'var(--rosa-oscuro)' }}>x</button>
        </div>

        {carrito.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--texto-claro)' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛒</div>
            <p style={{ fontWeight: 300 }}>Tu carrito esta vacio</p>
          </div>
        ) : (
          <>
            <div style={{ flex: 1 }}>
              {carrito.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem 0', borderBottom: '1px solid #f0d0d8' }}>
                  <div style={{ fontSize: '2.5rem' }}>{item.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, color: 'var(--texto)', marginBottom: '2px' }}>{item.nombre}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--texto-claro)', marginBottom: '0.5rem' }}>{item.tamano} - {item.personas}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <button onClick={() => actualizarCantidad(item.id, item.tamano, item.cantidad - 1)} style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #f0d0d8', background: 'white', cursor: 'pointer', color: 'var(--rosa-oscuro)', fontSize: '1rem' }}>-</button>
                      <span style={{ fontWeight: 600, color: 'var(--texto)' }}>{item.cantidad}</span>
                      <button onClick={() => actualizarCantidad(item.id, item.tamano, item.cantidad + 1)} style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #f0d0d8', background: 'white', cursor: 'pointer', color: 'var(--rosa-oscuro)', fontSize: '1rem' }}>+</button>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 700, color: 'var(--rosa-oscuro)' }}>${(item.precio * item.cantidad).toLocaleString()}</div>
                    <button onClick={() => eliminarDelCarrito(item.id, item.tamano)} style={{ fontSize: '0.75rem', color: 'var(--texto-claro)', background: 'none', border: 'none', cursor: 'pointer', marginTop: '4px' }}>Eliminar</button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--texto)' }}>Total</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--rosa-oscuro)' }}>${total.toLocaleString()}</span>
              </div>
              <button onClick={handleCheckout} style={{ width: '100%', background: 'var(--rosa)', color: 'white', border: 'none', padding: '14px', borderRadius: '30px', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginBottom: '0.75rem' }}>
                Proceder al pago
              </button>
              <button onClick={vaciarCarrito} style={{ width: '100%', background: 'transparent', color: 'var(--texto-claro)', border: '1px solid #f0d0d8', padding: '10px', borderRadius: '30px', fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}>
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Carrito