import React, { useEffect, useState } from "react";
import "../styles/price.css";
import { motion } from "framer-motion";

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

const Price = () => {
  const [usdPrice, setusdPrice] = useState(null);
  const [gbpPrice, setgbpPrice] = useState(null);
  const [eurPrice, seteurPrice] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.coindesk.com/v1/bpi/currentprice.json`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setusdPrice(data.bpi.USD.rate);
        setgbpPrice(data.bpi.GBP.rate);
        seteurPrice(data.bpi.EUR.rate);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div id="Price" className="price-container">
        <div className="currency-info">
          <img src="./btc.png" alt="btc" />
          <h1>BitCoin Prices</h1>
        </div>
        <div className="currency-container">
          <motion.div variants={popUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }} className="currency-card">
            <h1>United States Dollar</h1>
            <p>$ {usdPrice}</p>
          </motion.div>
          <motion.div variants={popUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }} className="currency-card">
            <h1>British Pound Sterling</h1>
            <p>&pound; {gbpPrice}</p>
          </motion.div>
          <motion.div variants={popUpAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }} className="currency-card">
            <h1>Euro</h1>
            <p>&euro; {eurPrice}</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Price;
