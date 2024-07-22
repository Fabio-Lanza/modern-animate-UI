import { resourcesLinks, platformLinks, communityLinks } from "../../contants/Constants";
import { motion } from "framer-motion";

const middleVariants = {
  initial: {
    opacity: 0,
    x: 0,
    y: 100,
  },
  animate: {
    x: 0,
    y: 0,
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
    x: 100,
    y: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};
const leftVariants = {
  initial: {
    opacity: 0,
    x: -200,
    y: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const Footer = () => {
  return (
    <footer className=" mt-20 pb-28 border-t py-10 border-neutral-700 ">
      <div className="max-w-[1366px] m-auto grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-4 gradient-text">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <motion.li key={index} variants={leftVariants} initial="initial" whileInView="animate">
                <a
                  href={link.href}
                  className="text-neutral-400 hover:text-white"
                >
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 gradient-text">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <motion.li key={index} variants={middleVariants} initial="initial" whileInView="animate">
                <a
                  href={link.href}
                  className="text-neutral-400 hover:text-white"
                >
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 gradient-text">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <motion.li key={index} variants={rightVariants} initial="initial" whileInView="animate">
                <a
                  href={link.href}
                  className="text-neutral-400 hover:text-white"
                >
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;