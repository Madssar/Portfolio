import React from 'react'
import Toggle from '../Toggle/Toggle'
import './navbar.css'
import {themeContext} from '../../Context';
import { useContext } from 'react';
import Burger from './Burger';

function Navbar() {
  const theme = useContext(themeContext);
  const dark = theme.state.darkMode;
  return (
    <div className='navbar' style={{background: dark ? "black" : "white"}}>
      <div className="left">
        <div className="logo">
            Madssar
        </div>
            <Toggle/>
      </div>
      <Burger/>
      
    </div>
  )
}

export default Navbar
