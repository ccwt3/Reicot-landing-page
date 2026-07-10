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
        <aside className="rail hero__rail elpepe" aria-label="Resumen Reicot">
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
                En Reicot desarrollamos sistemas al milimetro para <strong>Pequeñas y Medianas Empresas</strong>, asi como para <strong>emprendedores</strong> que necesitan no solo una pagina web, si no un sistema confiable para mantener sus operacion del dia a dia.
              </p>
            </article>
            <article>
              <p className="kicker">Contexto de valor</p>
              <p>
                A este punto el software hecho solo para usted no es un lujo, si no una <strong>necesidad</strong>, desde llevar control sobre que entra y que sale, hasta poder mantener comunicacion con su equipo interno.
                <br /><strong>Acelerar</strong> procesos que manualmente llevan mucho tiempo y personal que podrian ser utilizados en situaciones mucho mas productivas.
              </p>
            </article>
          </div>
        </div>

        <aside className="hero__visual">
          <OrbitalDiagram />
          <article className="hero__editorial">
            <p className="kicker">Nota editorial</p>
            <p>
              <strong>Software a la medida.</strong>
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
