import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

const techs = [
  {
    name: "React",
    icon: <FaReact className="text-[#61DAFB] text-lg" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-[#68A063] text-lg" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-[#336791] text-lg" />,
  },
];

function HeroTechStack() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.6 }}
      className="mt-5 flex flex-wrap gap-3"
    >
      {techs.map((tech) => (
        <motion.div
          key={tech.name}
          whileHover={{
            scale: 1.08,
            y: -4,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 18,
          }}
          className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl hover:border-cyan-300/60 hover:bg-cyan-400/20 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] cursor-default"
        >
          {tech.icon}
          {tech.name}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default HeroTechStack;