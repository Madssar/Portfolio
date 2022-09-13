import React, { useContext } from 'react';
import "./intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesemoji from "../../img/glassesemoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {themeContext} from '../../Context';
import { motion } from 'framer-motion';
import CV from '../Services/Madssar-Aftab-CV.pdf'
function Intro() {
  const transition = {duration : 2, type: 'spring'};

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='intro' id='intro'>
    <div className="i-left">
    <div className="description">
        <span style={{color: darkMode ? 'white' : ''}}>Hey I AM</span>
        <span>Madssar Aftab</span>
        <span style={{color: darkMode ? 'white' : ''}}>I am a Full Stack MERN Developer</span>
    </div>
      <a href={CV} download>
        <button className="button cv-btn">Download CV</button>
        </a>
    <div className="i-icons">
    <a href="https://www.github.com/Madssar" rel="noreferrer"  target="_blank">
        <img src={Github} alt="Github" />
    </a>
    <a href='https://www.linkedin.com/in/madssar-aftab-a92411172' rel='noreferrer' target="_blank">
        <img src={LinkedIn} alt="LinkedIn" />
    </a>
    </div>
    </div>
    


    <div className="i-right">
        <img src={Vector1} alt="blue-vector" />
        <img src={Vector2} alt="yellow-vector" />
        <img src={boy} alt="boy" />
        <motion.img
          initial={{left: '-36%'}}
          whileInView= {{left: '-24%'}}
          transition= {transition}
          src={glassesemoji} alt="glasses-emoji"
          className='glasses-emoji' />
    
        <motion.div
         initial={{top: "-4%", left: "95%"}}
         whileInView={{left: "68%"}}
         transition={transition}
         style={{top: "-4%", left: "68%"}}
         className="floating-div">
            <FloatingDiv image={crown} text1='Frontend' text2='Development'/>
        </motion.div>

        <motion.div
          initial={{top: "18rem", left: "18rem"}}
          whileInView={{left: "0rem"}}
          transition={transition}
          style={{top: "18rem", left: "0rem"}}
          className="floating-div">
            <FloatingDiv image={thumbup} text1='Backend' text2='Development'/>
        </motion.div>


        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>

    </div>
      
    </div>
  )
}

export default Intro
