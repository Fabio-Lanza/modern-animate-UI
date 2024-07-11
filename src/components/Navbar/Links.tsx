import { motion } from "framer-motion";
import { links } from "../../contants/Constants";
import { SideProps } from "../../contants/Constants";

const variants = {
  open: {
    transition: { staggerChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, straggerDirection: 1 },
  },
};

const itemsVariant = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 100,
    opacity: 0,
  },
};

const Links = ({ setOpen }: SideProps) => {
  return (
    <motion.div
      className="bg-gray-300 absolute w-full h-full flex flex-col justify-center items-center gap-14 text-black z-[100]"
      variants={variants}
    >
      {links.map((link:{name: string, link: string}, index: number) => (
        <motion.a
          href={link.link}
          key={index}
          className="text-4xl font-extralight hover:text-gray-400"
          variants={itemsVariant}
          whileHover={{ scale: 1.1 }}
          onClick={() => setOpen(false)}
        >
          {link.name}
        </motion.a>
      ))}
      
    </motion.div>
  );
};

export default Links;
