import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import FirstSliderImage from '../images/slider1.jpeg';
import SecondSliderImage from '../images/slider2.jpeg';
import ThirdSliderImage from '../images/slider3.jpeg';
import {css} from '@emotion/core';

 
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    return (
        <div style={{marginTop:"50px"}}>
           <AutoplaySlider play={true} cancelOnInteraction={false} interval={4000} css={slidercss}>
            <div data-src={FirstSliderImage} alt="First Slider Image"></div> 
             <div data-src={SecondSliderImage} alt="Second Slider Image"/>
             <div data-src={ThirdSliderImage} alt="Third Slider Image"/>
            </AutoplaySlider> 
        </div>
    );
};

export default Slider;

const slidercss = css`
 height:80vh;
 @media(max-width:600px){
     height:33vh;
 }
`