import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const baseClasses = `
    group relative inline-flex items-center justify-center
    overflow-hidden rounded-xl px-6 py-3
    font-semibold
    transition-all duration-500 ease-out
    hover:-translate-y-1 hover:scale-105
    active:scale-95
    cursor-pointer
  `;

  const variants = {
    primary:
      "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]",

    secondary:
      "border border-cyan-400/40 bg-white/5 text-white backdrop-blur-md hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {/* Glow */}
      <span className="absolute inset-0 rounded-xl bg-cyan-400/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Shimmer */}
      <span
        className="
          absolute left-[-120%] top-0 h-full w-1/2
          -skew-x-12 bg-white/20
          transition-all duration-700
          group-hover:left-[130%]
        "
      />

      {/* Text */}
      <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:tracking-wide">
  {children}
</span>
    </button>
  );
}

export default Button;