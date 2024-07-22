import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textBg = useTransform(scrollYProgress, [0, 1], ["0%", "900%"]);

  const card03 = {
    initial: {
      opacity: 0,
      x: -800,
      y: -500,
    },
    animate: {
      opacity: 1,
      x: 100,
      y: 0,
      rotate: [0, 90, 120, 360],
      transition: {
        duration: 4,
        type: "spring",
      },
    },
  };

  return (
    <div
      ref={ref}
      className=" h-screen w-full mt-28 relative flex justify-center items-center z-[-10] overflow-hidden"
    >
      <motion.h1
        style={{ y: textBg }}
        className="text-7xl tracking-widest ml-24"
      >
        Transforming Ideas{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Into Digital Reality
        </span>{" "}
      </motion.h1>

      {/* Robot */}
      <motion.div
        variants={card03}
        initial="initial"
        whileInView="animate"
        className='bg-[url("assets/roboParallax.svg")] bg-no-repeat bg-cover bg-top h-[500px] w-[550px] absolute top-[70px] left-[300px]  z-[-1]'
      ></motion.div>
    </div>
  );
};

export default Parallax;
