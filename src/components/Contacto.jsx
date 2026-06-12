function Contacto() {
  return (
    <section id="contacto" style={{ padding: '5rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ display: 'inline-block', background: 'var(--rosa-claro)', color: 'var(--rosa-oscuro)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px', padding: '5px 14px', borderRadius: '20px', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Contactanos
        </div>

        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--texto)', marginBottom: '0.5rem' }}>
          Haz tu pedido
        </h2>

        <p style={{ color: 'var(--texto-claro)', fontSize: '1rem', fontWeight: 300, marginBottom: '3rem', lineHeight: 1.7 }}>
          Tienes un evento especial... Escribenos y con gusto te cotizamos.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--rosa-claro)', width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>📧</div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--texto-claro)', textTransform: 'uppercase', marginBottom: '3px' }}>Correo</div>
                <div style={{ fontWeight: 600, color: 'var(--texto)' }}>ninispastelitos@gmail.com</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--rosa-claro)', width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>🕐</div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--texto-claro)', textTransform: 'uppercase', marginBottom: '3px' }}>Horario</div>
                <div style={{ fontWeight: 600, color: 'var(--texto)' }}>Lunes a Sabado: 10am a 2pm y de 3pm a 9pm</div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--texto-claro)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Ubicacion</div>
              <a href="https://maps.app.goo.gl/5XPpDcY7AfyhH5by9" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div style={{ background: 'var(--rosa-claro)', borderRadius: '16px', border: '2px solid #f5dde4', cursor: 'pointer' }}>
                  <div style={{ height: '160px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '3rem' }}>🗺</span>
                    <span style={{ fontWeight: 600, color: 'var(--rosa-oscuro)', fontSize: '0.95rem' }}>Ver en Google Maps</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--texto-claro)', fontWeight: 300 }}>Toca para abrir la ubicacion</span>
                  </div>
                </div>
              </a>
            </div>

            <a href="https://wa.me/522761071624" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#25D366', color: 'white', padding: '14px 28px', borderRadius: '30px', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem', width: 'fit-content' }}>
              Pedir por WhatsApp
            </a>

          </div>

          <div style={{ background: 'var(--crema)', borderRadius: '20px', padding: '2rem', border: '1px solid #f5dde4' }}>

            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--texto-claro)', textTransform: 'uppercase', marginBottom: '6px' }}>Nombre</label>
              <input type="text" placeholder="Nombre completo" style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #f0d0d8', borderRadius: '10px', fontFamily: 'Nunito, sans-serif', fontSize: '0.9rem', outline: 'none' }} />
            </div>

            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--texto-claro)', textTransform: 'uppercase', marginBottom: '6px' }}>Correo</label>
              <input type="email" placeholder="correo@ejemplo.com" style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #f0d0d8', borderRadius: '10px', fontFamily: 'Nunito, sans-serif', fontSize: '0.9rem', outline: 'none' }} />
            </div>

            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--texto-claro)', textTransform: 'uppercase', marginBottom: '6px' }}>Telefono</label>
              <input type="tel" placeholder="Tu numero telefonico" style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #f0d0d8', borderRadius: '10px', fontFamily: 'Nunito, sans-serif', fontSize: '0.9rem', outline: 'none' }} />
            </div>

            

            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--texto-claro)', textTransform: 'uppercase', marginBottom: '6px' }}>Tipo de pedido</label>
              <select style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #f0d0d8', borderRadius: '10px', fontFamily: 'Nunito, sans-serif', fontSize: '0.9rem', outline: 'none', background: 'white' }}>
                <option>Pastel de cumpleaños</option>
                <option>Cupcakes</option>
                <option>Pay</option>
                <option>Galletas</option>
                <option>Panque</option>
                <option>Gelatina</option>
                <option>Otro</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--texto-claro)', textTransform: 'uppercase', marginBottom: '6px' }}>Mensaje</label>
              <textarea placeholder="Cuentanos sobre tu evento, fecha, sabores preferidos..." rows={4} style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #f0d0d8', borderRadius: '10px', fontFamily: 'Nunito, sans-serif', fontSize: '0.9rem', outline: 'none', resize: 'vertical' }} />
            </div>

            <button style={{ width: '100%', background: 'var(--rosa)', color: 'white', border: 'none', padding: '13px', borderRadius: '30px', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer' }}>
              Enviar pedido
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
