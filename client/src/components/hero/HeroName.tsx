import { motion } from "framer-motion";

/**
 * Displays a greeting with an animated waving hand, followed by
 * "Minahil Ahsan" on a single line with a smooth fade + slide + blur reveal.
 * Fully responsive — font size scales down on smaller viewports to stay on one line.
 */
function HeroName() {
  return (
    <div>
      {/* Greeting with animated waving hand */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-3 flex items-center gap-2 text-lg font-medium text-slate-400"
      >
        Hi there
        <motion.span
          animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "easeInOut",
          }}
          className="inline-block origin-[70%_70%] text-xl"
        >
          👋
        </motion.span>
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="whitespace-nowrap text-4xl font-black leading-none tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
      >
        Minahil{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
          Ahsan
        </span>
      </motion.h1>
    </div>
  );
}

export default HeroName;