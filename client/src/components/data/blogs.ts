

// ==============================================
// PortfolioOS - Blog Data
// Single Source of Truth
// ==============================================

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface Blog {
  id: string;
  slug: string;

  title: string;
  excerpt: string;
  content: string;

  image: string;

  category: string;
  tags: string[];

  date: string;
  updated: string;
  readTime: string;

  featured: boolean;

  author: Author;
}

export const blogs: Blog[] = [
  {
    id: "1",

    slug: "future-of-computer-engineering",

    title: "The Future of Computer Engineering: Trends to Watch.",

    excerpt:
      "Write a short summary of your article here. This will be shown inside the blog card.",

    content: `
# Blog Content

Write your complete markdown or HTML content here.

Later you can replace this with your own article.
`,

    image: "/images/blogs/sample-blog.jpg",

    category: "Web Development",

    tags: ["React", "TypeScript", "Portfolio"],

    date: "July 20, 2026",

    updated: "July 20, 2026",

    readTime: "5 min read",

    featured: true,

    author: {
      name: "Your Name",
      role: "Computer Engineering Student",
      avatar: "/images/profile/profile.jpg",
    },
  },
];