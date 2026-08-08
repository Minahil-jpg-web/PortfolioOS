import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
const headings = [
  {
    line1: "Technical Projects &",
    line2: "Implementations",
  },
  {
    line1: "Engineering Ideas",
    line2: "Into Reality",
  },
  {
    line1: "Software Projects &",
    line2: "Case Studies",
  },
  {
    line1: "Building Modern",
    line2: "Digital Experiences",
  },
  {
    line1: "Crafting Intelligent",
    line2: "Software Solutions",
  },
];

const AnimatedHeading = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const current = headings[index];

  const renderLetters = (text: string) =>
    text.split("").map((letter, i) => (
      <motion.span
        key={`${text}-${i}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: i * 0.03,
          duration: 0.35,
        }}
        className="inline-block"
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ));

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight md:text-6xl xl:text-7xl">
          <div className="whitespace-nowrap text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.15)]">
  {renderLetters(current.line1)}
</div>

<div className="whitespace-nowrap bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.45)]">
  {renderLetters(current.line2)}
</div>
        </h1>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedHeading;