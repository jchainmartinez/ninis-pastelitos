import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', position: 'relative',
      overflow: 'hidden', padding: '80px 2rem 2rem',
      background: 'radial-gradient(ellipse at 80% 50%, #fde8ed 0%, #fff8f0 60%)'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '700px', position: 'relative', zIndex: 1 }}>

        <div style={{
          display: 'inline-block', background: 'var(--rosa-claro)',
          color: 'var(--rosa-oscuro)', fontSize: '0.8rem', fontWeight: 600,
          letterSpacing: '1px', padding: '6px 16px', borderRadius: '20px',
          marginBottom: '1.5rem', textTransform: 'uppercase'
        }}>
          ✨ Hecho con amor artesanal
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2.8rem, 6vw, 5rem)',
          lineHeight: 1.1, color: 'var(--texto)', marginBottom: '1.2rem'
        }}>
          Pasteles que{' '}
          <em style={{ color: 'var(--rosa)' }}>enamoran</em>
          {' '}en cada bocado
        </h1>

        <p style={{
          fontSize: '1.1rem', color: 'var(--texto-claro)',
          lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300
        }}>
          Nos especializamos en la elaboración de pasteles únicos y personalizados 
          que harán de tus celebraciones momentos inolvidables. 🎂✨ ¡Déjanos endulzar tus mejores momentos!
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/tienda" style={{
            background: 'var(--rosa)', color: 'white',
            padding: '14px 32px', borderRadius: '30px',
            textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem'
          }}>
            Ver catálogo
          </Link>
          <Link to="/contacto" style={{
            background: 'transparent', color: 'var(--rosa-oscuro)',
            padding: '14px 32px', borderRadius: '30px',
            textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem',
            border: '2px solid var(--rosa)'
          }}>
            Hacer un pedido
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Hero