import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712]">
      {/* Animated ambient glow orbs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-fuchsia-600/20 blur-[130px] animate-pulse [animation-delay:1.5s]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px] animate-pulse [animation-delay:3s]" />
      </div>

      {/* Subtle animated grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Your existing background + content, layered above the effects */}
      <div className="relative z-10">
        <HeroBackground />
      </div>
      <div className="relative z-20">
        <HeroContent />
      </div>

      {/* Soft bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-[#030712] to-transparent" />
    </section>
  );
}

export default Hero;