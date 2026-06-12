import { useState, useRef, useEffect } from 'react'

const fotos = [
  { id: 1, src: '/images/img01.jpg', alt: 'Pastel 1' },
  { id: 2, src: '/images/img02.jpg', alt: 'Pastel 2' },
  { id: 3, src: '/images/img03.jpg', alt: 'Pastel 3' },
  { id: 4, src: '/images/img04.jpg', alt: 'Pastel 4' },
  { id: 5, src: '/images/img05.jpg', alt: 'Pastel 5' },
  { id: 6, src: '/images/img06.jpg', alt: 'Pastel 6' },
  { id: 7, src: '/images/img07.jpg', alt: 'Pastel 7' },
  { id: 8, src: '/images/img08.jpg', alt: 'Pastel 8' },
  { id: 9, src: '/images/img09.jpg', alt: 'Pastel 9' },
  { id: 10, src: '/images/img10.jpg', alt: 'Pastel 10' },
  { id: 11, src: '/images/img11.jpg', alt: 'Pastel 11' },
  { id: 12, src: '/images/img12.jpg', alt: 'Pastel 12' },
  { id: 13, src: '/images/img13.jpg', alt: 'Pastel 13' },
  { id: 14, src: '/images/img14.jpg', alt: 'Pastel 14' },
  { id: 15, src: '/images/img15.jpg', alt: 'Pastel 15' },
  { id: 16, src: '/images/img16.jpg', alt: 'Pastel 16' },
  { id: 17, src: '/images/img17.jpg', alt: 'Pastel 17' },
  { id: 18, src: '/images/img18.jpg', alt: 'Pastel 18' },
  { id: 19, src: '/images/img19.jpg', alt: 'Pastel 19' },
  { id: 20, src: '/images/img20.jpg', alt: 'Pastel 20' },
  { id: 21, src: '/images/img21.jpg', alt: 'Pastel 21' },
  { id: 22, src: '/images/img22.jpg', alt: 'Pastel 22' },
  { id: 23, src: '/images/img23.jpg', alt: 'Pastel 23' },
  { id: 24, src: '/images/img24.jpg', alt: 'Pastel 24' },
  { id: 25, src: '/images/img25.jpg', alt: 'Pastel 25' },
  { id: 26, src: '/images/img26.jpg', alt: 'Pastel 26' },

]

function LightBox({ foto, onCerrar }) {
  const [scale, setScale] = useState(1)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const posStart = useRef({ x: 0, y: 0 })

  useEffect(() => {
    setScale(1)
    setPos({ x: 0, y: 0 })
  }, [foto])

  function handleWheel(e) {
    e.preventDefault()
    setScale(s => Math.min(4, Math.max(1, s - e.deltaY * 0.01)))
  }

  function handleMouseDown(e) {
    if (scale === 1) return
    setDragging(true)
    dragStart.current = { x: e.clientX, y: e.clientY }
    posStart.current = { ...pos }
  }

  function handleMouseMove(e) {
    if (!dragging) return
    setPos({
      x: posStart.current.x + (e.clientX - dragStart.current.x),
      y: posStart.current.y + (e.clientY - dragStart.current.y),
    })
  }

  function handleMouseUp() {
    setDragging(false)
  }

  function handleClick() {
    if (scale === 1) {
      setScale(2.5)
    } else {
      setScale(1)
      setPos({ x: 0, y: 0 })
    }
  }

  return (
    <div
      onClick={onCerrar}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div
        onClick={e => e.stopPropagation()}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ position: 'relative', overflow: 'hidden', width: '90vw', height: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <img
          src={foto.src}
          alt={foto.alt}
          onClick={handleClick}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            borderRadius: scale === 1 ? '16px' : '0',
            transform: `scale(${scale}) translate(${pos.x / scale}px, ${pos.y / scale}px)`,
            transition: dragging ? 'none' : 'transform 0.3s',
            cursor: scale === 1 ? 'zoom-in' : dragging ? 'grabbing' : 'grab',
            userSelect: 'none',
            display: 'block',
          }}
          draggable={false}
        />
      </div>

      <button
        onClick={onCerrar}
        style={{ position: 'fixed', top: '1.5rem', right: '1.5rem', background: 'white', border: 'none', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', fontSize: '1.1rem', color: 'var(--rosa-oscuro)', fontWeight: 700, boxShadow: '0 2px 8px rgba(0,0,0,0.3)', zIndex: 2001 }}
      >x</button>

      <div style={{ position: 'fixed', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', borderRadius: '30px', padding: '8px 20px', display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 2001 }}>
        <button onClick={() => { setScale(1); setPos({ x: 0, y: 0 }) }} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'Nunito, sans-serif' }}>Restablecer</button>
        <span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
        <button onClick={() => setScale(s => Math.max(1, s - 0.5))} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.3rem', lineHeight: 1 }}>-</button>
        <span style={{ color: 'white', fontSize: '0.85rem', minWidth: '40px', textAlign: 'center' }}>{Math.round(scale * 100)}%</span>
        <button onClick={() => setScale(s => Math.min(4, s + 0.5))} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.3rem', lineHeight: 1 }}>+</button>
        <span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>Scroll para zoom</span>
      </div>
    </div>
  )
}

function Galeria() {
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

  return (
    <section id="galeria" style={{ padding: '5rem 2rem', background: 'var(--crema)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ display: 'inline-block', background: 'var(--rosa-claro)', color: 'var(--rosa-oscuro)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', padding: '5px 14px', borderRadius: '20px', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Galeria
        </div>

        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--texto)', marginBottom: '0.5rem' }}>
          Nuestras creaciones
        </h2>

        <p style={{ color: 'var(--texto-claro)', fontSize: '1rem', fontWeight: 300, marginBottom: '3rem', lineHeight: 1.7 }}>
          Haz clic en cualquier imagen para verla mejor.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {fotos.map(foto => (
            <div
              key={foto.id}
              onClick={() => setFotoSeleccionada(foto)}
              style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #f5dde4', cursor: 'zoom-in', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.02)'
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(232,67,122,0.15)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <img src={foto.src} alt={foto.alt} style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center', background: 'white', borderRadius: '16px', padding: '2rem', border: '1px dashed #f0d0d8', color: 'var(--texto-claro)', fontSize: '0.9rem', fontWeight: 300 }}>
          Proximamente mas fotos de nuestras creaciones.
        </div>

      </div>

      {fotoSeleccionada && (
        <LightBox foto={fotoSeleccionada} onCerrar={() => setFotoSeleccionada(null)} />
      )}
    </section>
  )
}

export default Galeria
