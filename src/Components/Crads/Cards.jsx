import React, { useContext } from 'react'
import './cards.css'
import {themeContext} from '../../Context';
function Cards({emoji, heading, detail, color}) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='cards' style={{borderColor: {color}}}>
      <img src={emoji} alt="emoji" />
      <span>{heading}</span>
      <span style={{color: darkMode ? 'white' : ''}}>{detail}</span>
      {/* <button className='c-button'>Learn More</button> */}
    </div>
  )
}

export default Cards
