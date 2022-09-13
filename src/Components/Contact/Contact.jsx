import React, { useRef, useState }  from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';
import {themeContext} from '../../Context';
import { useContext } from 'react';

function Contact() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f2pe9xa', 'template_qr7gqoe', form.current, 'uhIontiFyVvu6H3u6')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    
    <div className="contactMe" id="Contact">
     <div className="w-left">  {/* getting classes(w-left and s-left) from work component */}
        <div className="s-left">
          <span style={{color: darkMode ? 'white' : ''}}>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
          ></div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
