import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroImages from "../../data/heroImages";

const HeroBackground = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#050816]">
      {heroImages.map((item, index) => (
        <motion.img
          key={item.id}
          src={item.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          initial={false}
          animate={{
            opacity: index === current ? 1 : 0,
            scale: index === current ? 1.08 : 1.15,
          }}
          transition={{
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: 5, ease: "linear" },
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />
    </div>
  );
};

export default HeroBackground;