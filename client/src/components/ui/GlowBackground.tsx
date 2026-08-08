function GlowBackground() {
  return (
    <>
      {/* Top Left Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Bottom Right Glow */}
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-3xl" />

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />
    </>
  );
}

export default GlowBackground;