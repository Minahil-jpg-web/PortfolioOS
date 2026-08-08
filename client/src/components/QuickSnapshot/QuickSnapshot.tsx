import { motion } from "framer-motion";
import SnapshotCard from "./SnapshotCard";
import { snapshotData } from "./snapshotData";

function QuickSnapshot() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />

      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[380px] w-[750px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

      {/* Side Ambient Visuals (xl and above only) — sit behind the grid, never overlap cards */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden xl:block">
        {/* Left blurred gradient orb */}
        <motion.div
          className="absolute left-[-160px] top-1/3 h-[420px] w-[420px] rounded-full bg-cyan-400/[0.07] blur-[130px]"
          animate={{
            opacity: [0.5, 0.85, 0.5],
            scale: [1, 1.08, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Left secondary soft light */}
        <motion.div
          className="absolute left-[-100px] bottom-10 h-[260px] w-[260px] rounded-full bg-indigo-400/[0.05] blur-[110px]"
          animate={{
            opacity: [0.4, 0.7, 0.4],
            y: [0, -18, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* Right blurred gradient orb */}
        <motion.div
          className="absolute right-[-160px] top-1/4 h-[420px] w-[420px] rounded-full bg-cyan-400/[0.07] blur-[130px]"
          animate={{
            opacity: [0.5, 0.85, 0.5],
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />

        {/* Right secondary soft light */}
        <motion.div
          className="absolute right-[-100px] bottom-16 h-[260px] w-[260px] rounded-full bg-indigo-400/[0.05] blur-[110px]"
          animate={{
            opacity: [0.4, 0.7, 0.4],
            y: [0, 18, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.2,
          }}
        />

        {/* Subtle vertical light beam - left */}
        <motion.div
          className="absolute left-10 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
          animate={{
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle vertical light beam - right */}
        <motion.div
          className="absolute right-10 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
          animate={{
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.30em]
              text-cyan-300
              backdrop-blur-xl
            "
          >
            Overview
          </span>

          <h2
            className="
              mt-7
              text-5xl
              font-bold
              tracking-[-0.04em]
              text-white
              lg:text-6xl
            "
          >
            Professional Snapshot
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-16 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              leading-8
              text-slate-400
            "
          >
            A snapshot of my academic progress, technical focus, and
            direction as a growing software engineer.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {snapshotData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
            >
              <SnapshotCard
                icon={item.icon}
                label={item.label}
                title={item.title}
                subtitle={item.subtitle}
                tags={item.tags}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickSnapshot;