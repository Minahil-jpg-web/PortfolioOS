import type { Blog } from "../data/blogs";
import { ArrowRight } from "lucide-react";

type BlogCardProps = {
  blog: Blog;
};

function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0f172a]/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10">
      {/* Image Placeholder */}
      <div className="h-56 overflow-hidden bg-gradient-to-br from-cyan-500/20 via-slate-800 to-slate-900">
        <div className="flex h-full items-center justify-center text-slate-500 transition duration-300 group-hover:scale-110">
          Blog Image
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
          Featured
        </span>

        <h2 className="mt-4 text-2xl font-bold text-white transition group-hover:text-cyan-300">
          {blog.title}
          
        </h2>

        <p className="mt-3 leading-7 text-slate-400">
          {blog.excerpt}
        </p>

        <button className="mt-6 inline-flex items-center gap-2 font-medium text-cyan-400 transition group-hover:gap-3">
          Read Article
          <ArrowRight size={18} />
        </button>
      </div>
    </article>
  );
}

export default BlogCard;