import { motion } from "framer-motion";
import ProcessCard from "./ProcessCard";
import { approachData } from "./approachData";

function EngineeringApproach() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-36">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />

      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[450px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="mx-auto max-w-[1500px] px-10">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-24 max-w-4xl text-center"
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
              py-2.5
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-cyan-300
              backdrop-blur-xl
            "
          >
            ENGINEERING APPROACH
          </span>

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
            Building Software with a Process
          </h2>

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
            Every project follows a structured workflow—from understanding the
            problem to continuously improving reliable software solutions.
          </p>
        </motion.div>

        {/* Process Cards */}

        <div className="grid gap-8 md:grid-cols-2">
          {approachData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <ProcessCard
                id={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EngineeringApproach;