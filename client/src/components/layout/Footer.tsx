
import AnimatedText from "../AnimatedText";
import { useState } from "react";
import { motion } from "framer-motion";
function Footer() {
  const particles = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 6 + Math.random() * 6,
  delay: Math.random() * 4,
}));

  const socialContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const socialItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
  const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0,
});
  return (
    <footer
  className="relative overflow-hidden bg-slate-950 py-32"
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }}
>
{/* Premium Footer Separator */}
<div className="absolute top-0 left-0 z-50 w-full overflow-visible">
  <div className="h-px w-full bg-slate-700" />

  <motion.div
    className="absolute top-0 left-0 h-[12px] w-full"
    style={{
      background:
        "linear-gradient(90deg, transparent 0%, rgba(34,211,238,.35) 20%, rgba(168,85,247,.45) 50%, rgba(236,72,153,.35) 80%, transparent 100%)",
      filter: "blur(10px)",
    }}
    animate={{
      opacity: [0.35, 0.8, 0.35],
      scaleX: [0.98, 1.02, 0.98],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</div>
      {/* =========================
          Background Layers
      ========================== */}

      {/* Base Background */}
      <div className="absolute inset-0 bg-slate-950" />
<motion.div
  className="pointer-events-none absolute h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[130px]"
  animate={{
    x: mousePosition.x - 225,
    y: mousePosition.y - 225,
  }}
  transition={{
    type: "spring",
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  }}
/>
      {/* Giant Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="select-none text-center font-black uppercase leading-none tracking-[0.2em] text-white/[0.03]">
          <h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem]">
            MINAHIL
          </h1>
          <h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem]">
            AHSAN
          </h1>
        </div>
      </div>

      {/* Cyan Glow */}
      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Violet Glow */}
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[220px]" />

{/* Floating Particles */}
<div className="pointer-events-none absolute inset-0 overflow-hidden">
  {particles.map((particle) => (
    <motion.span
      key={particle.id}
      className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/50"
      style={{
        left: `${particle.left}%`,
        top: `${particle.top}%`,
      }}
      animate={{
        y: [0, -25, 0],
        opacity: [0.2, 1, 0.2],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: particle.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: particle.delay,
      }}
    />
  ))}
</div>
      {/* =========================
          Content
      ========================== */}

      <div className="relative z-10 mx-auto flex min-h-[90vh] w-[92%] max-w-7xl items-center justify-center">
        <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{
    duration: 0.9,
    ease: "easeOut",
  }}
  className="max-w-4xl text-center"
>
          {/* Tagline */}
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.5em] text-cyan-400 md:text-sm">
            Engineering Ideas Into Reality
          </p>

          {/* Name */}
          <h2 className="text-5xl font-black uppercase leading-none tracking-[0.15em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            MINAHIL
          </h2>

          <h2 className="text-5xl font-black uppercase leading-none tracking-[0.15em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            AHSAN
          </h2>

          {/* Description */}
          <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
            Building thoughtful digital experiences through software
            engineering, creativity, and modern web technologies.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-16 h-px w-40 bg-gradient-to-r from-transparent via-slate-500 to-transparent" />

 <motion.div
  className="mt-16 flex flex-wrap items-center justify-center gap-10"
  variants={socialContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.a
  variants={socialItem}
  whileHover={{ y: -4, scale: 1.05 }}
  href=" https://github.com/Minahil-jpg-web"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative text-xs uppercase tracking-[0.35em] text-slate-400 transition-colors duration-300 hover:text-white"
>
  GitHub

  <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
</motion.a>

 <motion.a
  variants={socialItem}
  whileHover={{ y: -4, scale: 1.05 }}
  href="https://www.linkedin.com/in/minahil-ahsan-a044a7371/."
  target="_blank"
  rel="noopener noreferrer"
  className="group relative text-xs uppercase tracking-[0.35em] text-slate-400 transition-colors duration-300 hover:text-white"
>
  LinkedIn

  <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
</motion.a>

  <motion.a
  variants={socialItem}
  whileHover={{ y: -4, scale: 1.05 }}
  href="/resume.pdf"
  className="group relative text-xs uppercase tracking-[0.35em] text-slate-400 transition-colors duration-300 hover:text-white"
>
  Resume

  <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
</motion.a>

  <motion.a
  variants={socialItem}
  whileHover={{ y: -4, scale: 1.05 }}
  href="mailto:minahilahsan328@gmail.com"
  className="group relative text-xs uppercase tracking-[0.35em] text-slate-400 transition-colors duration-300 hover:text-white"
>
  Email

  <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
</motion.a>
</motion.div>

          {/* Signature */}
          <div className="mt-24">
            <p className="text-xs uppercase tracking-[0.45em] text-slate-500">
              Designed &amp; Engineered
            </p>

            <AnimatedText />
          </div>

          
{/* Bottom Divider */}
<div className="relative mx-auto mt-16 h-px w-full overflow-hidden bg-gradient-to-r from-transparent via-slate-700 to-transparent">
  <motion.div
    className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
    animate={{
      x: ["-150px", "100vw"],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    }}
  />
</div>
          {/* Bottom Bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-6 text-xs uppercase tracking-[0.3em] text-slate-500 md:flex-row">
            <motion.p
  whileHover={{ y: -2 }}
  transition={{ duration: 0.25 }}
  className="group flex items-center gap-1 cursor-default text-slate-500"
>
  ©

  <motion.span
    whileHover={{
      rotate: 360,
      scale: 1.1,
      color: "#22d3ee",
    }}
    transition={{
      duration: 0.6,
      ease: "easeInOut",
    }}
    className="inline-block"
  >
    2026
  </motion.span>

  <span className="relative overflow-hidden">
    <span className="transition-colors duration-300 group-hover:text-cyan-400">
      Minahil Ahsan
    </span>

    {/* Animated Underline */}
    <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

    {/* Shimmer Effect */}
    <motion.span
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
      initial={{ x: "-120%" }}
      whileHover={{ x: "120%" }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    />
  </span>
</motion.p>
<motion.button
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  whileHover={{ y: -3 }}
  whileTap={{ scale: 0.96 }}
  className="group flex items-center gap-2 uppercase tracking-[0.3em] text-slate-500 transition-colors duration-300 hover:text-white"
>
  <span>Back to Top</span>

  <motion.span
    className="inline-block"
    animate={{ y: [0, -3, 0] }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    ↑
  </motion.span>
</motion.button>
          </div>
        </motion.div>
</div>
    </footer>
  );
}

export default Footer;