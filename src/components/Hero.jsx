import { Link } from 'react-router-dom'

const banners = [
  { id: 1, src: '/images/portadaOct.jpg', alt: 'Temporada Otono' },
]

function Hero() {
  return (
    <>
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', position: 'relative',
        overflow: 'hidden', padding: '80px 2rem 2rem',
        background: 'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/images/fondo01.png) center/cover no-repeat'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '700px', position: 'relative', zIndex: 1 }}>

          <div style={{
            display: 'inline-block', background: 'var(--rosa-claro)',
            color: 'var(--rosa-oscuro)', fontSize: '0.8rem', fontWeight: 600,
            letterSpacing: '1px', padding: '6px 16px', borderRadius: '20px',
            marginBottom: '1.5rem', textTransform: 'uppercase'
          }}>
            Dejanos endulzar tus mejores momentos!
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            lineHeight: 1.1, color: 'white', marginBottom: '1.2rem'
          }}>
            Pasteles que{' '}
            <em style={{ color: 'var(--rosa)' }}>enamoran</em>
            {' '}en cada bocado
          </h1>

          <p style={{
            fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300
          }}>
            Nos especializamos en la elaboracion de pasteles unicos y personalizados
            que haran de tus celebraciones momentos inolvidables.
          </p>

          <div className="hero-btns" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/tienda" style={{
              background: 'var(--rosa)', color: 'white',
              padding: '14px 32px', borderRadius: '30px',
              textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem'
            }}>
              Ver catalogo
            </Link>
            <Link to="/contacto" style={{
              background: 'transparent', color: 'white',
              padding: '14px 32px', borderRadius: '30px',
              textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem',
              border: '2px solid white'
            }}>
              Hacer un pedido
            </Link>
          </div>

        </div>
      </section>

      {/* BANNER DE TEMPORADA */}
      <div style={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
        <img
          src={banners[0].src}
          alt={banners[0].alt}
          style={{ width: '100%', maxHeight: '700px', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(232,67,122,0.85)', color: 'white', padding: '6px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px' }}>
          TEMPORADA
        </div>
      </div>

      {/* ANUNCIO CURSO */}
      <div style={{ background: '#f9f0e6', padding: '3rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#e8a045', color: 'white', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', padding: '5px 14px', borderRadius: '20px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Proximo evento
          </div>
          <img
            src="/images/anuncioCurso.jpg"
            alt="Taller Pan de Muerto"
            style={{ width: '100%', maxWidth: '480px', borderRadius: '20px', boxShadow: '0 12px 40px rgba(0,0,0,0.15)', display: 'block', margin: '0 auto' }}
          />
          <a
            href="https://wa.me/522761071624?text=Hola!%20Me%20interesa%20el%20Taller%20de%20Pan%20de%20Muerto%2C%20quisiera%20mas%20informacion."
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', marginTop: '1.5rem', background: '#25D366', color: 'white', padding: '12px 28px', borderRadius: '30px', textDecoration: 'none', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.95rem' }}
          >
            Quiero inscribirme
          </a>
        </div>
      </div>

    </>
  )
}

export default Hero