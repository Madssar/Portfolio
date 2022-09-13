import React from 'react'
import {Link} from 'react-scroll';
import styled from 'styled-components';


const RightNavCss = styled.div`
.right{
    display: flex;
    flex: 1;
    align-items: center;
    font-weight: 400;
}
.navList{
    flex: 10;
    margin-right: 11rem;
}
.navList > ul {
    display: flex;
    gap: 1rem;
    
}

.navList > ul :hover {
    color: var(--orange);
    cursor: pointer;
}
.i-btn{
    position: absolute;
    left: 85%;
}
.btn{
    flex: 2; 
}

@media screen and (min-width: 768px)
{
  .con-btn{
    display: none;
  }
}
@media screen and (max-width: 768px) {
    .navList>ul {
      flex-flow: column nowrap;
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      margin-top: 0;
      padding-top: 3rem;
      background-color: #fdc807;
      z-index: 10;
      color: #333;
      transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    }
    .btn{
        display: none;
    }
  }
  @media screen and (min-width: 769px) and  (max-width: 1024px){
    margin-top: 1rem;

    .i-btn{
      margin-left: -4rem;
    }
  }
  @media screen and (min-width: 1024px) and  (max-width: 1324px){
    margin-top: 1rem;

    .i-btn{
      margin-left: -2rem;
    }
  }
  @media screen and (min-width: 1600px) and  (max-width: 1999px){
    margin-top: 1rem;

    .i-btn{
      margin-left: 3%;
    }
  }
  @media screen and (min-width: 2000px) and  (max-width: 2400px){
    margin-top: 1rem;

    .i-btn{
      margin-left: 6rem;
    }
  }`;
  

function RightNav({open,setOpen}) {
  return (
    <RightNavCss open={open} setOpen={setOpen}>
    <div className="right">
      <div className='navList'>
        <ul style={{listStyleType: 'none'}}>
            <Link spy={true} to='intro' smooth={true} activeClass="activeClass">
            <li onClick={() => setOpen(!open)}>Home</li>
            </Link>
            <Link spy={true} to='Services' smooth={true}>
            <li onClick={() => setOpen(!open)}>Services</li>  
            </Link>
            <Link spy={true} to='Experience' smooth={true}>
            <li onClick={() => setOpen(!open)}>Experience</li>
            </Link>
            <Link spy={true} to='Portfolio' smooth={true}>
            <li onClick={() => setOpen(!open)}>Portfolio</li>
            </Link>
            <Link spy={true} to='Contact' smooth={true}>
            {/* if Burger then show contact else do not show contact  i did this because for larger screen i have contact button */}
            {open ? <li className='con-btn' onClick={() => setOpen(!open)}>Contact</li> : ''}
            </Link>
        </ul>
      </div>
      
      <div className="i-btn">
      <Link spy={true} to='Contact' smooth={true}>
        <button className='button btn'>ContactMe</button>
            </Link>
      </div>
      </div>
      </RightNavCss>
  )
}

export default RightNav