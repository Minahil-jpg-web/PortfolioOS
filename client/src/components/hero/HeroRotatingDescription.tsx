import { motion } from "framer-motion";
import { useTypewriter } from "../../hooks/useTypewriter";

const DESCRIPTIONS = [
  "Computer Engineering student building intelligent and scalable software.",
  "Passionate about responsive, user-focused applications and modern development.",
  "Sharing my technical journey, research, and semester projects.",
];

function HeroRotatingDescription() {
  const text = useTypewriter({
    words: DESCRIPTIONS,
    typingSpeed: 35,
    deletingSpeed: 18,
    pauseDuration: 2200,
  });

  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
      className="mt-6 min-h-[3.5rem] max-w-xl text-lg leading-8 text-slate-400"
    >
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[3px] animate-[blink_1s_steps(1)_infinite] bg-slate-400" />
    </motion.p>
  );
}

export default HeroRotatingDescription;