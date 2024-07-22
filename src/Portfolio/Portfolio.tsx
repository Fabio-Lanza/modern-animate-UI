import { projects } from "../contants/Constants";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import SingleProject from "./SingleProject";
import Footer from "../components/Footer/Footer";

const Portfolio = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <>
      <div ref={ref} className="relative ">
        <div className="sticky top-20 left-0 mt-20  text-center text-7xl z-50 overflow-hidden">
          <span className="gradient-text tracking-wider">Feature works</span>
          <motion.div
            style={{ scaleX }}
            className="progressBar w-[97%] ml-6 h-1 bg-gray-300 mt-5 rounded-full"
          ></motion.div>
        </div>
        {projects.map(
          (
            item: { id: number; title: string; img: string; desc: string },
            index: number
          ) => (
            <SingleProject item={item} key={index} />
          )
        )}
      </div>

      <Footer />
    </>
  );
};

export default Portfolio;
