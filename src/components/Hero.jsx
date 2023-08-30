import React from "react";
import "../styles/hero.css";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: () => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 1,
      ease: "easeOut",
    },
  }),
};
const popUpAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <>
      <div id="About" className="hero">
        <div className="hero-1">
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
          >
            <h1>
              Built on a <span>Robust</span> and <span>Powerful</span> Platform.
            </h1>
          </motion.div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus fugiat libero doloremque fugit, odit odio, quasi quas
            dolore minima, perferendis maiores eligendi ullam architecto enim.
          </p>
          <motion.div
            variants={popUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            className="features"
          >
            <ul>
              <li>
                <img src="./feature1.jpg" /> 100% Private Data{" "}
              </li>
              <li>
                <img src="./feature2.jpg" /> 99.99% Uptime Guarantee
              </li>
              <li>
                <img src="./feature3.png" /> 24/7 Dedicated Support
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="hero-2">
          <img src="./pc.jpg" alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Hero;
