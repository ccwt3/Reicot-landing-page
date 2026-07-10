import { services, processSteps, navLinks, metrics } from '../data/content.js';
import ReicotLogo from './ReicotLogo.jsx';
import OrbitalDiagram from './OrbitalDiagram.jsx';

export default function HeroSection() {
  return (
    <section className="hero section-frame" id="top">
      <header className="topbar">
        <div className="topbar__brand">
          <ReicotLogo />
        </div>
        <nav className="nav" aria-label="Principal">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
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
        {metrics.map(([label, value]) => (
          <article key={label}>
            <p className="kicker">{label}</p>
            <strong>{value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
