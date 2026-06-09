function Nosotros() {
  return (
    <section id="nosotros" style={{ padding: '5rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{
          display: 'inline-block', background: 'var(--rosa-claro)',
          color: 'var(--rosa-oscuro)', fontSize: '0.75rem', fontWeight: 700,
          letterSpacing: '1.5px', padding: '5px 14px', borderRadius: '20px',
          textTransform: 'uppercase', marginBottom: '1rem'
        }}>
          Quiénes somos
        </div>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
          color: 'var(--texto)', marginBottom: '0.5rem'
        }}>
          Amor en cada detalle
        </h2>

        <p style={{
          color: 'var(--texto-claro)', fontSize: '1rem',
          fontWeight: 300, marginBottom: '3rem', lineHeight: 1.7
        }}>
          Somos una pastelería artesanal con el compromiso de endulzar tus momentos más especiales.
        </p>

        {/* VIDEO */}
        <div style={{ marginBottom: '3rem', borderRadius: '20px', overflow: 'hidden' }}>
          <video
            controls
            style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', display: 'block' }}
          >
            <source src="/videos/ninis01.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>

        {/* IMAGEN DE VALORES */}
        <div style={{ borderRadius: '20px', overflow: 'hidden', marginBottom: '3rem' }}>
          <img
            src="/images/valores.png"
            alt="Nuestros valores"
            style={{ width: '100%', display: 'block', borderRadius: '20px' }}
          />
        </div>

        {/* VALORES */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {[
            { icon: '💖', titulo: 'Amor en cada receta', texto: 'Cada pastel se crea con el mismo cariño con el que se celebra cada momento especial.' },
            { icon: '✨', titulo: 'Honestidad y cercanía', texto: 'Trabajamos con ingredientes frescos y transparencia total con nuestros clientes.' },
            { icon: '🎨', titulo: 'Creatividad sin límites', texto: 'Personalizamos cada diseño para que sea único y refleje tu personalidad.' },
          ].map(v => (
            <div key={v.titulo} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{
                background: 'var(--rosa-claro)', color: 'var(--rosa)',
                width: '44px', height: '44px', borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem', flexShrink: 0
              }}>
                {v.icon}
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--texto)', marginBottom: '4px' }}>
                  {v.titulo}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--texto-claro)', lineHeight: 1.7, fontWeight: 300 }}>
                  {v.texto}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Nosotros