import { motion, spring } from "framer-motion";
//import img from "../../assets/hero.png";
import scroll from "../../assets/scroll.png";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
    transition: { type: "bounce" },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, staggerChildren: 0.01 },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: { duration: 2, repeat: Infinity },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-540%",
    transition: { duration: 20, repeat: Infinity, repeatType: "mirror" },
  },
};

const Hero = () => {
  return (
    <div className="h-[90%] bg-[#020202]  relative overflow-hidden z-10">
      <div className="max-w-[1366px] m-auto h-full">
        <motion.div
          className="flex flex-col mt-48 h-full gap-10"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.h1
            variants={textVariants}
            className="text-7xl font-bold tracking-wide"
          >
            New AI technology built{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              for Developers
            </span>
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="mx-auto text-3xl tracking-widest text-[20px] text-neutral-500 text-center w-[900px]"
          >
            Empower developers to build innovative and impactful AI solutions.
            Get started today and unlock the full potential of AI technology.
          </motion.p>

          <motion.div
            className="flex justify-center gap-12 z-1"
            variants={textVariants}
          >
            <motion.button variants={textVariants} className="btn-orange">
              Start for free
            </motion.button>
            <motion.button variants={textVariants} className="btn-gray">
              Documentation
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
      <motion.div
        className="w-[50%] absolute text-[540px] bottom-[-105px] whitespace-nowrap opacity-10"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Creativity Design Innovation
      </motion.div>
    </div>
  );
};

export default Hero;
