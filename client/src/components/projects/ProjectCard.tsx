import { Link } from "react-router-dom";
import Badge from "../ui/Badge";

const ProjectCard = () => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">

      {/* Content */}
      <div className="p-8">

        <Badge>Featured Project</Badge>

        <h3 className="mt-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
          SmartPOS – Desktop Billing & Inventory System
        </h3>

        <p className="mt-4 leading-relaxed text-slate-400">
          A complete desktop billing and inventory management system designed
          for pharmacies and retail stores. It provides secure authentication,
          inventory management, sales tracking, customer management, supplier
          records, and profit analysis through a modern and responsive
          interface.
        </p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
            React
          </span>

          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
            Node.js
          </span>

          <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm text-orange-300">
            Express.js
          </span>

          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-sm text-violet-300">
            PostgreSQL
          </span>

          <span className="rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-sm text-pink-300">
            JWT
          </span>

          <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-sm text-sky-300">
            Tailwind CSS
          </span>
        </div>

        {/* View Project Button */}
        <div className="mt-8">
          <Link
            to="/projects"
            className="group/button inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-300 transition-all duration-300 hover:scale-105 hover:border-cyan-300 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
          >
            View Project

            <span className="transition-transform duration-300 group-hover/button:translate-x-1">
              →
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;