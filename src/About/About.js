import React from 'react';
import './About.scss';
import DJBM from '../img/dj_bm/4.jpg';
import DJAbout from '../img/dj_about.png'

const About = () => {
    return (
        <div>
            <section id="about" className="section-light">   
                <div id="dj-about">
                    <img src={ DJAbout } alt="about section dj icon"></img>
                </div>
                <article>
                    <p>Hello all and a very warm welcome to my website! If you know anything about me already, you will know I love to tinker with things, have always been good with my hands and have a true passion for making great music!</p>
                    <p>I worked as a mechanic and plant operator/engineer for several years. I always had a passion for music, loved to go clubbing with my friends, meet new people and have a good dance. One day, I decided to buy myself a set of decks. I will never look back… this was one of the best purchases I had ever made in my life. I started practicing in my spare time and shortly after, this hobby of mine kept growing on me and I started spending a lot of my time on my decks and just couldn't get away from them. I started really loving mixing and creating music. When I became pretty good, I started to see myself as a disc jockey and had even thought about doing this for a living. I have been into music from as far back as I can remember and have been handy on the decks now for over two decades.</p>
                    <p>Now semi-retired and living the dream out in Lanzarote, enjoying the sun, sand and sea… I still perform mixes live on radio stations as well as performing at various gigs and venues. I just love to DJ and it is my true passion to make great music for all of my fans and followers. I highly recommend you have a listen to some of my great mixes below in my collection and on Soundcloud... I am sure you will really like what you hear!</p>
                    <p>I hope you really enjoy viewing my website and listening to some of my great mixes. Please feel free to drop me a like and follow me on any of my social media links, it would be greatly appreciated! … and if you're on the lookout for a great DJ… you have come to the right place!</p>
                </article>
                <figure id="djbm">
                    <img src={ DJBM } alt="dj banging mick"></img>
                    <figcaption>DJ Banging Mick</figcaption>
                </figure>
            </section>
        </div>
    )
}

export default About;