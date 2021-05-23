import React from 'react';
import './MainHome.css';
import Home from "../Home/Home";
import TopHome from '../TopHome/TopHome';
import Contact from '../Contact/Contact';
import BottomHome from '../BottomHome/BottomHome';
import Slider from '../Slider/Slider';
import Swiper2 from '../Swiper2/Swiper2';


const MainHome = () => {
    return (
        <div>
            <div >
                <TopHome></TopHome>
                <BottomHome></BottomHome>
                <Slider></Slider>
                <Home></Home>
                <Swiper2></Swiper2>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default MainHome;