export type Product = {
  slug: string;
  title: string;
  img: string;
  imgAlt: string;
  description?: string;
  gallery?: { src: string; alt: string }[];
};


export const PRODUCTS_BY_SOLUTION: Record<string, Product[]> = {
  estanterias: [
    {
      slug: "selectivo",
      title: "Rack Selectivo",
      img: "/images/solutions/estanterias/estanterias-selectivo.jpeg",
      imgAlt: "Estantería selectiva",
      description:
        "Rack selectivo es el sistema universal para el acceso directo y unitario para cada tarima. Es ideal para almacenar productos paletizados con gran variedad de referencias. Es adaptable a cualquier espacio, tamaño o peso de la mercancía a almacenar. A su vez, la distribución y altura de los estantes se determinan con base a las características de los montacargas, las dimensiones del establecimiento y los elementos de almacenaje.\n\nCabe destacar que para almacenar una cantidad de tarimas superior, es posible instalar racks de doble fondo permitiendo almacenar una tarima frente a otra; ubicándose de cada lado del pasillo.",

      gallery: [
        { src: "/images/solutions/estanterias/estanterias-selectivo.jpeg", alt: "Rack selectivo - vista 1" },
        { src: "/images/solutions/estanterias/estanterias-pushback.jpg", alt: "Rack selectivo - vista 2" },
        { src: "/images/solutions/estanterias/estanterias-dinamico.jpg", alt: "Rack selectivo - vista 3" },
        { src: "/images/solutions/estanterias/estanterias-mezzanine.jpg", alt: "Rack selectivo - vista 4" },
      ],
    },
    {
      slug: "drive-in",
      title: "Drive-In",
      img: "/images/solutions/estanterias/estanterias-drivein.jpg",
      imgAlt: "Estantería drive-in",
      description: "Descripción pendiente.",

      gallery: [
        { src: "/images/solutions/estanterias/estanterias-selectivo.jpeg", alt: "Rack selectivo - vista 1" },
        { src: "/images/solutions/estanterias/estanterias-selectivo.jpeg", alt: "Rack selectivo - vista 2" },
        { src: "/images/solutions/estanterias/estanterias-selectivo.jpeg", alt: "Rack selectivo - vista 3" },
        { src: "/images/solutions/estanterias/estanterias-selectivo.jpeg", alt: "Rack selectivo - vista 4" },
      ],
    },
    {
      slug: "push-back",
      title: "Push Back",
      img: "/images/solutions/estanterias/estanterias-pushback.jpg",
      imgAlt: "Estantería push back",
      description: "Descripción pendiente.",

      gallery: [
        { src: "/images/solutions/estanterias/estanterias-selectivo.jpeg", alt: "Rack selectivo - vista 1" },
        { src: "/images/solutions/estanterias/estanterias-selectivo.jpeg", alt: "Rack selectivo - vista 2" },
        { src: "/images/solutions/estanterias/estanterias-selectivo.jpeg", alt: "Rack selectivo - vista 3" },
        { src: "/images/solutions/estanterias/estanterias-selectivo.jpeg", alt: "Rack selectivo - vista 4" },
      ],
    },
    {
      slug: "dinamico",
      title: "Dinámico",
      img: "/images/solutions/estanterias/estanterias-dinamico.jpg",
      imgAlt: "Estantería dinámica",
      description: "Descripción pendiente.",

      gallery: [
        { src: "/images/solutions/estanterias/estanterias-selectivo.jpeg", alt: "Rack selectivo - vista 1" },
        { src: "/images/solutions/estanterias/estanterias-selectivo.jpeg", alt: "Rack selectivo - vista 2" },
        { src: "/images/solutions/estanterias/estanterias-selectivo.jpeg", alt: "Rack selectivo - vista 3" },
        { src: "/images/solutions/estanterias/estanterias-selectivo.jpeg", alt: "Rack selectivo - vista 4" },
      ],
    },
    {
      slug: "mezzanine",
      title: "Mezzanine",
      img: "/images/solutions/estanterias/estanterias-mezzanine.jpg",
      imgAlt: "Mezzanine industrial",
      description: "Descripción pendiente.",

      gallery: [
        { src: "/images/solutions/estanterias/estanterias-selectivo.jpeg", alt: "Rack selectivo - vista 1" },
        { src: "/images/solutions/estanterias/estanterias-selectivo.jpeg", alt: "Rack selectivo - vista 2" },
        { src: "/images/solutions/estanterias/estanterias-selectivo.jpeg", alt: "Rack selectivo - vista 3" },
        { src: "/images/solutions/estanterias/estanterias-selectivo.jpeg", alt: "Rack selectivo - vista 4" },
      ],
    },
  ],
};

export function getProductsBySolutionSlug(solutionSlug: string): Product[] {
  return PRODUCTS_BY_SOLUTION[solutionSlug] ?? [];
}

export function getProductBySlugs(solutionSlug: string, productSlug: string): Product | undefined {
  return getProductsBySolutionSlug(solutionSlug).find((p) => p.slug === productSlug);
}

export function getAllProductPaths() {
  const paths: Array<{ params: { solutionSlug: string; productSlug: string } }> = [];

  for (const [solutionSlug, products] of Object.entries(PRODUCTS_BY_SOLUTION)) {
    for (const p of products) {
      paths.push({ params: { solutionSlug, productSlug: p.slug } });
    }
  }

  return paths;
}

