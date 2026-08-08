import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
];
  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
        filter: "blur(10px)",
      }}
      animate={{
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-500 ${
        scrolled
          ? "border-cyan-500/20 bg-slate-950/90 backdrop-blur-2xl shadow-lg shadow-cyan-500/5"
          : "border-white/10 bg-slate-950/70 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
 {/* Logo */}
<motion.a
  href="/"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.25 }}
  className="group flex items-center gap-2.5 text-2xl font-bold tracking-wide text-white"
>
  {/* Hexagon Network Mark */}
  <motion.svg
    width="32"
    height="32"
    viewBox="0 0 34 34"
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
  >
    <polygon
      points="17,2 30,9.5 30,24.5 17,32 4,24.5 4,9.5"
      fill="none"
      stroke="#22d3ee"
      strokeWidth="1.4"
      className="transition-all duration-300 group-hover:stroke-cyan-300"
    />
    <circle cx="17" cy="17" r="4" fill="#8b5cf6" />
    <line x1="17" y1="2" x2="17" y2="13" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
    <line x1="30" y1="9.5" x2="21" y2="15" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
    <line x1="30" y1="24.5" x2="21" y2="19" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
    <line x1="17" y1="32" x2="17" y2="21" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
    <line x1="4" y1="24.5" x2="13" y2="19" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
    <line x1="4" y1="9.5" x2="13" y2="15" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
  </motion.svg>

  {/* Wordmark */}
  <span className="transition-colors duration-300 group-hover:text-cyan-300">
    Minahil
  </span>

  <motion.span
    animate={{
      opacity: [1, 0.4, 1],
      scale: [1, 1.25, 1],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
    }}
    className="ml-1 text-cyan-400"
  >
    .
  </motion.span>
</motion.a>

 <nav className="hidden items-center gap-10 md:flex">
  {navLinks.map((link) => (
    <NavLink key={link.name} to={link.to}>
      {({ isActive }) => (
        <div
          className={`group relative py-2 transition-colors duration-300 hover:text-cyan-400 ${
            isActive ? "text-cyan-400" : "text-slate-300"
          }`}
        >
          {link.name}

          {/* Hover Underline */}
          <span
            className="
              absolute
              -bottom-1
              left-0
              h-[2px]
              w-full
              origin-left
              scale-x-0
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-500
              transition-transform
              duration-500
              group-hover:scale-x-100
            "
          />

          {/* Active Indicator */}
          {isActive && (
            <motion.span
              layoutId="navbar-active"
              className="
                absolute
                -bottom-1
                left-0
                h-[2px]
                w-full
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-purple-500
              "
            />
          )}
        </div>
      )}
    </NavLink>
  ))}
</nav>
                {/* Hire Me Button */}
        <motion.button
  whileHover={{
    scale: 1.05,
    y: -2,
  }}
  whileTap={{
    scale: 0.96,
  }}
  transition={{
    duration: 0.25,
  }}
 onClick={() => {
  navigate("/contact?book=true");
}}
  className="
    group
    relative
    overflow-hidden
    rounded-xl
    border
    border-cyan-500/70
    px-6
    py-2.5
    font-medium
    text-cyan-400
    transition-all
    duration-300
    hover:text-white
    hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
  "
>
          {/* Shine Effect */}
          <span
            className="
              absolute
              left-[-140%]
              top-0
              h-full
              w-1/2
              -skew-x-12
              bg-white/20
              transition-all
              duration-700
              group-hover:left-[140%]
            "
          />

          {/* Glow */}
          <span
            className="
              absolute
              inset-0
              rounded-xl
              bg-gradient-to-r
              from-cyan-500/20
              via-blue-500/20
              to-purple-500/20
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
          />

          <span className="relative z-10">
            Hire Me
          </span>
        </motion.button>

      </div>

      {/* Animated Bottom Border */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden">
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            h-full
            w-1/3
            bg-gradient-to-r
            from-transparent
            via-cyan-400
            to-transparent
          "
        />
      </div>
    </motion.header>
  );
}

export default Navbar;