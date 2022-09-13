import React, { useContext } from "react";
import "./services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Cards from "../Crads/Cards";
import {themeContext} from '../../Context';
import {motion} from "framer-motion";


function Services() {
  const transition = {duration: "2", type: "spring"};
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      <div className="s-left">
        <span style={{color: darkMode ? "white" : ""}}>My Awesome</span>
        <span>Services</span>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="s-right">
      {/* 1st card */}
        <motion.div 
        initial={{left: "25rem"}}
        whileInView={{left: "14rem"}}
        transition={transition}
        style={{left: '14rem'}}
        >
        <Cards
          emoji = {HeartEmoji}
          heading = {'Frontend Development'}
          detail = {'Javascript, React, HTML, CSS'}
        />
        </motion.div>

        {/* 2nd card */}
        <motion.div 
         initial={{ left: "-11rem", top: "12rem" }}
         whileInView={{ left: "-4rem" }}
         transition={transition}
         style={{left: '-4rem', top: '12rem'}}>
        <Cards
            emoji={Glasses}
            heading={"Backend Development"}
            detail={"Nodejs, Express"}
          />
        </motion.div>

        {/* 3rd card */}
        <motion.div 
         initial={{ top: "19rem", left: "25rem" }}
         whileInView={{ left: "12rem" }}
         transition={transition}
         style={{left: '12rem', top: '19rem'}}
         >
        <Cards
            emoji={Humble}
            heading={"Database"}
            detail={
              "MongoDB,Firebase"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>

      </div>

    </div>
  );
}

export default Services;
