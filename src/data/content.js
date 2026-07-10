// Contenido de la landing de Reicot.
// Separado de los componentes para poder editar textos sin tocar el markup.

export const services = ['Desarrollo', 'Software', 'Sistemas internos', 'Automatización'];

export const processSteps = [
  ['01', 'Diagnóstico'],
  ['02', 'Prototipo'],
  ['03', 'Desarrollo'],
  ['04', 'Operación'],
];

export const projects = [
  {
    number: '01',
    name: 'Motorefacciones',
    subtitle: 'Sistema de inventario para refacciones de moto',
    period: 'Abr – Jul 2026',
    description:
      'Aplicación full-stack de inventario llevada de principio a fin: esquema y migraciones en PostgreSQL, backend por capas y despliegue en producción para gestionar stock, precios y tipos de producto. Autorización reforzada con políticas de Row-Level Security y búsqueda de productos paginada, con caché LRU en cliente y actualizaciones optimistas con rollback automático.',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'PostgreSQL RLS', 'Tailwind CSS', 'Zod'],
    live: 'https://motorefacciones.reicot.dev/',
    code: 'https://github.com/ccwt3/sm-ponce',
  },
  {
    number: '02',
    name: 'Silly Picker',
    subtitle: 'Curador de video de YouTube',
    period: 'Ene – Feb 2026',
    description:
      'Selector de video con filtros para agilizar qué ver, alimentado por un pipeline de sourcing automático: Gemini API genera búsquedas dirigidas, la YouTube Data API v3 trae candidatos, y un proceso propio los depura y deduplica en un esquema relacional normalizado.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'YouTube Data API v3', 'Gemini API'],
    live: 'https://youtube-picker.vercel.app/',
    code: 'https://github.com/ccwt3/youtube-picker',
  },
  {
    number: '03',
    name: 'Blog API',
    subtitle: 'Backend REST con publicación por roles',
    period: 'Dic 2025 – Abr 2026',
    description:
      'API REST para un blog multi-rol (User / Author / Admin) con posts, comentarios y flujos de publicación. Esquema modelado en Prisma/PostgreSQL con rotación de refresh tokens (cadena padre/hijo) para reducir el riesgo de reuso de tokens frente a un JWT estático simple.',
    stack: ['TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'bcrypt'],
    code: 'https://github.com/ccwt3/blog-API',
    dashboard: 'https://github.com/ccwt3/Blog-API--dashboard',
  },
];

export const navLinks = [
  ['#servicios', 'Servicios'],
  ['#proceso', 'Proceso'],
  ['#sistema', 'Sistema'],
  ['#proyectos', 'Proyectos'],
  ['#contacto', 'Contacto'],
];

export const metrics = [
  ['Tipo de proyectos', '01'],
  ['Entrega', '02'],
  ['Resultado', '03'],
];

export const caseBullets = [
  ['Problema inicial:', 'control de stock, precios y tipos de producto llevado a mano, sin trazabilidad ni control de acceso real.'],
  ['Solución:', 'app Next.js con backend por capas (rutas, servicios, acceso a datos) y autorización reforzada con Row-Level Security en PostgreSQL.'],
  ['Resultado:', 'búsqueda de productos paginada con caché LRU en cliente y actualizaciones optimistas que revierten solas si falla la petición.'],
];
