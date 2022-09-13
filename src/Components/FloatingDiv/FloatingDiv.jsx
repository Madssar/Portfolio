import React, { useContext } from 'react'
import "./floatingDiv.css"
import {themeContext} from '../../Context';
function FloatingDiv({image, text1, text2}) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='floating-Div'>
      <img src={image} alt="" />
      <span style={{color: darkMode ? 'black' : ''}}>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  )
}

export default FloatingDiv
