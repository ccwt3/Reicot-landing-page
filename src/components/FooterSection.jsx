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
