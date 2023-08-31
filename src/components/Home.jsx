import React from "react";
import "../styles/home.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const pdf_file_url = "https://ayush-csi-coinnexus.netlify.app/ayush_resume.pdf";

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

const Home = () => {
  function downloadFileAtURL(url) {
    const filename = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
    <>
      <div id="Home" className="home-container">
        <div className="home-1">
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
          >
            <h1>
              Buy and Trade <span>Cryptos</span> like Never Before
            </h1>
          </motion.div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            maiores mollitia praesentium possimus omnis cumque quasi maxime
            corrupti perspiciatis eum. Lorem ipsum eaque expedita odit nesciunt
            temporibus asperiores ad. Aspernatur!
          </p>
          <div>
            <motion.button
              onClick={() => downloadFileAtURL(pdf_file_url)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="down-btn"
            >
              Download App
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="price-btn"
            >
              <Link
                to="Price"
                smooth="true"
                spy={true}
                offset={-50}
                duration={1000}
              >
                View Pricing
              </Link>
            </motion.button>
          </div>
        </div>
        <div className="home-2">
          <img src="./phone.jpg" alt="phone" />
        </div>
      </div>
    </>
  );
};

export default Home;
