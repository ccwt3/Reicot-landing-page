import { useEffect, useRef } from 'react';

/**
 * Agrega la clase `is-visible` al elemento la primera vez que entra en el
 * viewport, y deja de observar. El CSS usa esa clase para disparar las
 * animaciones de entrada (así los delays cuentan desde que el usuario lo ve,
 * no desde que carga la página).
 */
export default function useInView({ threshold = 0.25, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sin IntersectionObserver (navegadores muy viejos): mostrar de una vez.
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
