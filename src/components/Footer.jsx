function Footer() {
  return (
    <footer style={{
      background: '#3D2028',
      color: '#f0c0cc',
      padding: '2.5rem 2rem',
      textAlign: 'center'
    }}>
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.5rem',
        color: 'white',
        marginBottom: '0.5rem'
      }}>
        <img src="/images/LogoNinis1.png" alt="Ninis Pastelitos" style={{ height: '60px', objectFit: 'contain', marginBottom: '0.5rem' }} />
      </div>
      <p style={{ fontSize: '0.85rem', opacity: 0.6, fontWeight: 300 }}>
        Hecho con amor · Tlaxcala, Mexico · ninispastelitos@gmail.com
      </p>
    </footer>
  )
}

export default Footer