import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  {
    text: "Crafted with precision.",
    color: "text-white",
  },
  {
    text: "Built to leave an impression.",
    color: "text-cyan-400",
  },
  {
    text: "Designed for the future.",
    color: "text-violet-400",
  },
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center">
      <AnimatePresence mode="wait">
        <motion.h3
          key={index}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={`mt-4 text-2xl font-semibold leading-relaxed md:text-3xl ${messages[index].color}`}
        >
          {messages[index].text.split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                delay: i * 0.05,
                duration: 0.35,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h3>
      </AnimatePresence>
    </div>
  );
}