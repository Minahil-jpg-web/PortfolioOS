interface HeroAvatarProps {
  src?: string;
  alt?: string;
}

function HeroAvatar({ src, alt = "Profile picture" }: HeroAvatarProps) {
  return (
    <div className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center lg:h-[400px] lg:w-[400px]">
      {/* Outer Glow (now pulsing) */}
      <div className="absolute h-full w-full animate-pulse rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Rotating conic glow behind the ring */}
      <div className="absolute h-[300px] w-[300px] animate-[spin_8s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,transparent_0%,rgba(34,211,238,0.4)_25%,transparent_50%,rgba(99,102,241,0.4)_75%,transparent_100%)] blur-xl lg:h-[380px] lg:w-[380px]" />

      {/* Orbiting particles */}
      <div className="absolute h-[300px] w-[300px] animate-[spin_6s_linear_infinite] lg:h-[380px] lg:w-[380px]">
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_2px_rgba(34,211,238,0.8)]" />
      </div>
      <div className="absolute h-[300px] w-[300px] animate-[spin_9s_linear_infinite_reverse] lg:h-[380px] lg:w-[380px]">
        <div className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-indigo-300 shadow-[0_0_10px_2px_rgba(129,140,248,0.8)]" />
      </div>

      {/* Gradient Ring (now gently floating) */}
      <div className="absolute h-[280px] w-[280px] animate-[bounce_5s_ease-in-out_infinite] rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-[2px] lg:h-[360px] lg:w-[360px]">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950">
          {/* Avatar - image if src provided, initials fallback otherwise */}
          <div className="group relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-6xl font-black text-white shadow-2xl transition-transform duration-500 hover:scale-105 lg:h-60 lg:w-60 lg:text-7xl">
            {src ? (
              <img
                src={src}
                alt={alt}
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              "MA"
            )}
          </div>
        </div>
      </div>

      {/* Decorative Circle (now pinging) */}
      <div className="absolute left-6 top-8 h-5 w-5 rounded-full bg-cyan-400/70">
        <div className="absolute inset-0 animate-ping rounded-full bg-cyan-400/60" />
      </div>

      <div className="absolute bottom-10 right-8 h-7 w-7 rounded-full bg-blue-500/70">
        <div className="absolute inset-0 animate-ping rounded-full bg-blue-500/50 [animation-duration:2.5s]" />
      </div>
    </div>
  );
}

export default HeroAvatar;