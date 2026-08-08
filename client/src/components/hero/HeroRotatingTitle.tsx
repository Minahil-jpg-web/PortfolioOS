import { motion } from "framer-motion";
import { useTypewriter } from "../../hooks/useTypewriter";

const JOB_TITLES = [
  "Student Engineering Log",
  "Frontend Developer",
  "Full Stack Developer",
  "Tech Practice Journal",
  "Software Engineer",
];

function HeroRotatingTitle() {
  const text = useTypewriter({
    words: JOB_TITLES,
    typingSpeed: 70,
    deletingSpeed: 35,
    pauseDuration: 1600,
  });

  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="mt-4 flex items-center leading-[1.3] text-2xl font-semibold tracking-tight text-slate-200 sm:text-3xl lg:text-4xl"
    >
      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        {text}
      </span>
      <span className="ml-1 inline-block h-[1em] w-[2px] animate-[blink_1s_steps(1)_infinite] bg-cyan-400" />
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
      `}</style>
    </motion.h2>
  );
}

export default HeroRotatingTitle;