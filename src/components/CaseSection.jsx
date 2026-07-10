import { caseBullets } from '../data/content.js';
import SystemVisual from './SystemVisual.jsx';

export default function CaseSection() {
  return (
    <section className="case section-frame" id="sistema">
      <div className="case__media">
        <span className="section-number">02</span>
        <SystemVisual />
      </div>
      <div className="case__copy">
        <p className="eyebrow">Caso real / Motorefacciones</p>
        <h2>Un sistema de inventario que reemplazó las hojas de cálculo.</h2>
        <p className="case__intro">
          <strong>Motorefacciones</strong> es un sistema de inventario de refacciones para motos, diseñado y entregado
          de principio a fin: desde el esquema y las migraciones en PostgreSQL hasta la aplicación en producción que
          hoy gestiona stock, precios y tipos de producto.
        </p>

        <ul className="case__list">
          {caseBullets.map(([label, text]) => (
            <li key={label}>
              <span aria-hidden="true">-&gt;</span>
              <p><strong>{label}</strong> {text}</p>
            </li>
          ))}
        </ul>

        <div className="case__actions">
          <a className="outline-button" href="https://motorefacciones.reicot.dev/" target="_blank" rel="noreferrer">
            Ver motorefacciones.reicot.dev
          </a>
          <a className="text-link" href="https://github.com/ccwt3/sm-ponce" target="_blank" rel="noreferrer">
            Código en GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
