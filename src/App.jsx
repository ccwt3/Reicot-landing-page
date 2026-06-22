const services = ['Desarrollo', 'Software', 'Sistemas internos', 'Automatización'];

const processSteps = [
  ['01', 'Diagnóstico'],
  ['02', 'Prototipo'],
  ['03', 'Desarrollo'],
  ['04', 'Operación'],
];

function ReicotLogo({ compact = false }) {
  return (
    <a className={`logo ${compact ? 'logo--compact' : ''}`} href="#top" aria-label="Reicot">
      <img src="/reicotLogoGPT.svg" alt="Reicot" />
    </a>
  );
}

function OrbitalDiagram() {
  return (
    <div className="orbital" aria-hidden="true">
      <span className="orbital__ring orbital__ring--outer" />
      <span className="orbital__ring orbital__ring--middle" />
      <span className="orbital__ring orbital__ring--inner" />
      <span className="orbital__core">Del problema al sistema operativo</span>
      <span className="orbital__dot orbital__dot--red" />
      <span className="orbital__dot orbital__dot--one" />
      <span className="orbital__dot orbital__dot--two" />
      <span className="orbital__dot orbital__dot--three" />
      <span className="orbital__line orbital__line--one" />
      <span className="orbital__line orbital__line--two" />
      <span className="orbital__label">Arquitectura / Producto / Datos</span>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero section-frame" id="top">
      <header className="topbar">
        <div className="topbar__brand">
          <ReicotLogo />
        </div>
        <nav className="nav" aria-label="Principal">
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#sistema">Sistema</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="pill pill--dark" href="#contacto">
          Iniciar diagnóstico <span aria-hidden="true" />
        </a>
      </header>

      <div className="hero__grid">
        <aside className="rail hero__rail" aria-label="Resumen Reicot">
          <div>
            <strong>Reicot /<br />2026</strong>
            <ul>
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <ol>
            {processSteps.map(([number, label]) => (
              <li key={number}>
                <span>{number}</span>
                {label}
              </li>
            ))}
          </ol>
        </aside>

        <div className="hero__content">
          <p className="eyebrow"><span />Software Studio / Sistemas a medida</p>
          <h1 className="hero__title">
            Software<br />
            que ordena <em>operaciones.</em>
          </h1>

          <div className="hero__notes">
            <article>
              <p className="kicker">Propuesta Principal</p>
              <p>
                <strong>[Qué debe ir: una promesa clara sobre qué problema resuelve Reicot y para quién.]</strong>{' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed justo vitae nibh posuere
                cursus.
              </p>
            </article>
            <article>
              <p className="kicker">Contexto de valor</p>
              <p>
                <strong>[Qué debe ir: explicación breve de por qué el software a medida mejora procesos, ventas o
                control interno.]</strong>{' '}
                Praesent non sem ut augue tincidunt finibus. Donec at neque id lacus mattis posuere.
              </p>
            </article>
          </div>
        </div>

        <aside className="hero__visual">
          <OrbitalDiagram />
          <article className="hero__editorial">
            <p className="kicker">Nota editorial</p>
            <p>
              <strong>[Qué debe ir: frase corta que explique el enfoque de Reicot.]</strong> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
          </article>
        </aside>
      </div>

      <div className="metric-strip" aria-label="Métricas destacadas">
        <article>
          <p className="kicker">Tipo de proyectos</p>
          <strong>01</strong>
        </article>
        <article>
          <p className="kicker">Entrega</p>
          <strong>02</strong>
        </article>
        <article>
          <p className="kicker">Resultado</p>
          <strong>03</strong>
        </article>
      </div>
    </section>
  );
}

function SystemVisual() {
  return (
    <div className="system-card" aria-label="Reicot System View">
      <span className="system-card__grid system-card__grid--one" aria-hidden="true" />
      <span className="system-card__grid system-card__grid--two" aria-hidden="true" />
      <span className="system-card__grid system-card__grid--three" aria-hidden="true" />
      <span className="system-card__red" aria-hidden="true" />
      <span className="system-card__line" aria-hidden="true" />
      <span className="system-card__orbit" aria-hidden="true" />
      <strong>
        REICOT<br />
        SYSTEM VIEW
      </strong>
    </div>
  );
}

function CaseSection() {
  const bullets = [
    '[Qué debe ir: problema inicial del cliente.] Lorem ipsum dolor sit amet, consectetur.',
    '[Qué debe ir: solución propuesta por Reicot.] Maecenas aliquet sem at ex dictum, sed egestas turpis lacinia.',
    '[Qué debe ir: resultado o métrica esperada.] Aliquam erat volutpat. Nam tincidunt justo in nibh consequat.',
  ];

  return (
    <section className="case section-frame" id="sistema">
      <div className="case__media">
        <span className="section-number">02</span>
        <SystemVisual />
      </div>
      <div className="case__copy">
        <p className="eyebrow">Sistema destacado / Placeholder</p>
        <h2>Un caso visual sin depender de capturas genéricas.</h2>
        <p className="case__intro">
          <strong>[Qué debe ir: presentar un proyecto, caso de uso o tipo de sistema que Reicot quiere vender.]</strong>{' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper nunc vel lacus tristique, vitae
          elementum velit elementum.
        </p>

        <ul className="case__list">
          {bullets.map((bullet) => (
            <li key={bullet}>
              <span aria-hidden="true">-&gt;</span>
              <p><strong>{bullet.slice(0, bullet.indexOf(']') + 1)}</strong>{bullet.slice(bullet.indexOf(']') + 1)}</p>
            </li>
          ))}
        </ul>

        <a className="outline-button" href="#contacto">Ver estructura del proyecto</a>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="footer section-frame" id="contacto">
      <div className="footer__number">03</div>
      <div className="footer__main">
        <p className="eyebrow">Contacto / Siguiente paso</p>
        <h2>Convierte tu operación en un sistema claro, usable y escalable.</h2>

        <div className="footer__details">
          <article>
            <p className="kicker">CTA Principal</p>
            <p>
              <strong>[Qué debe ir: invitación directa a agendar llamada, pedir diagnóstico o cotizar.]</strong>{' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </article>
          <article>
            <p className="kicker">Datos de contacto</p>
            <p>
              <strong>[Qué debe ir: WhatsApp, correo, ciudad, horario o formulario.]</strong> Praesent consequat
              dolor nec lorem congue, vitae sodales sapien efficitur.
            </p>
          </article>
        </div>

        <div className="footer__actions">
          <a className="pill pill--dark" href="mailto:hola@reicot.com">
            Solicitar diagnóstico <span aria-hidden="true" />
          </a>
          <a className="pill pill--light" href="#sistema">Explorar servicios</a>
        </div>
      </div>

      <aside className="footer__side">
        <ReicotLogo compact />
        <p>
          <strong>[Qué debe ir: cierre de marca en una frase.]</strong> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer nisl efficitur tincidunt.
        </p>
      </aside>

      <div className="footer__legal">
        <span>© Reicot. Software studio / Sistemas a medida. 2026</span>
        <nav aria-label="Legal">
          <a href="#contacto">Aviso de privacidad</a>
          <a href="#contacto">Términos</a>
          <a href="#contacto">Cookies</a>
          <a href="#contacto">Legal</a>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="site">
      <HeroSection />
      <CaseSection />
      <FooterSection />
    </main>
  );
}
