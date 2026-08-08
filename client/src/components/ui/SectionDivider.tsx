function SectionDivider() {
  return (
    <div className="relative flex h-20 w-full items-center overflow-hidden bg-[#030712] px-6 lg:px-10">
      {/* Left Neon Line */}
      <div
        className="
          h-px
          flex-1
          bg-gradient-to-r
          from-transparent
          via-cyan-400/20
          to-cyan-400/40
        "
      />

      {/* Center Orb */}
      <div className="relative mx-6 flex h-8 w-8 items-center justify-center">
        {/* Outer Glow */}
        <div
          className="
            absolute
            h-12
            w-12
            rounded-full
            bg-cyan-400/10
            blur-xl
          "
        />

        {/* Soft Ring */}
        <div
          className="
            absolute
            h-8
            w-8
            rounded-full
            border
            border-cyan-400/20
          "
        />

        {/* Orb */}
        <div
          className="
            relative
            h-3
            w-3
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            to-violet-500
            shadow-[0_0_18px_rgba(34,211,238,0.8)]
          "
        />
      </div>

      {/* Right Neon Line */}
      <div
        className="
          h-px
          flex-1
          bg-gradient-to-l
          from-transparent
          via-cyan-400/20
          to-cyan-400/40
        "
      />
    </div>
  );
}

export default SectionDivider;