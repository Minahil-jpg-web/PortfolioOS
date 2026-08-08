import { motion } from "framer-motion";
import { Circle } from "lucide-react";

function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-cyan-400/20 bg-white/5 px-5 py-2 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
    >
      {/* Soft ambient glow behind the badge */}
      <span className="pointer-events-none absolute -inset-4 -z-10 rounded-full bg-cyan-500/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Shimmer sweep on hover */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />

      {/* Live pulsing dot with glow */}
      <span className="relative flex h-[10px] w-[10px] items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="absolute h-full w-full rounded-full bg-emerald-400 blur-[6px] opacity-70" />
        <Circle
          size={10}
          fill="currentColor"
          className="relative text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.9)]"
        />
      </span>

      <span className="relative text-sm font-medium tracking-wide text-slate-300 transition-colors duration-300 group-hover:text-slate-100 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
        Open for internships 
      </span>
    </motion.div>
  );
}

export default HeroBadge;