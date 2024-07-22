import { CheckCircle2 } from "lucide-react";
import computer from "../../assets/computer.svg";
import computerContent from "../../assets/computerContent.svg";
import { checklistItems } from "../../contants/Constants";
import { motion } from "framer-motion";

const workflowVariants = {
  initial: {
    opacity: 0,
    x: 100,
    y: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};
const titleVariants = {
  initial: {
    opacity: 0,
    x: 1000,
    y: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1.5,
      staggerChilden: 0.1,
    },
  },
};
const leftVariants = {
  initial: {
    opacity: 0,
    x: 0,
    y: 600,
  },
  animate: {
    x: 0,
    y: 100,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};
const rightVariants = {
  initial: {
    opacity: 0,
    x: -900,
    y: -400,
  },
  animate: {
    x: -530,
    y: -100,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const Workflow = () => {
  return (
    <div className="mt-[360px] max-w-[1366px] m-auto">
      <motion.h2
        className="text-3xl sm:text-5xl lg:text-7xl text-center mt-6 tracking-wider mb-[140px]"
        variants={titleVariants}
        initial="initial"
        whileInView="animate"
      >
        Accelerate your <span className="gradient-text">coding workflow</span>{" "}
      </motion.h2>

      <div className="flex flex-wrap justify-center">
        {/* Left images ==========*/}
        <div className="flex p w-full lg:w-1/2">
          <motion.img
            src={computer}
            alt="codea"
            className="w-[550px] h-[550px]"
            variants={leftVariants}
            initial="initial"
            whileInView="animate"
          />

          <motion.img
            src={computerContent}
            alt="codea"
            className="w-[750px] h-[750px]"
            variants={rightVariants}
            initial="initial"
            whileInView="animate"
          />
        </div>

        <div className="p-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex mb-12"
              variants={workflowVariants}
              initial="initial"
              whileInView="animate"
            >
              <div className="text-orange-500 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <motion.div
                className="mb-4"
                variants={workflowVariants}
                initial="initial"
                whileInView="animate"
              >
                <h5 className="mt-1 mb-2 text-xl font-medium ">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
