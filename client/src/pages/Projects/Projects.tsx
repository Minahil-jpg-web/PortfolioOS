import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import AnimatedHeading from "../../components/hero/AnimatedHeading";
import HeroBackground from "../../components/projects/HeroBackground";
import ProjectDetailsSection from "../../components/projects/ProjectDetailsSection";

import Button from "../../components/ui/Button";
// import GlowBackground from "../../components/ui/GlowBackground";

import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiExpress,
  SiPostgresql,
  SiPython,
  SiFlask,
  SiScikitlearn,
} from "react-icons/si";

const Projects = () => {
  const [currentImage, setCurrentImage] = useState(0);

const currentProject = projects[currentImage];



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % projects.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    
  <>
    <section className="relative h-screen overflow-hidden">
      {/* <GlowBackground /> */}
<HeroBackground />
<div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-3xl lg:max-w-2xl lg:pt-10"
        >
          <motion.div
  animate={{
    y: [0, -3, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur-xl px-5 py-2 shadow-[0_0_25px_rgba(34,211,238,0.12)]"
>
  <motion.span
    animate={{
      scale: [1, 1.4, 1],
      opacity: [0.7, 1, 0.7],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="h-2.5 w-2.5 rounded-full bg-cyan-400"
  />

  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
    Selected Work
  </span>
</motion.div>

     <AnimatedHeading />
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
  {currentProject.description}
</p>
<div className="mt-8 flex flex-wrap gap-3">
  {currentProject.technologies.map((tech) => {
    const icons: Record<string, React.ReactNode> = {
  React: <FaReact className="text-[#61DAFB] text-lg" />,
  "Node.js": <FaNodeJs className="text-[#68A063] text-lg" />,
  Express: <SiExpress className="text-white text-lg" />,
  PostgreSQL: <SiPostgresql className="text-[#336791] text-lg" />,
  Python: <SiPython className="text-[#FFD43B] text-lg" />,
  Flask: <SiFlask className="text-white text-lg" />,
  "Machine Learning": (
    <SiScikitlearn className="text-[#F7931E] text-lg" />
  ),
};

    return (
     <motion.span
  key={tech}
  whileHover={{
    scale: 1.08,
    y: -4,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 18,
  }}
  className="
    flex items-center gap-2
    rounded-full
    border border-cyan-400/20
    bg-cyan-400/10
    px-4 py-2
    text-sm text-cyan-300
    backdrop-blur-md
    shadow-[0_0_20px_rgba(34,211,238,0.12)]
    hover:border-cyan-300/60
    hover:bg-cyan-400/20
    hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]
    cursor-pointer
    transition-all
    duration-300
  "
>
  <motion.span
  whileHover={{
    rotate: 360,
    scale: 1.25,
  }}
  transition={{
    duration: 0.5,
  }}
>
  {icons[tech]}
</motion.span>
  {tech}
</motion.span>
    );
  })}
</div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>
              Explore Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="secondary"
              onClick={() =>
                window.open("https://github.com/Minahil-jpg-web", "_blank")
              }
            >
              <FaGithub className="mr-2" />
              GitHub
            </Button>
          </div>
        </motion.div>

        {/* Right Image */}
        {/* Hero Slider */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative hidden w-full max-w-2xl"
        >
          {/* Animated Background Glow */}
          <motion.div
            className="absolute inset-0 rounded-[32px] bg-cyan-500/20 blur-3xl"
            animate={{
              opacity: [0.5, 0.9, 0.5],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Rotating Neon Border Glow */}
          <div className="absolute -inset-[1px] rounded-[32px] overflow-hidden">
            <motion.div
              className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,211,238,0.6)_60deg,transparent_140deg,rgba(167,139,250,0.6)_220deg,transparent_300deg)]"
              animate={{ rotate: 360 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Slider Card */}
          <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-white/5 p-2 backdrop-blur-xl">
            <div className="relative h-[520px] w-full overflow-hidden rounded-[24px]">
              <AnimatePresence mode="sync">
                <motion.img
                  key={currentImage}
                  src={projects[currentImage].image}
                  alt="Project Preview"
                  initial={{ opacity: 0, scale: 1.15, filter: "blur(8px)" }}
                  animate={{
                    opacity: 1,
                    scale: 1.06,
                    filter: "blur(0px)",
                  }}
                  exit={{ opacity: 0, scale: 1, filter: "blur(8px)" }}
                  transition={{
                    opacity: { duration: 1 },
                    filter: { duration: 1 },
                    scale: { duration: 3.5, ease: "easeOut" },
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Cinematic Bottom Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

              {/* Subtle Top Sheen */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />

              {/* Scanline Sweep */}
              <motion.div
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
              />

              {/* Progress Dots */}
              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className="group relative h-1.5 overflow-hidden rounded-full bg-white/20"
                    style={{ width: index === currentImage ? "28px" : "8px" }}
                  >
                    {index === currentImage && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 3.5, ease: "linear" }}
                        style={{ originX: 0 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>


    <ProjectDetailsSection />
  </>
  );
};

export default Projects;