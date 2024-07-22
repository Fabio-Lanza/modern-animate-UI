import { motion } from "framer-motion";
import robotic from "../../assets/robotic.svg";
import { features } from "../../contants/Constants";

const topVariants = {
  initial: {
    opacity: 0,
    x: -500,
    y: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 10,
    transition: {
      duration: 1,
      staggerChilden: 0.1,
    },
  },
};

const mediumVariants = {
  initial: {
    opacity: 0,
    x: -500,
    y: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 10,
    transition: {
      duration: 1.5,
      staggerChilden: 0.1,
    },
  },
};

const card01 = {
  initial: {
    opacity: 0,
    x: -500,
    y: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 4,
      type: "spring",
    },
  },
};

const Services = () => {
  return (
    <motion.div id="services" className="bg-[#020202] h-screen mt-28 flex flex-col justify-between z-[-1]">
      {/* Top part ================================*/}
      <motion.div
        className="self-end flex items-center gap-5 h-[300px]"
        variants={topVariants}
        initial="initial"
        whileInView="animate"
      >
        <span className="text-xl tracking-tight ml-2">TechWise AI</span>
        <hr className="w-[500px] border- border-gray-400" />
      </motion.div>

      {/* Medium part ================================*/}
      <motion.div
        className="m-auto max-w-[1366px] flex- flex flex-col items-cente  w-[1300px] "
        variants={mediumVariants}
        initial="initial"
        whileInView="animate"
      >
        <div className="flex items-center gap-8 w-[1400px] "> 
          <img
            src={robotic}
            alt=""
            className="w-[500px] h-[500px]"
          />

      

          <div className="flex flex-col">
            <h1 className="font-thin text-8xl text-gray-300">
              <motion.b
                whileHover={{ color: "#f97316" }}
                variants={mediumVariants}
                initial="initial"
                whileInView="animate"
              >
                Unique{" "}
              </motion.b>
              Ideas
            </h1>

            <h1 className="font-thin text-9xl text-gray-300 ">
              <motion.b whileHover={{ color: "#f97316" }}>For your</motion.b>{" "}
              code
            </h1>
          </div>
        </div>
      </motion.div>

      {/* Bottom part ================================*/}
      <div className="flex items-center flex-wrap w-full m-auto max-w-[1366px]">
        {features.map((feature, index
          ) => (
            <motion.div
              key={index}
              className=""
              variants={card01}
              initial="initial"
              whileInView="animate"
            >
              <div className="flex w-[450px] p-2">
                {/* ICON */}
                <div className="flex mx-6 h-10 w-10 p-2 mt-3 bg-neutral-900 text-orange-600 justify-center items-center rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h5 className="mt-4 mb-6 text-xl">{feature.text}</h5>
                  <p className="text-[18px] p-2 mb-20 text-neutral-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </motion.div>
  );
};

export default Services;
