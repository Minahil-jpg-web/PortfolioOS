import { motion } from "framer-motion";
import { useTypewriter } from "../../hooks/useTypewriter";

function HeroSubtitle() {
  return (
    <div className="mt-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-2xl font-semibold tracking-tight text-slate-200 sm:text-3xl lg:text-4xl"
      >
        Full Stack{" "}
        <span
          className="animate-[gradient-shift_4s_ease_infinite] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent"
        >
          Developer
        </span>
      </motion.h2>

      <div className="relative mt-3 h-1 w-24 overflow-hidden rounded-full bg-slate-800">
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "easeInOut",
          }}
        />
      </div>

      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}

export default HeroSubtitle;