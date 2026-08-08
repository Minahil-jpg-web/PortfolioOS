

type SkillChipProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
};

export default function SkillChip({ children, icon }: SkillChipProps) {
  return (
    <span
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-cyan-400/40
        bg-slate-900/50
        px-4
        py-2
        text-sm
        font-medium
        text-cyan-300
        transition-all
        duration-300
        hover:scale-105
        hover:-translate-y-1
        active:scale-95
        hover:border-violet-400
        hover:bg-slate-800
        hover:text-white
        hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]
      "
    >
      {icon}
      {children}
    </span>
  );
}