import { motion } from "framer-motion";


interface SingleProjectProps {
  item: {
    id: number;
    title: string;
    img: string;
    desc: string;
  };
}

const rightVariants = {
    initial: {
      opacity: 0,
      x: 500,
      y: 0,
    },
    animate: {
      opacity: 1,
      x:-650,
      y: 10,
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
      y: 0,
    },
    animate: {  
        x:720,
        y:0,
      opacity: 0.7,
      transition: {
        duration: 2,
        ease: "easeInOut",
      }}
 
  };



const SingleProject = ({ item }: SingleProjectProps) => {


  return (
    <div className="max-w-[1366px] m-auto z-[-1] h-screen">

      <div className="container w-full h-full flex justify-center items-center gap-12 overflow-hidden">
        <motion.div className="img-container flex-1" variants={leftVariants} initial="initial" whileInView="animate">
          <img src={item.img} alt="" className="h-full w-full rounded-lg object-cover " />
        </motion.div>
        <motion.div className="textContainer flex-1 flex flex-col gap-9" variants={rightVariants} initial="initial" whileInView="animate">
          <h2 className="text-7xl font-bold">{item.title}</h2>
          <p className="text-[18px] text-neutral-500">{item.desc}</p>
          <button className="btn-orange w-48">Read More</button>
        </motion.div>
      </div>
    </div>
  );
};

export default SingleProject;
