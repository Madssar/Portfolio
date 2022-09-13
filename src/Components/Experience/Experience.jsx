import {React, useContext} from 'react'
import './experience.css'
import {themeContext} from '../../Context';
function Experience() {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='exp' id='Experience'>
    <div className="acheivements">
        <div className='circle'>4+</div>
        <span style={{color: darkMode ? 'white' : ''}}>Years</span>
        <span>Experience</span>
    </div>
    <div className="acheivements">
    <div className="circle">10+</div>
        <span style={{color: darkMode ? 'white' : ''}}>Completed</span>
        <span>Projects</span>
    </div>
    {/* <div className="acheivements">
    <div className="circle">2+</div>
        <span>Companies</span>
        <span>Worked</span>
    </div> */}
      
    </div>
  )
}

export default Experience
