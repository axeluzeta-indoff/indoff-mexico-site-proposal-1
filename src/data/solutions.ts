export type Solution = {
  slug: string;
  title: string;
  description: string;
  heroImg?: string; // opcional
  subtitle?: string; // opcional (el texto del mock)
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "estanterias",
    title: "Estantería",
    description:
      "Productos y configuraciones para almacenamiento industrial: selectivo, drive-in, push-back, etc.",
    heroImg: "/images/solutions/solutions-estanterias.jpg",
    subtitle:
      "Agiliza tu producción, con un sistema de almacenamiento más productivo, ahorra y aprovecha todo el espacio, aprende a acomodar y ordenar cada estante.",
  },
  {
    slug: "gruas",
    title: "Grúas",
    description:
      "Sistemas de izaje y movimiento para cargas industriales con soluciones a medida.",
    heroImg: "/images/solutions/solutions-gruas.jpeg",
  },
  {
    slug: "transportadores",
    title: "Transportadores",
    description:
      "Bandas, rodillos y líneas de transporte para optimizar flujo y productividad.",
    heroImg: "/images/solutions/solutions-transportadores.jpeg",
  },
  {
    slug: "mesas-elevadoras",
    title: "Mesas Elevadoras",
    description:
      "Plataformas y equipos de elevación para manejo seguro y eficiente de materiales.",
    heroImg: "/images/solutions/solutions-mesas.jpg",
  },
  {
    slug: "contenedores",
    title: "Contenedores",
    description:
      "Contenedores industriales, bins y soluciones para almacenamiento y surtido.",
    heroImg: "/images/solutions/solutions-contenedores.jpeg",
  },
  {
    slug: "andenes",
    title: "Andenes",
    description:
      "Equipamiento para andenes: niveladores, rampas, sellos y seguridad de carga.",
    heroImg: "/images/solutions/solutions-andenes.jpeg",
  },
  {
    slug: "integraciones",
    title: "Integraciones",
    description:
      "Integración de ingeniería y automatización para proyectos de manejo de materiales.",
    heroImg: "/images/solutions/solutions-integraciones.jpeg",
  },
  {
    slug: "inspecciones",
    title: "Inspecciones",
    description:
      "Inspecciones, auditorías y seguridad en sistemas de almacenamiento.",
    heroImg: "/images/solutions/solutions-inspecciones.jpeg",
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}
