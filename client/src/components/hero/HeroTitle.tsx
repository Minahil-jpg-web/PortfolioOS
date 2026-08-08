import { motion } from "framer-motion";

const lastName = "Ahsan".split("");

function HeroTitle() {
  return (
    <div className="relative mt-8">
      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 flex items-center gap-3 text-lg font-medium tracking-wide text-slate-400"
      >
        <motion.span
          className="h-px bg-gradient-to-r from-cyan-400 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: 32 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        />
        Hello, I'm
      </motion.p>

      {/* First Name */}
      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
      >
        Minahil
      </motion.h1>

      {/* Last Name */}
      <div className="relative">
        {/* Soft glow pulse behind the gradient name */}
        <motion.div
          className="pointer-events-none absolute -inset-4 -z-10 rounded-full bg-cyan-500/10 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0.5] }}
          transition={{ duration: 1.5, delay: 1.2 }}
        />

        <motion.h1
          className="mt-2 flex text-5xl font-black leading-none tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.7,
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {lastName.map((letter, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  filter: "blur(10px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                },
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              whileHover={{ y: -6, scale: 1.1 }}
              className="animate-[gradient-shift_5s_ease_infinite] bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 bg-[length:200%_auto] bg-clip-text text-transparent transition-transform"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
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

export default HeroTitle;