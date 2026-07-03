function Footer() {
  return (
    <footer style={{ background: '#3D2028', color: '#f0c0cc', padding: '2.5rem 2rem', textAlign: 'center' }}>

      <img src="/images/LogoNinis1.png" alt="Ninis Pastelitos" style={{ height: '60px', objectFit: 'contain', marginBottom: '1rem' }} />

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>

        <a href="https://www.facebook.com/ninis.pastelitos" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#1877F2', color: 'white', padding: '8px 20px', borderRadius: '20px', textDecoration: 'none', fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: '0.9rem' }}>
          Facebook
        </a>

        <a href="https://www.tiktok.com/@ninis.pastelitos" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#000000', color: 'white', padding: '8px 20px', borderRadius: '20px', textDecoration: 'none', fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: '0.9rem' }}>
          TikTok
        </a>

      </div>

      <p style={{ fontSize: '0.85rem', opacity: 0.6, fontWeight: 300 }}>
        Hecho con amor · Cuapiaxtla, Tlaxcala, Mexico · ninispastelitos@gmail.com
      </p>

    </footer>
  )
}

export default Footer