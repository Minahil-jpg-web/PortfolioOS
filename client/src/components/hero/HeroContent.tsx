import { motion } from "framer-motion";
import HeroBadge from "./HeroBadge";
import HeroName from "./HeroName";
import HeroRotatingTitle from "./HeroRotatingTitle";
import HeroRotatingDescription from "./HeroRotatingDescription";
import HeroButtons from "./HeroButtons";
import HeroSocial from "./HeroSocial";
import HeroStack from "./HeroStack";
import ScrollIndicator from "./ScrollIndicator";


const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function HeroContent() {
  return (
    <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-20 lg:px-10">
      <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">

        {/* Left Content */}
        <motion.div
          className="flex flex-col items-start"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.1 },
            },
          }}
        >
          <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
            <HeroBadge />
          </motion.div>

        <div className="mt-8">
  <HeroName />

  <HeroRotatingTitle />



  <HeroRotatingDescription />
</div>

          <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
            <HeroButtons />
          </motion.div>

          <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
            <HeroSocial />
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <HeroStack />
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </div>
  );
}

export default HeroContent;