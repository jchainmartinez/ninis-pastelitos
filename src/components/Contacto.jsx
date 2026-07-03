import { useState } from 'react'

function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    tipoPedido: 'Pastel de cumpleanos',
    mensaje: ''
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleEnviar() {
    if (!form.nombre || !form.mensaje) {
      alert('Por favor llena al menos tu nombre y mensaje.')
      return
    }
    const texto = `Hola! Me llamo ${form.nombre} y quisiera hacer un pedido.\n\nTipo de pedido: ${form.tipoPedido}\nCorreo: ${form.correo || 'No proporcionado'}\nTelefono: ${form.telefono || 'No proporcionado'}\n\nMensaje: ${form.mensaje}\n\nQuedo en espera de su respuesta. Gracias!`
    const url = `https://wa.me/522761071624?text=${encodeURIComponent(texto)}`
    window.open(url, '_blank')
  }

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    border: '1.5px solid #f0d0d8',
    borderRadius: '10px',
    fontFamily: 'Nunito, sans-serif',
    fontSize: '0.9rem',
    color: 'var(--texto)',
    background: 'white',
    outline: 'none',
    boxSizing: 'border-box'
  }

  const labelStyle = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 700,
    color: 'var(--texto-claro)',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    marginBottom: '6px'
  }

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
          Tienes un evento especial? Escribenos y con gusto te cotizamos.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--rosa-claro)', width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>📧</div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--texto-claro)', textTransform: 'uppercase', marginBottom: '3px' }}>Correo</div>
                <div style={{ fontWeight: 600, color: 'var(--texto)' }}>ninispastelitos@gmail.com</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--rosa-claro)', width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>🕐</div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--texto-claro)', textTransform: 'uppercase', marginBottom: '3px' }}>Horario</div>
                <div style={{ fontWeight: 600, color: 'var(--texto)' }}>Lunes a Sabado: 9am - 7pm</div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--texto-claro)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Ubicacion</div>
              <a href="https://maps.app.goo.gl/5XPpDcY7AfyhH5by9" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div style={{ background: 'var(--rosa-claro)', borderRadius: '16px', border: '2px solid #f5dde4', cursor: 'pointer', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--rosa)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#f5dde4'}
                >
                  <div style={{ height: '160px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '3rem' }}>🗺</span>
                    <span style={{ fontWeight: 600, color: 'var(--rosa-oscuro)', fontSize: '0.95rem' }}>Ver en Google Maps</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--texto-claro)', fontWeight: 300 }}>Toca para abrir la ubicacion</span>
                  </div>
                </div>
              </a>
            </div>

            <a href="https://wa.me/522761071624" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#25D366', color: 'white', padding: '14px 28px', borderRadius: '30px', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem', width: 'fit-content' }}>
              Escribenos por WhatsApp
            </a>

          </div>

          <div style={{ background: 'var(--crema)', borderRadius: '20px', padding: '2rem', border: '1px solid #f5dde4' }}>

            <div style={{ marginBottom: '1.2rem' }}>
              <label style={labelStyle}>Nombre</label>
              <input name="nombre" type="text" placeholder="Tu nombre completo" value={form.nombre} onChange={handleChange} style={inputStyle} />
            </div>

            <div style={{ marginBottom: '1.2rem' }}>
              <label style={labelStyle}>Correo (opcional)</label>
              <input name="correo" type="email" placeholder="correo@ejemplo.com" value={form.correo} onChange={handleChange} style={inputStyle} />
            </div>

            <div style={{ marginBottom: '1.2rem' }}>
              <label style={labelStyle}>Telefono (opcional)</label>
              <input name="telefono" type="tel" placeholder="Tu numero de WhatsApp" value={form.telefono} onChange={handleChange} style={inputStyle} />
            </div>

            <div style={{ marginBottom: '1.2rem' }}>
              <label style={labelStyle}>Tipo de pedido</label>
              <select name="tipoPedido" value={form.tipoPedido} onChange={handleChange} style={inputStyle}>
                <option>Pastel de cumpleanos</option>
                <option>Cupcakes</option>
                <option>Pay</option>
                <option>Galletas</option>
                <option>Panque</option>
                <option>Gelatina</option>
                <option>Otro</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={labelStyle}>Mensaje</label>
              <textarea name="mensaje" placeholder="Cuentanos sobre tu evento, fecha, sabores preferidos..." rows={4} value={form.mensaje} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical' }} />
            </div>

            <button onClick={handleEnviar} style={{ width: '100%', background: '#25D366', color: 'white', border: 'none', padding: '13px', borderRadius: '30px', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer' }}>
              Enviar por WhatsApp
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto