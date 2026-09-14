const services = [
  ["Psicología sanitaria", "Evaluación, orientación y acompañamiento psicológico desde una mirada cercana, humana y profesional."],
  ["Psicología de la vejez", "Acompañamiento emocional en procesos de envejecimiento, pérdidas, cambios vitales y adaptación."],
  ["Estimulación cognitiva", "Trabajo de memoria, atención, lenguaje y funciones ejecutivas adaptado a cada persona."],
  ["Trauma y EMDR", "Intervención especializada para experiencias traumáticas, bloqueos emocionales y recuerdos que siguen pesando."],
  ["Demencias y familias", "Apoyo a personas con deterioro cognitivo y orientación práctica y emocional a sus familias."],
  ["Acompañamiento emocional", "Un espacio seguro para comprender lo que ocurre, ordenar emociones y recuperar recursos personales."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Creonaile Ramos, inicio">
          <span className="brand-mark">CR</span>
          <span className="brand-text">Creonaile Ramos</span>
        </a>
        <nav className="nav">
          <a href="#servicios">Servicios</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#sesiones">Sesiones</a>
          <a href="#contacto" className="nav-cta">Contacto</a>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Psicología sanitaria · acompañamiento emocional</p>
          <h1>Un espacio para volver a ti.</h1>
          <p className="hero-lead">
            Acompañamiento psicológico cercano y profesional para personas adultas,
            mayores y familias. Presencial y online.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contacto">Pedir cita</a>
            <a className="button ghost" href="#servicios">Ver servicios</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-wrap">
            <img src="/creonaile.jpg" alt="Creonaile Ramos" className="portrait" />
          </div>
          <div className="hero-note">
            <span>Atención personalizada</span>
            <strong>Escucha · calma · proceso</strong>
          </div>
        </div>
      </section>

      <section className="intro-strip">
        <p>
          No se trata de encajar en una fórmula, sino de comprender tu historia,
          tus necesidades y tu momento vital.
        </p>
      </section>

      <section id="servicios" className="section services-section">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">Cómo puedo ayudarte</p>
            <h2>Servicios psicológicos</h2>
          </div>
          <p className="section-copy">
            Intervenciones adaptadas a la persona, con una mirada integradora y
            especial atención al trauma, la vejez y los procesos cognitivos.
          </p>
        </div>
        <div className="services-grid">
          {services.map(([title, text], i) => (
            <article className="service-card" key={title}>
              <span className="service-index">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-band">
        <div className="process-intro">
          <p className="eyebrow">El proceso</p>
          <h2>Paso a paso, contigo.</h2>
        </div>
        <div className="process-grid">
          <div><span>01</span><h3>Primera toma de contacto</h3><p>Hablamos de lo que necesitas y resolvemos dudas.</p></div>
          <div><span>02</span><h3>Valoración</h3><p>Comprendemos tu situación, objetivos y contexto.</p></div>
          <div><span>03</span><h3>Intervención</h3><p>Trabajamos con un plan adaptado a tu ritmo.</p></div>
          <div><span>04</span><h3>Seguimiento</h3><p>Revisamos avances y ajustamos el proceso cuando sea necesario.</p></div>
        </div>
      </section>

      <section id="sobre-mi" className="section about-section">
        <div className="about-image-block">
          <img src="/creonaile.jpg" alt="Retrato de Creonaile Ramos" />
        </div>
        <div className="about-copy">
          <p className="eyebrow">Sobre mí</p>
          <h2>Creonaile Ramos</h2>
          <p className="about-role">Psicóloga sanitaria</p>
          <p>
            Trabajo desde una mirada cercana, respetuosa y centrada en la persona.
            Mi objetivo es ofrecer un espacio seguro en el que puedas comprender lo
            que te pasa, recuperar recursos y avanzar con más claridad.
          </p>
          <p>
            Mi práctica integra el acompañamiento emocional con el trabajo sobre
            trauma, envejecimiento, memoria, deterioro cognitivo y apoyo a familias.
          </p>
          <div className="credentials">
            <div><strong>Atención</strong><span>Adultos · mayores · familias</span></div>
            <div><strong>Modalidad</strong><span>Presencial · online</span></div>
            <div><strong>Enfoque</strong><span>Integrador · humano · individualizado</span></div>
          </div>
        </div>
      </section>

      <section id="sesiones" className="section sessions-section">
        <div className="section-heading centered">
          <p className="eyebrow">Sesiones</p>
          <h2>Un formato adaptado a ti</h2>
          <p>
            La duración y frecuencia se ajustan a las necesidades de cada proceso.
          </p>
        </div>
        <div className="pricing-grid">
          <article className="price-card">
            <p className="price-kicker">Sesión individual</p>
            <h3>Psicología sanitaria</h3>
            <p className="price">60€</p>
            <p>Sesión de aproximadamente 50 minutos.</p>
            <a href="#contacto" className="button primary full">Solicitar cita</a>
          </article>
          <article className="price-card featured">
            <p className="price-kicker">Valoración cognitiva</p>
            <h3>Memoria y funciones cognitivas</h3>
            <p className="price">Consultar</p>
            <p>Evaluación y propuesta de intervención adaptada.</p>
            <a href="#contacto" className="button light full">Consultar</a>
          </article>
          <article className="price-card">
            <p className="price-kicker">Acompañamiento familiar</p>
            <h3>Demencias y cuidadores</h3>
            <p className="price">60€</p>
            <p>Orientación emocional y práctica para familias.</p>
            <a href="#contacto" className="button primary full">Solicitar cita</a>
          </article>
        </div>
      </section>

      <section className="quote-section">
        <blockquote>
          “Acompañar no es decirte por dónde ir, sino ayudarte a recuperar la
          confianza para encontrar tu propio camino.”
        </blockquote>
      </section>

      <section id="contacto" className="contact-section">
        <div className="contact-copy">
          <p className="eyebrow">Contacto</p>
          <h2>¿Hablamos?</h2>
          <p>
            Puedes escribirme para contarme brevemente qué necesitas y veremos cuál
            es la mejor forma de empezar.
          </p>
          <div className="contact-links">
            <a href="mailto:contacto@creonaileramos.com">contacto@creonaileramos.com</a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
        <form className="contact-form" action="mailto:contacto@creonaileramos.com" method="post" encType="text/plain">
          <label>Nombre<input type="text" name="nombre" required /></label>
          <label>Email<input type="email" name="email" required /></label>
          <label>Mensaje<textarea name="mensaje" rows={5} required /></label>
          <button type="submit" className="button primary">Enviar mensaje</button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <span className="brand-mark small">CR</span>
          <strong>Creonaile Ramos</strong>
        </div>
        <p>Psicología sanitaria · atención presencial y online</p>
        <p>© {new Date().getFullYear()} Creonaile Ramos</p>
      </footer>
    </main>
  );
}
