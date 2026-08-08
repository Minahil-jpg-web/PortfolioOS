import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function HeroSocial() {
  const socials = [
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/Minahil-jpg-web",
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn size={20} />,
      href: "https://www.linkedin.com/in/minahil-ahsan-a044a7371/.",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:minahilahsan328@gmail.com",
      label: "Email",
    },
  ];

  return (
    <motion.div
      className="mt-10 flex items-center gap-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.12, delayChildren: 0.9 },
        },
      }}
    >
      {socials.map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          variants={{
            hidden: { opacity: 0, y: 16, scale: 0.8 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ y: -4, scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-white/5 text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-500/10 hover:text-cyan-400"
        >
          {/* Hover glow ring */}
          <span className="absolute -inset-1 -z-10 rounded-xl bg-cyan-500/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />

          {social.icon}

          {/* Tooltip label */}
          <span className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-slate-200 opacity-0 shadow-lg ring-1 ring-white/10 transition-all duration-300 group-hover:-bottom-8 group-hover:opacity-100">
            {social.label}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
}

export default HeroSocial;