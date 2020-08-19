import React from 'react';
import './Hero.scss';
import Slider1 from '../img/dj_bm/slider/slider1.jpg';
import Slider2 from '../img/dj_bm/slider/slider2.jpg';
import Slider3 from '../img/dj_bm/slider/slider3.jpg';
import Slider4 from '../img/dj_bm/slider/slider4.jpg';
import Slider5 from '../img/dj_bm/slider/slider5.jpg';
import Slider6 from '../img/dj_bm/slider/slider6.jpg';
import Slider7 from '../img/dj_bm/slider/slider7.jpg';
import Slider8 from '../img/dj_bm/slider/slider8.jpg';
import Slider9 from '../img/dj_bm/slider/slider9.jpg';

const Hero = () => {
    
    return (
        <div className="hero-container">
			<figure id="hero-collection">	
				<img src={ Slider1 } alt="slider 1" />
				<img src={ Slider2 } alt="slider 2" />
				<img src={ Slider3 } alt="slider 3" />
				<img src={ Slider4 } alt="slider 4" />
				<img src={ Slider5 } alt="slider 5" />
				<img src={ Slider6 } alt="slider 6" />
				<img src={ Slider7 } alt="slider 7" />
				<img src={ Slider8 } alt="slider 8" />
				<img src={ Slider9 } alt="slider 9" />
				<img src={ Slider1 } alt="slider 1" />
			</figure>
			<div className="hero-overlay">
				<h1 className="white"> <span className="red">DJ&nbsp;</span>Banging Mick</h1>
			</div>
        </div>
    )
}

export default Hero;