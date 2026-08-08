import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-28 sm:py-36">
      {/* Base gradient */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-[#04101f] via-[#030712] to-[#030712]" />

      {/* Diagonal accent line */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[1px] w-[150%] rotate-[-6deg] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
        <div className="absolute -left-1/4 bottom-0 h-[1px] w-[150%] rotate-[6deg] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      </div>

      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.07] blur-[200px]" />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-8"
        >
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/20 bg-cyan-500/[0.06] px-4 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                Current Status
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Building software with
              <br className="hidden lg:block" />{" "}
              curiosity{" "}
              <span className="text-slate-500">&amp;</span> engineering
              discipline.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-400 lg:mx-0">
              Continuously improving my software engineering skills,
              building real-world applications, and preparing for
              internship opportunities where I can contribute, learn,
              and grow as an engineer.
            </p>

            <div className="mt-4 hidden items-center gap-2 text-sm text-slate-500 lg:flex">
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              Open to internships &amp; meaningful projects
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="relative">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan-400/30 via-cyan-400/5 to-transparent opacity-60" />
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Let's work together
              </p>
              <p className="mt-3 text-lg leading-7 text-slate-300">
                Got a role, a project, or just want to talk shop?
                My inbox is open.
              </p>

              <Link
                to="/contact"
                className="
                  group mt-8 inline-flex w-full items-center justify-between
                  rounded-2xl border border-cyan-400/30 bg-cyan-500/10
                  px-6 py-4
                  text-sm font-semibold text-cyan-300
                  transition-all duration-300
                  hover:border-cyan-300 hover:bg-cyan-500 hover:text-white
                  hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
                "
              >
                Get In Touch
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <div className="mt-6 flex items-center gap-2 text-xs text-slate-500 lg:hidden">
                <span className="h-1 w-1 rounded-full bg-emerald-400" />
                Open to internships &amp; meaningful projects
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactCTA;