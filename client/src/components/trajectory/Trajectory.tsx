import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";
import { trajectoryData } from "./trajectoryData";

function Trajectory() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#030712]
        py-36
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />

      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[450px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="mx-auto max-w-[1500px] px-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-28 max-w-4xl text-center"
        >
          {/* Badge */}

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-5
              py-2.5
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-cyan-300
              backdrop-blur-xl
            "
          >
            TRAJECTORY
          </span>

          {/* Heading */}

          <h2
            className="
              mt-8
              text-6xl
              font-bold
              leading-tight
              tracking-[-0.04em]
              text-white
            "
          >
            From Learning to Building
          </h2>

          {/* Subtitle */}

          <p
            className="
              mx-auto
              mt-7
              max-w-3xl
              text-xl
              leading-9
              text-slate-400
            "
          >
            Every engineer starts somewhere. This journey reflects continuous
            learning, practical experience, and steady progress toward building
            meaningful software.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Base Line */}

          <div className="absolute left-0 right-0 top-[20px] h-[2px] rounded-full bg-white/10" />

          {/* Glow Line */}

          <div
            className="
              absolute
              left-0
              right-0
              top-[20px]
              h-[2px]
              rounded-full
              bg-gradient-to-r
              from-cyan-400/0
              via-cyan-400/80
              to-cyan-400/0
              blur-[2px]
            "
          />

          {/* Timeline Items */}

          <div className="relative grid grid-cols-5 gap-12">
            {trajectoryData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
              >
                <TimelineItem
                  title={item.title}
                  description={item.description}
                />
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Trajectory;