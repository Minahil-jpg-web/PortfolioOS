import type { LucideIcon } from "lucide-react";

interface SnapshotCardProps {
  icon: LucideIcon;
  label: string;
  title: string;
  subtitle: string;
  tags: string[];
}

function SnapshotCard({
  icon: Icon,
  label,
  title,
  subtitle,
  tags,
}: SnapshotCardProps) {
  return (
    <div
      className="
        group
        relative
        flex
        min-h-[360px]
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        border-white/10
        bg-white/[0.04]
        px-8
        py-7
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:shadow-[0_18px_60px_rgba(34,211,238,0.18)]
      "
    >
      {/* Hover Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Floating Glow */}

      <div className="absolute -left-16 -top-16 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-cyan-400/20" />

      {/* Glass Reflection */}

      <div className="absolute left-8 right-8 top-5 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Icon */}

      <div
        className="
          relative
          mb-5
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          border
          border-cyan-400/20
          bg-cyan-500/10
          text-cyan-300
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        <Icon size={26} strokeWidth={2.2} />
      </div>

      {/* Label */}

      <p
        className="
          relative
          mb-2
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.25em]
          text-cyan-300
        "
      >
        {label}
      </p>

      {/* Title */}

      <h3
        className="
          relative
          text-2xl
          font-bold
          leading-tight
          text-white
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          relative
          mt-3
          text-[15px]
          leading-7
          text-slate-400
        "
      >
        {subtitle}
      </p>

      {/* Tags */}

      <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-3
              py-1
              text-xs
              font-medium
              text-cyan-300
              transition-all
              duration-300
              group-hover:border-cyan-400/40
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom Border Glow */}

      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export default SnapshotCard; 