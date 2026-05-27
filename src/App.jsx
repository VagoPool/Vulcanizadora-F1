import './App.css'
import { useEffect, useRef } from 'react'

function Particles() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    const TOTAL = 50
    const dots = Array.from({ length: TOTAL }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
    }))
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < TOTAL; i++) {
        const a = dots[i]
        a.x += a.vx; a.y += a.vy
        if (a.x < 0 || a.x > canvas.width) a.vx *= -1
        if (a.y < 0 || a.y > canvas.height) a.vy *= -1
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(200,0,0,0.25)'; ctx.fill()
        for (let j = i + 1; j < TOTAL; j++) {
          const b = dots[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 120) {
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(200,0,0,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5; ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} style={{ position:'fixed', top:0, left:0, width:'100%', height:'100%', zIndex:0, pointerEvents:'none' }} />
}

const servicios = [
  { icon: '🔧', texto: 'Reparación y cambio de llantas' },
  { icon: '💨', texto: 'Cambio de bolsas de aire (suspensión y retráctil)' },
  { icon: '⚙️', texto: 'Reparación de válvula niveladora y repartidora' },
  { icon: '🔩', texto: 'Cambio de roto chamber y matracas' },
  { icon: '🛞', texto: 'Cambio de balatas, masas y baleros' },
  { icon: '⚡', texto: 'Pase de corriente' },
  { icon: '🎯', texto: 'Calibración completa de neumáticos' },
  { icon: '🚦', texto: 'Semáforo de unidades' },
  { icon: '🛢️', texto: 'Sellado de fugas de aceite en tapas de masa' },
  { icon: '📦', texto: 'Reparación de filtración en caja seca' },
  { icon: '💡', texto: 'Corrección de cortos y cambio de plafones' },
  { icon: '🚛', texto: 'Cambio de loderas y fabricación de porta loderas' },
  { icon: '🔨', texto: 'Soldadura de cajas, remolques y porta contenedores' },
  { icon: '🛡️', texto: 'Engrasado completo' },
  { icon: '✅', texto: 'Servicios preventivos' },
]

const galeria = [
  { titulo: '🔧 Reparaciones', fotos: ['/repar1.jpg', '/repar2.jpg', '/repar3.jpg'] },
  { titulo: '💨 Bolsas de Aire', fotos: ['/bolsas1.jpg', '/bolsas2.jpg', '/bolsas3.jpg'] },
  { titulo: '⚙️ Válvulas Niveladoras y Repartidoras', fotos: ['/valv1.jpg'] },
  { titulo: '🔩 Roto Chamber', fotos: ['/roto1.jpg', '/roto2.jpg'] },
]

const estados = ['Tijuana','Querétaro','Guadalajara','Guanajuato','León','San Luis Potosí','Monterrey','Ciudad de México','Manzanillo','Guatemala']

function App() {
  return (
    <div className="app">
      <Particles />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <img src="/logo.png" alt="Vulcanizadora Fórmula 1" className="hero-logo" />
          <h1 className="hero-title">Vulcanizadora Fórmula 1</h1>
          <p className="hero-sub">Servicio en base y auxilio vial móvil · 24/7</p>
          <div className="hero-badges">
            <span>🏁 Servicio 24/7</span>
            <span>🗺️ 10 Estados</span>
            <span>🚛 Auxilio Vial</span>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="section" id="servicios">
        <h2 className="section-title">Servicios</h2>
        <p className="section-sub">Atención en base y en carretera donde nos necesites</p>
        <div className="servicios-grid">
          {servicios.map((s, i) => (
            <div key={i} className="servicio-card">
              <span className="servicio-icon">{s.icon}</span>
              <span className="servicio-texto">{s.texto}</span>
            </div>
          ))}
        </div>
      </section>

      {/* GALERÍA */}
      <section className="section section-dark" id="galeria">
        <h2 className="section-title">Galería de Servicios</h2>
        <p className="section-sub">Conoce nuestro trabajo en campo</p>
        {galeria.map((bloque, i) => (
          <div key={i} className="galeria-bloque">
            <div className="galeria-bloque-titulo">{bloque.titulo}</div>
            <div className="galeria-fotos">
              {bloque.fotos.map((foto, j) => (
                <img key={j} src={foto} alt={bloque.titulo} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* COBERTURA */}
      <section className="section" id="cobertura">
        <h2 className="section-title">Cobertura</h2>
        <p className="section-sub">Presencia en 10 estados de la república</p>
        <div className="estados-grid">
          {estados.map((e, i) => (
            <div key={i} className="estado-chip">📍 {e}</div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section className="section section-dark" id="contacto">
        <h2 className="section-title">Contacto</h2>
        <p className="section-sub">Estamos disponibles las 24 horas, los 7 días de la semana</p>
        <div className="contacto-wrap">
          <button className="btn-contacto-principal" onClick={() => {
            const menu = document.getElementById('contacto-menu')
            menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex'
          }}>
            📲 Contáctanos
          </button>
          <div id="contacto-menu" className="contacto-menu">
            <a href="https://wa.me/524775746590" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              💬 WhatsApp · 477 574 65 90
            </a>
            <a href="https://wa.me/524776494870" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              💬 WhatsApp · 477 649 48 70
            </a>
            <a href="mailto:vulcanizadoraf2@hotmail.com" className="btn-correo">
              📧 vulcanizadoraf2@hotmail.com
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">© 2025 Vulcanizadora Fórmula 1 · Servicio 24/7</footer>
    </div>
  )
}

export default App