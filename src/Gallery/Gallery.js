import React from 'react';
import './Gallery.scss';
import DJGallery from "../img/dj_gallery.png";
import Img_01 from "../img/dj_bm/1.jpg";
import Img_02 from "../img/dj_bm/2.jpg";
import Img_03 from "../img/dj_bm/3.jpg";
import Img_04 from "../img/dj_bm/4.jpg";
import Img_05 from "../img/dj_bm/5.jpg";
import Img_06 from "../img/dj_bm/6.jpg";
import Img_07 from "../img/dj_bm/7.jpg";
import Img_08 from "../img/dj_bm/8.jpg";
import Img_09 from "../img/dj_bm/9.jpg";
import Img_10 from "../img/dj_bm/10.jpg";
import Img_11 from "../img/dj_bm/11.jpg";
import Img_12 from "../img/dj_bm/12.jpg";
import Img_13 from "../img/dj_bm/13.jpg";
import Img_14 from "../img/dj_bm/14.jpg";
import Img_15 from "../img/dj_bm/15.jpg";
import Img_16 from "../img/dj_bm/16.jpg";

const Gallery = () => {
    return (
        <div>
            <section id="gallery" className="section-dark">
                <div id="gallery-images">
                    <img src={ Img_01 } alt="img 1"></img>
                    <img src={ Img_02 } alt="img 2"></img>
                    <img src={ Img_03 } alt="img 3"></img>
                    <img src={ Img_04 } alt="img 4"></img>
                    <img src={ Img_05 } alt="img 5"></img>
                    <img src={ Img_06 } alt="img 6"></img>
                    <img src={ Img_07 } alt="img 7"></img>
                    <img src={ Img_08 } alt="img 8"></img>
                    <img src={ Img_09 } alt="img 9"></img>
                    <img src={ Img_10 } alt="img 10"></img>
                    <img src={ Img_11 } alt="img 11"></img>
                    <img src={ Img_12 } alt="img 12"></img>
                    <img src={ Img_13 } alt="img 13"></img>
                    <img src={ Img_14 } alt="img 14"></img>
                    <img src={ Img_15 } alt="img 15"></img>
                    <img src={ Img_16 } alt="img 16"></img>
                    

                </div>
                <div id="dj-gallery">
                    <img src={ DJGallery } alt="dj gallery"></img>
                </div>
            </section>
        </div>
    )
}

export default Gallery;