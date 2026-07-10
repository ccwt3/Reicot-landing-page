import ReicotLogo from './ReicotLogo.jsx';

export default function FooterSection() {
  return (
    <footer className="footer section-frame" id="contacto">
      <div className="footer__number">04</div>
      <div className="footer__main">
        <p className="eyebrow">Contacto / Siguiente paso</p>
        <h2>Convierte tu operación en un sistema claro, usable y escalable.</h2>

        <div className="footer__details">
          <article>
            <p className="kicker">CTA Principal</p>
            <p>
              No pierda tiempo ni energia en problemas triviales y agende la cita para rescatar su productividad.
            </p>
          </article>
          <article>
            <p className="kicker">Datos de contacto</p>
            <p>
              Correo electronico: <br /> <strong>meetings@reicot.dev</strong>
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
          El objetivo no es saber, si no hacer.
          <strong><br />Software directo de la mente.</strong>
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
