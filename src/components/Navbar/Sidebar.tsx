import { useState } from "react";
import Links from "./Links";
import ToogleButton from "./ToogleButton";
import { motion } from "framer-motion";

export interface SideProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: { delay: 0, type: "spring", stiffness: 30, damping: 20 },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: { delay: 0.5, type: "spring", stiffness: 400, damping: 40 },
  },
};


const Sidebar = () => {
  const [open, setOpen] = useState(false);


  return (
    <motion.div
      animate={open ? "open" : "closed"}
      variants={variants}
      className="fixed flex flex-col items-center justify-center text-black z-50"
    >
      <motion.div
        variants={variants}
        className="fixed top-0 left-0 bottom-0 w-[400px] bg-white"
      >
        <Links setOpen={setOpen} />
      </motion.div>

      <ToogleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
