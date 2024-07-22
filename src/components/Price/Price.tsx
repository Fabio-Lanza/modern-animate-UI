import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { pricingOptions } from "../../contants/Constants";


const titleVariants = {
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
      duration: 5,
      type: "spring",
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
      duration: 3,
     type: "spring",
    },
  },
};


const roboVariant = {
    initial: {
      opacity: 0,
      x: 900,
      y: -500,
    },
    animate: {
      opacity: 1,
      x: 450,
      y: -380,
      rotate: [360, 120, 90, 0],
      transition: {
        duration: 5,
        type: "spring",
        delay: 0.5,
      },
    },
  };


const Price = () => {
  return (
    <div className="mt-56 max-w-[1366px] m-auto relative">
      <motion.h2
        className="text-3xl sm:text-5xl lg:text-7xl text-center mb-32 tracking-wider"
        variants={titleVariants}
        initial="initial"
        whileInView="animate"
      >
        Pricing <span className="gradient-text">Plans</span>
      </motion.h2>

      {/* Robot */}
      <motion.div variants={roboVariant} initial='initial' whileInView='animate'
        className='bg-[url("assets/robotPrice.svg")] bg-no-repeat bg-cover bg-top h-[500px] w-[550px] absolute top-[70px] left-[300px]  z-[-1]'
      ></motion.div>

      <div className="flex flex-wrap">
        {/* Card*/}
        {pricingOptions.map((item, index) => (
        <div className="w-full lg:w-1/3 sm:w-1/2 p-2 " key={index}>
          <motion.div
            className="p-10 border border-neutral-700 rounded-xl shadow-md"
            variants={card01}
            initial="initial"
            whileInView="animate"
          >
            <p className="text-4xl mb-8">{item.title} </p>
            <p className="mb-16">
              <span className="text-5xl mt-6 mr-2">{item.price}</span>
              <span className="text-neutral-500 tracking-wider text-lg">
                /Month
              </span>
            </p>
            <ul>
              {item.features.map((feature, index) => (
                <li className="flex mt-8 items-center gap-2" key={index}>
                  <CheckCircle2 className="text-orange-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div>
              <button 
                className="inline-flex items-center justify-center text-center w-full h-12 mt-20 p-5 tracking-tight btn-orange text-xl hover:text-neutral-900"
              >
                See Details
              </button>
            </div>
          </motion.div>
        </div>
        ) )}


      </div>
    </div>
  );
};

export default Price;
