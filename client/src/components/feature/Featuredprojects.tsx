import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "./Projectcard";
import { projectsData } from "./Projectsdata";

function FeaturedProjects() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[950px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="mx-auto max-w-[1550px] px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.30em]
              text-cyan-300
              backdrop-blur-xl
            "
          >
            Featured Work
          </span>

          <h2 className="mt-7 text-5xl font-bold tracking-[-0.04em] text-white lg:text-6xl">
            Selected Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            A selection of projects demonstrating problem solving,
            scalable architecture, and modern software development.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {projectsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <ProjectCard
                image={item.image}
                title={item.title}
                description={item.description}
                tags={item.tags}
                liveUrl={item.liveUrl}
                githubUrl={item.githubUrl}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <Link
            to="/projects"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-7
              py-3
              text-sm
              font-semibold
              text-cyan-300
              transition-all
              duration-300
              hover:scale-105
              hover:border-cyan-300
              hover:bg-cyan-500
              hover:text-white
              hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
            "
          >
            View All Projects

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedProjects;