import React from 'react'
import './work.css'
import reactimg1 from "../../img/react2.png";
import js1 from "../../img/js1.png"
import node2 from "../../img/node2.png"
import mongo1 from "../../img/mongo1.png"
import express1 from "../../img/express1.png"
import { motion } from "framer-motion";


function Work() {

  return (
    <div className='work'>
      {/* <div className="s-left">
        <span style={{color: darkMode ? 'white' : ''}}>Work for All these</span>
        <span>Brands & Clients</span>
        <br />
        <span>Lorem ispum is simpley dummy text of printing of printing
          <br />
          Lorem ipsum is simply dummy text of printing
          <br />
          Lorem ipsum is simply dummy
        </span>
        <button className="button cv-btn">Hire ME</button>
        
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div> */}



      <div className="w-right">

        <motion.div 
          initial={{ rotate: 70 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle">
            <div className="w-secCircle">
                <img src={node2} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={reactimg1} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={js1} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={mongo1} alt="" />
            </div>
            <div className="w-secCircle express">
                <img src={express1} alt="" />
            </div>
        </motion.div>


        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Work
