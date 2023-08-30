import { useScroll, motion } from "framer-motion";
import "../styles/card.css";
import React, { useRef } from "react";

const Card = ({ post, profile, info, name }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  return (
    <>
      <motion.div
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
        className="card"
      >
        <div className="image">
          <img src={post} alt="post" />
        </div>
        <div className="info">
          <h2>{info}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            repellendus nemo cumque nisi quod dolorem!
          </p>
        </div>
        <div className="profile">
          <img src={profile} alt="profile" />
          <div className="profile-info">
            <h4>{name}</h4>
            <p>SEPTEMBER 1, 2023</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
