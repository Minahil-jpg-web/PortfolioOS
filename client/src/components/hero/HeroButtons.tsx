import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

function HeroButtons() {
    const navigate = useNavigate();
  return (
    <motion.div
      className="mt-10 flex flex-col gap-4 sm:flex-row"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
      }}
    >
      {/* Primary Button */}
      <motion.button
  onClick={() => navigate("/projects")}
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  whileTap={{ scale: 0.97 }}
  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl
  bg-gradient-to-r from-cyan-500 to-blue-600
  px-7 py-4
  font-semibold
  text-white
  shadow-lg shadow-cyan-500/20
  transition-all duration-300
  hover:-translate-y-1
  hover:shadow-cyan-500/40"
>
  {/* Animated glow ring */}
  <span className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-60 animate-pulse" />

  {/* Shimmer sweep */}
  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />

  <span className="relative">View Projects</span>

  <ArrowRight
    size={18}
    className="relative transition-transform duration-300 group-hover:translate-x-1"
  />
</motion.button>

      {/* Secondary Button */}
      {/* Secondary Button */}
<motion.a
  href="https://minahilahsan583-sketch.github.io/Minahil/"
  target="_blank"
  rel="noopener noreferrer"
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  whileTap={{ scale: 0.97 }}
  className="
    group
    relative
    inline-flex
    items-center
    justify-center
    gap-2
    overflow-hidden
    rounded-xl
    border
    border-slate-700
    bg-white/5
    px-7
    py-4
    font-semibold
    text-slate-200
    backdrop-blur-xl
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-cyan-500/50
    hover:bg-cyan-500/10
  "
>
  {/* Shimmer sweep */}
  <span
    className="
      pointer-events-none
      absolute
      inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/10
      to-transparent
      transition-transform
      duration-1000
      ease-out
      group-hover:translate-x-full
    "
  />

  <span className="relative">Read My Articles</span>

  <BookOpen
    size={18}
    className="relative transition-transform duration-300 group-hover:translate-x-1"
  />
</motion.a>
    </motion.div>
  );
}

export default HeroButtons;