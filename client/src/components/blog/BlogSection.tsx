import { blogs } from "../data/blogs";
import BlogCard from "./BlogCard";

function BlogSection() {
  return (
    <section className="bg-slate-950 pt-4 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-white">
Latest Technical Insights
          </h2>

          <p className="mt-4 text-slate-400">
Recent notes from my weekly learning, university lab tasks, and AI research.          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;