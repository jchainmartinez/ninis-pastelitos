import { useState } from 'react'
import { useCart } from '../context/CartContext'

const categorias = [
  {
    id: 'consentidos',
    nombre: 'Los Consentidos',
    desc: 'Nuestros sabores mas queridos',
    productos: [
      {
        id: 1, emoji: '🎂', nombre: 'Pastel Oreo',
        imagen: null,
        descripcion: 'Delicioso pastel con galletas Oreo, relleno de crema y decorado con trozos de galleta.',
        tamanos: [
          { label: 'Chico', personas: '10 personas', precio: 180 },
          { label: 'Mediano', personas: '20 personas', precio: 250 },
          { label: 'Grande', personas: '30 personas', precio: 350 },
        ]
      },
      {
        id: 2, emoji: '🎂', nombre: 'Pastel Crunck',
        imagen: null,
        descripcion: 'Pastel esponjoso con chocolate crujiente y betun de vainilla.',
        tamanos: [
          { label: 'Chico', personas: '10 personas', precio: 180 },
          { label: 'Mediano', personas: '20 personas', precio: 250 },
          { label: 'Grande', personas: '30 personas', precio: 350 },
        ]
      },
      {
        id: 5, emoji: '🎂', nombre: 'Pastel de Queso con Zarzamora',
        imagen: '/images/img10.jpg',
        descripcion: 'Suave pastel de queso con cobertura de zarzamora fresca.',
        tamanos: [
          { label: 'Chico', personas: '10 personas', precio: 180 },
          { label: 'Mediano', personas: '20 personas', precio: 250 },
          { label: 'Grande', personas: '30 personas', precio: 350 },
        ]

      },
    ]
  },
  {
    id: 'especiales',
    nombre: 'Los Especiales',
    desc: 'Sabores unicos con ingredientes seleccionados',
    productos: [
      {
        id: 3, emoji: '🎂', nombre: 'Pastel de Piñon',
        imagen: '/images/img11.jpg',
        descripcion: 'Pastel artesanal elaborado con piñon de la region, de sabor unico e irresistible.',
        tamanos: [
          { label: 'Chico', personas: '8 personas', precio: 220 },
          { label: 'Mediano', personas: '15 personas', precio: 300 },
          { label: 'Grande', personas: '25 personas', precio: 420 },
        ]
      },
      {
        id: 4, emoji: '🎂', nombre: 'Pastel de Mango con Queso',
        imagen: '/images/img16.jpg',
        descripcion: 'Fresco y tropical, con capas de mousse de mango y decoracion de fruta natural.',
        tamanos: [
          { label: 'Chico', personas: '8 personas', precio: 220 },
          { label: 'Mediano', personas: '15 personas', precio: 300 },
          { label: 'Grande', personas: '25 personas', precio: 420 },
        ]
      },
    ]
  },
  { id: 'temporada', 
    nombre: 'Los de Temporada', 
    desc: 'Proximamente algo especial', 
    productos: [] },
  {
    id: 'galletas',
    nombre: 'Galletas',
    desc: 'Para cualquier tipo de ocasión',
    productos: [
      {
        id: 6, emoji: '🍪', nombre: 'Galletas',
        imagen: '/images/img27.jpg',
        descripcion: 'Galletas artesanales decoradas para cualquier ocasion.',
        tamanos: [
          { label: '6 piezas', personas: '', precio: 120 },
          { label: '12 piezas', personas: '', precio: 220 },
          { label: '24 piezas', personas: '', precio: 400 },
        ]
      }
    ]
  },
  { id: 'panques', nombre: 'Panques', desc: 'Proximamente', productos: [] },
  { id: 'pays', nombre: 'Pays', desc: 'Proximamente', productos: [] },
  { id: 'gelatinas', nombre: 'Gelatinas', desc: 'Proximamente', productos: [] },
]

function ModalProducto({ producto, onCerrar }) {
  const { agregarAlCarrito } = useCart()
  const [tamanoSeleccionado, setTamanoSeleccionado] = useState(0)
  const [cantidad, setCantidad] = useState(1)
  const [agregado, setAgregado] = useState(false)

  const tamano = producto.tamanos[tamanoSeleccionado]

  function handleAgregar() {
    agregarAlCarrito({
      id: producto.id,
      nombre: producto.nombre,
      emoji: producto.emoji,
      tamano: tamano.label,
      personas: tamano.personas,
      precio: tamano.precio,
      cantidad,
    })
    setAgregado(true)
    setTimeout(() => setAgregado(false), 2000)
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
      onClick={onCerrar}
    >
      <div style={{ background: 'white', borderRadius: '24px', padding: '2rem', maxWidth: '500px', width: '100%', position: 'relative' }}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onCerrar} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--rosa-claro)', border: 'none', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', fontSize: '1rem', color: 'var(--rosa-oscuro)' }}>x</button>

        <div style={{ height: '200px', overflow: 'hidden', borderRadius: '16px', background: 'var(--rosa-claro)', marginBottom: '1rem' }}>
          {producto.imagen ? (
            <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          ) : (
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem' }}>
              {producto.emoji}
            </div>
          )}
        </div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: 'var(--texto)', marginBottom: '0.5rem' }}>{producto.nombre}</h3>
        <p style={{ color: 'var(--texto-claro)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: 300 }}>{producto.descripcion}</p>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--texto-claro)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>Tamano</div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {producto.tamanos.map((t, i) => (
              <button key={t.label} onClick={() => setTamanoSeleccionado(i)} style={{ padding: '8px 16px', borderRadius: '20px', border: tamanoSeleccionado === i ? '2px solid var(--rosa)' : '1.5px solid #f0d0d8', background: tamanoSeleccionado === i ? 'var(--rosa-claro)' : 'white', color: tamanoSeleccionado === i ? 'var(--rosa-oscuro)' : 'var(--texto-claro)', fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}>
                {t.label}
                <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 300 }}>{t.personas}</span>
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--texto-claro)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>Cantidad</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button onClick={() => setCantidad(c => Math.max(1, c - 1))} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1.5px solid #f0d0d8', background: 'white', fontSize: '1.2rem', cursor: 'pointer', color: 'var(--rosa-oscuro)' }}>-</button>
            <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--texto)', minWidth: '24px', textAlign: 'center' }}>{cantidad}</span>
            <button onClick={() => setCantidad(c => c + 1)} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1.5px solid #f0d0d8', background: 'white', fontSize: '1.2rem', cursor: 'pointer', color: 'var(--rosa-oscuro)' }}>+</button>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--texto-claro)', fontWeight: 300 }}>Total</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--rosa-oscuro)' }}>${(tamano.precio * cantidad).toLocaleString()}</div>
          </div>
          <button onClick={handleAgregar} style={{ background: agregado ? '#25D366' : 'var(--rosa)', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '30px', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', transition: 'background 0.3s' }}>
            {agregado ? 'Agregado!' : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </div>
  )
}

function TarjetaProducto({ producto }) {
  const [modalAbierto, setModalAbierto] = useState(false)
  const precioBase = producto.tamanos[1].precio

  return (
    <>
      <div
        style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', border: '1px solid #f5dde4', transition: 'transform 0.25s', cursor: 'pointer' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <div style={{ height: '160px', overflow: 'hidden', background: 'var(--rosa-claro)' }}>
          {producto.imagen ? (
            <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          ) : (
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
              {producto.emoji}
            </div>
          )}
        </div>
        <div style={{ padding: '1.25rem' }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: 'var(--texto)', marginBottom: '0.3rem' }}>{producto.nombre}</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--texto-claro)', marginBottom: '1rem', fontWeight: 300 }}>Desde ${precioBase}</div>
          <button onClick={() => setModalAbierto(true)} style={{ width: '100%', background: 'var(--rosa)', color: 'white', border: 'none', padding: '10px', borderRadius: '20px', fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}>
            Ver detalles
          </button>
        </div>
      </div>
      {modalAbierto && <ModalProducto producto={producto} onCerrar={() => setModalAbierto(false)} />}
    </>
  )
}

function Tienda() {
  return (
    <section id="tienda" style={{ padding: '5rem 2rem', background: 'var(--crema)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: 'var(--rosa-claro)', color: 'var(--rosa-oscuro)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', padding: '5px 14px', borderRadius: '20px', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Nuestros productos
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--texto)', marginBottom: '0.5rem' }}>Que se te antoja hoy?</h2>
        <p style={{ color: 'var(--texto-claro)', fontSize: '1rem', fontWeight: 300, marginBottom: '4rem', lineHeight: 1.7 }}>Explora nuestro catalogo y encuentra el postre perfecto.</p>

        {categorias.map(cat => (
          <div key={cat.id} style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', color: 'var(--texto)' }}>{cat.nombre}</h3>
              {cat.productos.length === 0 && (
                <span style={{ background: '#fff0c0', color: '#a07800', fontSize: '0.7rem', fontWeight: 700, padding: '3px 10px', borderRadius: '20px' }}>Proximamente</span>
              )}
            </div>
            <p style={{ color: 'var(--texto-claro)', fontSize: '0.9rem', fontWeight: 300, marginBottom: '1.5rem' }}>{cat.desc}</p>
            <div style={{ borderBottom: '1px solid #f0d0d8', marginBottom: '1.5rem' }} />
            {cat.productos.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
                {cat.productos.map(p => <TarjetaProducto key={p.id} producto={p} />)}
              </div>
            ) : (
              <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', textAlign: 'center', border: '1px dashed #f0d0d8', color: 'var(--texto-claro)', fontSize: '0.9rem', fontWeight: 300 }}>
                Estamos preparando algo delicioso para ti. Vuelve pronto!
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tienda