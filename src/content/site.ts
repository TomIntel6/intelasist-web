/**
 * Contenido centralizado del sitio.
 * Cada bloque lleva `status` para que dirección sepa qué está verificado.
 *  - 'verified'  : extraído del sitio público vigente (intelasist.com, 25/11/2026)
 *  - 'proposed'  : redacción propuesta en el brief; requiere aprobación
 *  - 'pending'   : dato que dirección debe entregar; no se publica en producción
 */
export type Status = 'verified' | 'proposed' | 'pending';

export const company = {
  brand: 'Intelasist',
  legalName: 'Intel Asistencia, S.A.',
  country: 'Panamá',
  phone: { display: '+507 397-0612', href: 'tel:+5073970612', status: 'verified' as Status },
  email: { display: 'info@intelasist.com', href: 'mailto:info@intelasist.com', status: 'verified' as Status },
  availability: { text: 'Te acompañamos 24/7', status: 'verified' as Status },
  mission: {
    text: 'Ofrecer asistencia inmediata, segura y confiable, con un servicio humano y de primera que le dé tranquilidad total a nuestros clientes cuando más lo necesitan.',
    status: 'verified' as Status,
  },
  tagline: { text: 'Transforma tu Asistencia', status: 'verified' as Status },
  // TODO(dirección): ubicación pública, redes oficiales, horario comercial.
  address: { text: 'Panamá', status: 'pending' as Status },
  social: [] as { label: string; href: string }[],
};

export const nav = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Proveedores', href: '/proveedores' },
  { label: 'Contacto', href: '/contacto' },
];

export const ctaPrimary = { label: 'Ser proveedor', href: '/proveedores' };

export const hero = {
  eyebrow: 'Soluciones de asistencia en Panamá',
  title: 'Asistencia que responde cuando más importa.',
  text: 'Conectamos empresas y personas con soluciones de asistencia vial, hogar y salud.',
  cta: { label: 'Conoce nuestros servicios', href: '/servicios' },
  link: { label: 'Únete a nuestra red', href: '/proveedores' },
  status: 'proposed' as Status,
};

export const trust = [
  { label: 'Atención 24/7', detail: 'Te acompañamos en todo momento', status: 'verified' as Status },
  { label: 'Operación en Panamá', detail: 'Empresa panameña, respuesta local', status: 'verified' as Status },
  { label: 'Servicio humano', detail: 'Trato directo y seguimiento de cada caso', status: 'proposed' as Status },
];

export interface Service {
  slug: 'asistencia-vial' | 'asistencia-hogar' | 'asistencia-salud';
  name: string;
  short: string;          // una frase (tarjeta portada)
  title: string;          // <title>
  description: string;    // meta description
  h1: string;
  intro: string;
  audience: string[];
  includes: string[];
  excludes: string[];
  faq: { q: string; a: string }[];
  status: Status;
}

export const services: Service[] = [
  {
    slug: 'asistencia-vial',
    name: 'Asistencia vial',
    short: 'Respaldo ante imprevistos en carretera.',
    title: 'Asistencia vial en Panamá · Intelasist',
    description: 'Coordinación de asistencia vial en Panamá para empresas y sus clientes: respuesta ante imprevistos en carretera con una red de proveedores y seguimiento de cada caso.',
    h1: 'Asistencia vial',
    intro: 'Cuando un vehículo se detiene, lo que importa es la rapidez y la claridad de la respuesta. Coordinamos la atención del incidente de principio a fin, con comunicación directa con la persona asistida.',
    audience: ['Aseguradoras y corredores', 'Flotas y empresas de transporte', 'Concesionarios y programas de lealtad'],
    includes: [
      'Recepción del caso y validación de cobertura según el programa contratado',
      'Coordinación con proveedores de la red en la zona del incidente',
      'Seguimiento hasta el cierre del servicio',
    ],
    excludes: [
      'No somos una aseguradora ni vendemos pólizas',
      'El alcance específico de cada servicio depende del programa acordado con cada empresa',
    ],
    faq: [
      { q: '¿Intelasist presta la asistencia directamente o coordina proveedores?', a: 'Coordinamos y damos seguimiento a la atención a través de una red de proveedores, manteniendo comunicación con la persona asistida y con la empresa contratante.' },
      { q: '¿Cómo solicita una empresa un programa de asistencia vial?', a: 'Escríbenos a info@intelasist.com o llama al +507 397-0612 y te orientamos según el tipo de operación y el alcance que necesitas.' },
    ],
    status: 'proposed',
  },
  {
    slug: 'asistencia-hogar',
    name: 'Asistencia hogar',
    short: 'Coordinación de asistencia ante necesidades del hogar.',
    title: 'Asistencia para el hogar en Panamá · Intelasist',
    description: 'Coordinación de asistencia para el hogar en Panamá: atención de necesidades domésticas a través de una red de proveedores, con seguimiento de cada caso.',
    h1: 'Asistencia hogar',
    intro: 'Un imprevisto en casa necesita una respuesta ordenada: quién atiende, cuándo y cómo. Coordinamos la atención con proveedores de la red y acompañamos el caso hasta su cierre.',
    audience: ['Aseguradoras y programas de protección', 'Bancos y emisores de tarjetas', 'Promotoras y administradoras de propiedades'],
    includes: [
      'Recepción de la solicitud y confirmación del alcance del programa',
      'Asignación de un proveedor de la red según la necesidad y la zona',
      'Comunicación con la persona asistida y seguimiento del servicio',
    ],
    excludes: [
      'El detalle de oficios y eventos cubiertos se define en cada programa',
      'No sustituye seguros de propiedad ni garantías de fabricante',
    ],
    faq: [
      { q: '¿Qué tipo de necesidades del hogar pueden coordinarse?', a: 'Depende del programa contratado por cada empresa. Conversemos sobre tu operación para definir el alcance adecuado.' },
      { q: '¿Cómo se incorpora un proveedor de servicios para el hogar?', a: 'A través de la página de proveedores: completa la solicitud y nuestro equipo te contactará para continuar el proceso.' },
    ],
    status: 'proposed',
  },
  {
    slug: 'asistencia-salud',
    name: 'Asistencia salud',
    short: 'Orientación y coordinación de servicios de asistencia en salud.',
    title: 'Asistencia en salud en Panamá · Intelasist',
    description: 'Orientación y coordinación de servicios de asistencia en salud en Panamá para empresas y sus beneficiarios. Coordinación de asistencia, no prestación médica ni seguro.',
    h1: 'Asistencia salud',
    intro: 'Orientamos y coordinamos servicios de asistencia en salud según el programa de cada empresa. Nuestra función es facilitar el acceso y acompañar el caso; la atención médica la brindan profesionales y centros habilitados.',
    audience: ['Aseguradoras y planes de beneficios', 'Empresas con programas para colaboradores', 'Organizaciones con membresías o afiliados'],
    includes: [
      'Orientación inicial y registro del caso',
      'Coordinación con proveedores de la red conforme al programa',
      'Seguimiento y cierre del caso',
    ],
    excludes: [
      'Intelasist no presta atención médica ni es un seguro de salud',
      'En una emergencia médica, contacta de inmediato a los servicios de emergencia de tu localidad',
    ],
    faq: [
      { q: '¿Intelasist es un seguro de salud?', a: 'No. Coordinamos servicios de asistencia en salud definidos en el programa de cada empresa. No emitimos pólizas ni prestamos atención médica.' },
      { q: '¿Qué ocurre en una emergencia?', a: 'Ante una emergencia médica, contacta primero a los servicios de emergencia de tu localidad. Luego, si tu programa lo contempla, comunícate con nosotros para la coordinación.' },
    ],
    status: 'proposed',
  },
];

export const process = {
  title: 'Una operación conectada, de principio a fin',
  steps: [
    { n: '01', name: 'Recepción', text: 'Recibimos la solicitud, la registramos y confirmamos el alcance del programa.' },
    { n: '02', name: 'Coordinación', text: 'Asignamos al proveedor adecuado de la red según el tipo de servicio y la zona.' },
    { n: '03', name: 'Seguimiento', text: 'Acompañamos el caso hasta su cierre y mantenemos informadas a las partes.' },
  ],
  status: 'proposed' as Status, // TODO(operaciones): validar pasos y capacidades.
};

export const providers = {
  title: 'Tu experiencia puede hacer la diferencia',
  text: 'Si brindas servicios de asistencia, conoce cómo formar parte de nuestra red.',
  cta: { label: 'Solicitar inscripción', href: '/proveedores#inscripcion' },
  categories: ['Grúas y auxilio vial', 'Servicios para el hogar', 'Servicios de salud y bienestar', 'Otros servicios de asistencia'],
  benefits: [
    { name: 'Demanda real', text: 'Recibes solicitudes coordinadas por nuestro equipo, con la información necesaria para atender.' },
    { name: 'Relación directa', text: 'Comunicación clara con un equipo de operaciones que da seguimiento a cada servicio.' },
    { name: 'Proceso ordenado', text: 'Solicitud, revisión y contacto. Sin promesas de aceptación automática.' },
  ],
  requirements: [
    'Empresa o persona con experiencia comprobable en el servicio que ofrece',
    'Disponibilidad y cobertura definidas por provincia o zona',
    'Disposición a cumplir los estándares de atención de la red',
  ],
  steps: ['Solicitud', 'Revisión', 'Contacto'],
  status: 'proposed' as Status, // TODO(dirección): confirmar categorías, requisitos y destino del formulario.
};

export const provinces = [
  'Bocas del Toro', 'Chiriquí', 'Coclé', 'Colón', 'Darién', 'Herrera', 'Los Santos',
  'Panamá', 'Panamá Oeste', 'Veraguas', 'Guna Yala', 'Emberá-Wounaan', 'Ngäbe-Buglé',
];
