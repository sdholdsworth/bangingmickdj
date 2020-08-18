import React from 'react';
import './Header.scss';
import Logo from '../img/logo.png';

//function to switch to Home once scrolled up from anywhere below home
window.addEventListener('scroll', function() {
    var Ylocation = window.scrollY;
    console.log('Y-Location = ', Ylocation);
    
    const navHome = document.getElementById('nav-home');
    const navAbout = document.getElementById('nav-about');
    const navGallery = document.getElementById('nav-gallery');
    const navCollection = document.getElementById('nav-collection');
    const navContact = document.getElementById('nav-contact');

    const Hdr = document.querySelector('.header')


    //check Y-location of section
    // const HOME = document.getElementById('home');
    //console.log('Home Location = ', window.HOME.scrollY);
    

    //shrink the fixed header when scrolled down
    if(Ylocation >= 100) {
        Hdr.classList.add('small-header');
    } else {
        Hdr.classList.remove('small-header');
    }


    //scroll location animation animation
    // if(Ylocation <= 918) {
    //     navHome.classList.add('current');
    //     navAbout.classList.remove('current');
    //     navGallery.classList.remove('current');
    //     navCollection.classList.remove('current');
    //     navContact.classList.remove('current');
    // } else if (Ylocation >= 919 && Ylocation <= 1877) {
    //     navHome.classList.remove('current');
    //     navAbout.classList.add('current');
    //     navGallery.classList.remove('current');
    //     navCollection.classList.remove('current');
    //     navContact.classList.remove('current');
    // } else if (Ylocation >= 1878 && Ylocation <= 2856) {
    //     navHome.classList.remove('current');
    //     navAbout.classList.remove('current');
    //     navGallery.classList.add('current');
    //     navCollection.classList.remove('current');
    //     navContact.classList.remove('current');
    // } else if (Ylocation >= 2857 && Ylocation <= 3835) {
    //     navHome.classList.remove('current');
    //     navAbout.classList.remove('current');
    //     navGallery.classList.remove('current');
    //     navCollection.classList.add('current');
    //     navContact.classList.remove('current');
    // } else {
    //     navHome.classList.remove('current');
    //     navAbout.classList.remove('current');
    //     navGallery.classList.remove('current');
    //     navCollection.classList.remove('current');
    //     navContact.classList.add('current');
    // }


});


const Header = () => {

    const locationHome = (e) => {

        const handleLocationHome = () => {

        const id = 'home';
        const yOffset = 0; 
        const element = document.getElementById(id);
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
        console.log('Y for HOME = ', y);
        
        
        const navHome = document.getElementById('nav-home');
        const navAbout = document.getElementById('nav-about');
        const navGallery = document.getElementById('nav-gallery');
        const navCollection = document.getElementById('nav-collection');
        const navContact = document.getElementById('nav-contact');

        navHome.classList.add('current');
        navAbout.classList.remove('current');
        navGallery.classList.remove('current');
        navCollection.classList.remove('current');
        navContact.classList.remove('current');
        
        }

        e.preventDefault();
        //add the event listener to the Home navigation link
        const navHome = document.getElementById('nav-home');
        navHome.addEventListener('click', handleLocationHome());
    }

    const locationAbout = (e) => {

        const handleLocationAbout = () => {
        
        const id = 'about';
        const yOffset = -60; 
        const element = document.getElementById(id);
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
        console.log('Y for ABOUT = ', y);

        const navHome = document.getElementById('nav-home');
        const navAbout = document.getElementById('nav-about');
        const navGallery = document.getElementById('nav-gallery');
        const navCollection = document.getElementById('nav-collection');
        const navContact = document.getElementById('nav-contact');

        navHome.classList.remove('current');
        navAbout.classList.add('current');
        navGallery.classList.remove('current');
        navCollection.classList.remove('current');
        navContact.classList.remove('current');
        }
        //prevent default URL prefix behaviour
        e.preventDefault();
        //add the event listener to the About navigation link
        const navAbout = document.getElementById('nav-about');
        navAbout.addEventListener('click', handleLocationAbout());
        
    }

    const locationGallery = (e) => {

        const handleLocationGallery = () => {
        
        const id = 'gallery';
        const yOffset = -60; 
        const element = document.getElementById(id);
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
        
        const navHome = document.getElementById('nav-home');
        const navAbout = document.getElementById('nav-about');
        const navGallery = document.getElementById('nav-gallery');
        const navCollection = document.getElementById('nav-collection');
        const navContact = document.getElementById('nav-contact');

        navHome.classList.remove('current');
        navAbout.classList.remove('current');
        navGallery.classList.add('current');
        navCollection.classList.remove('current');
        navContact.classList.remove('current');
        }

        e.preventDefault()
        //add the event listener to the Gallery navigation link
        const navGallery = document.getElementById('nav-gallery');
        navGallery.addEventListener('click', handleLocationGallery());
    }

    const locationCollection = (e) => {

        const handleLocationCollection = () => {
        
        const id = 'collection';
        const yOffset = -60; 
        const element = document.getElementById(id);
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
        
        const navHome = document.getElementById('nav-home');
        const navAbout = document.getElementById('nav-about');
        const navGallery = document.getElementById('nav-gallery');
        const navCollection = document.getElementById('nav-collection');
        const navContact = document.getElementById('nav-contact');

        navHome.classList.remove('current');
        navAbout.classList.remove('current');
        navGallery.classList.remove('current');
        navCollection.classList.add('current');
        navContact.classList.remove('current');
        }
        
        e.preventDefault()
        //add the event listener to the Gallery navigation link
        const navCollection = document.getElementById('nav-collection');
        navCollection.addEventListener('click', handleLocationCollection());
    }

    const locationContact = (e) => {

        const handleLocationContact = () => {
    
        const id = 'contact';
        const yOffset = -60; 
        const element = document.getElementById(id);
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});

        const navHome = document.getElementById('nav-home');
        const navAbout = document.getElementById('nav-about');
        const navGallery = document.getElementById('nav-gallery');
        const navCollection = document.getElementById('nav-collection');
        const navContact = document.getElementById('nav-contact');

        navHome.classList.remove('current');
        navAbout.classList.remove('current');
        navGallery.classList.remove('current');
        navCollection.classList.remove('current');
        navContact.classList.add('current');
        }
        
        e.preventDefault()
        //add the event listener to the Gallery navigation link
        const navContact = document.getElementById('nav-contact');
        navContact.addEventListener('click', handleLocationContact());
    }
    
    return (
        <div id="home">
            <header className="header">
                <div id="logo">
                    <img src={ Logo } alt="dj banging mick"/>
                </div>
                <div id="navbar">
                    <nav>
                        <ul>
                            <li><a id="nav-home" className="current" href="#home" onClick={ locationHome }>Home</a></li>
                            <li><a id="nav-about" href="#about" onClick={ locationAbout }>About</a></li>
                            <li><a id="nav-gallery" href="#gallery" onClick={ locationGallery }>Gallery</a></li>
                            <li><a id="nav-collection" href="#collection" onClick={ locationCollection }>Collection</a></li>
                            <li><a id="nav-contact" href="#contact" onClick={ locationContact }>Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div id="telephone">
                    <span className="red">Tel:</span><a href="tel:+34609765797">+34 609 76 57 97</a>
                </div>

            </header>
        </div>
    )
}

export default Header;