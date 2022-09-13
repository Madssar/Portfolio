import React, { useContext } from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Work from './Components/Work/Work';
import { themeContext } from './Context';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
 
  return (
    <div className='App'
    style={{
      background : darkMode ? 'black' : '',
      color : darkMode ? 'white' : ''
    }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Work/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App;