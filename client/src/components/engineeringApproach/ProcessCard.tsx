import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

interface ProcessCardProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

function ProcessCard({
  id,
  icon: Icon,
  title,
  description,
}: ProcessCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-[#0B1120]/70
        p-5
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]
      "
    >
      {/* Left Accent */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-cyan-400 via-cyan-300 to-transparent" />

      {/* Top Row */}

      <div className="flex items-start justify-between">

        {/* Icon */}

        <div
          className="
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

        {/* Step */}

        <span
          className="
            text-5xl
            font-black
            tracking-tight
            text-white/10
            transition-all
            duration-500
            group-hover:text-cyan-300/20
          "
        >
          {id}
        </span>
      </div>

      {/* Title */}

    <h3 className="mt-6 text-2xl font-bold text-white">
  {title}
</h3>

    
<div className="mt-3 h-[3px] w-12 rounded-full bg-cyan-400 transition-all duration-500 group-hover:w-24" />

<p className="mt-4 leading-8 text-slate-400">
  {description}
</p>

<div className="mt-6 flex items-center justify-end">
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            text-cyan-300
            transition-all
            duration-500
            group-hover:bg-cyan-500
            group-hover:text-white
            group-hover:rotate-45
          "
        >
          <ArrowUpRight size={18} />
        </div>

      </div>

      {/* Glow */}

      <div
        className="
          absolute
          -right-16
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
        "
      />
    </div>
  );
}

export default ProcessCard;