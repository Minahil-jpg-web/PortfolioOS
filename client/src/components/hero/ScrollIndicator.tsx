import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
    >
      <button
        aria-label="Scroll Down"
        className="group relative flex flex-col items-center gap-2 text-slate-400 transition-colors duration-300 hover:text-cyan-400"
      >
        <span className="text-xs font-medium uppercase tracking-[0.3em]">
          Scroll
        </span>

        <div
          className="
            relative flex h-12 w-8 items-start justify-center
            rounded-full border border-slate-700
            bg-white/5 p-1 backdrop-blur-lg
            transition-all duration-300
            group-hover:border-cyan-400/60
            group-hover:bg-cyan-500/10
          "
        >
          {/* Pulsing glow ring */}
          <span className="absolute -inset-1 -z-10 rounded-full bg-cyan-500/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />

          {/* Animated dot traveling down inside the pill */}
          <motion.span
            className="absolute top-1 h-1.5 w-1.5 rounded-full bg-cyan-400"
            animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </div>
      </button>
    </motion.div>
  );
}

export default ScrollIndicator;