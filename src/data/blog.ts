export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  content: string[]; // párrafos simples
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "titulo-1",
    title: "Título 1",
    excerpt:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    image: "/images/blog/blog-1.jpeg",
    content: [
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
    ],
    },
  {
    slug: "titulo-2",
    title: "Título 2",
    excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
    image: "/images/blog/blog-2.jpeg",
    content: ["Contenido del post 2..."],
  },
  {
    slug: "titulo-3",
    title: "Título 3",
    excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
    image: "/images/blog/blog-3.jpeg",
    content: ["Contenido del post 3..."],
  },
];

export const getBlogPostBySlug = (slug: string) =>
  BLOG_POSTS.find((p) => p.slug === slug);
