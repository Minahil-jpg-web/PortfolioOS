import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
}

function GlassCard({ children }: GlassCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        shadow-2xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:border-cyan-400/50
        hover:shadow-[0_0_45px_rgba(34,211,238,0.35)]
      "
    >
      {/* Animated Top Border */}
      <div
        className="
          absolute
          left-0
          top-0
          h-[2px]
          w-0
          bg-gradient-to-r
          from-cyan-400
          via-sky-400
          to-violet-500
          transition-all
          duration-700
          group-hover:w-full
        "
      />

      {/* Hover Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-cyan-500/0
          via-cyan-500/10
          to-violet-500/0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Top Left Glow */}
      <div
        className="
          absolute
          -left-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-cyan-500/10
          blur-3xl
          opacity-0
          transition-all
          duration-700
          group-hover:opacity-100
          group-hover:scale-125
        "
      />

      {/* Bottom Right Glow */}
      <div
        className="
          absolute
          -bottom-16
          -right-16
          h-40
          w-40
          rounded-full
          bg-violet-500/10
          blur-3xl
          opacity-0
          transition-all
          duration-700
          group-hover:opacity-100
          group-hover:scale-125
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default GlassCard;