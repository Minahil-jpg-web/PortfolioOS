import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  description: string;
}

function TimelineItem({
  title,
  description,
}: TimelineItemProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="
        group
        relative
        flex
        flex-col
        items-center
        text-center
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          top-0
          h-24
          w-24
          rounded-full
          bg-cyan-400/10
          blur-3xl
          opacity-0
          transition-all
          duration-700
          group-hover:opacity-100
          group-hover:scale-150
        "
      />

      {/* Glass Ring */}

      <div
        className="
          relative
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-cyan-400/20
          bg-[#08131f]/90
          backdrop-blur-xl
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:border-cyan-300
          group-hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
        "
      >
        {/* Animated Dot */}

        <div
          className="
            h-4
            w-4
            rounded-full
            bg-cyan-400
            shadow-[0_0_18px_rgba(34,211,238,0.9)]
            transition-all
            duration-500
            group-hover:scale-125
          "
        />
      </div>

      {/* Small Line */}

      <div
        className="
          mt-4
          h-8
          w-px
          bg-gradient-to-b
          from-cyan-400/70
          to-transparent
        "
      />

      {/* Title */}

      <h3
        className="
          text-xl
          font-semibold
          tracking-tight
          text-white
          transition-all
          duration-300
          group-hover:text-cyan-300
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-4
          max-w-[220px]
          text-sm
          leading-7
          text-slate-400
          transition-colors
          duration-300
          group-hover:text-slate-300
        "
      >
        {description}
      </p>
    </motion.div>
  );
}

export default TimelineItem;