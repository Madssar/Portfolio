import React from 'react'
import './portfolio.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NftDemo from "../../img/NFTLandingPage.m4v";
import AdminDashboard from "../../img/AdminDashboard.m4v";
import NewsScrapper from "../../img/NewsScrapper.m4v";
import {themeContext} from '../../Context';
import { useContext } from 'react';

function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className='portfolio' id='Portfolio'>
    <span style={{color: darkMode ? 'white' : ''}}>Recent Projects</span>
    <span>Portfolio</span>
      
      <Swiper
      breakpoints={{
        480: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        769: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
          <video width="320" height="240" controls>
            <source src ={NftDemo} type="video/mp4"/>
          </video>
        </SwiperSlide>
        <SwiperSlide>
        <video width="320" height="240" controls>
            <source src ={AdminDashboard} type="video/mp4"/>
          </video>
        </SwiperSlide>
        <SwiperSlide>
        <video width="320" height="240" controls>
            <source src ={NewsScrapper} type="video/mp4"/>
          </video>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
