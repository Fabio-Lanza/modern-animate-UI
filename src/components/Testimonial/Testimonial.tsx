import { motion } from "framer-motion";
import { testimonials } from "../../contants/Constants";
import { TestimonialProps } from "../../contants/Constants";

const testmonialVariants = {
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


const Testimonial = () => {
  return (
    <div id="testimonial">
       <motion.h2
        className="text-3xl sm:text-5xl lg:text-7xl text-center mb-32 tracking-wider"
        variants={testmonialVariants}
        initial="initial"
        whileInView="animate"
      >
       Users <span className="gradient-text">Testimonials</span>
      </motion.h2>

      <div className="container">
        <div className="slider">
          {testimonials.map(
            (
              testimonial: TestimonialProps
            ) => (
              <span
                className="flex flex-wrap justify-center items-center p-6"
                key={testimonial.id}
                style={{
                  transform: `rotateY(calc(${testimonial.id}  * 45deg )) translateZ(500px)`,
                }}
              >
                <p className="text-[12px] mt-6 text-neutral-500">
                  {testimonial.text}
                </p>

                <div className="flex gap-4 justify-center items-center">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />

                  <div>
                    <p className="text-[12px]">{testimonial.user}</p>
                    <p className="text-[12px]">{testimonial.company}</p>
                  </div>
                </div>
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
