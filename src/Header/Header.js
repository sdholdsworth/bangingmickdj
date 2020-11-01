import React, { useState, useEffect } from 'react';
import './Header.scss';
import Logo from '../img/logo.png';

const Header = () => {
    
    //SCROLL Navigation
    //hooks for scroll navigation
    const [ yLocation, setYLocation ] = useState(window.scrollY);   
    
    const handleScroll = () => {

        //variables
        const navHome = document.querySelector('#nav-home'),
        navAbout = document.querySelector('#nav-about'),
        navGallery = document.querySelector('#nav-gallery'),
        navCollection = document.querySelector('#nav-collection'),
        navContact = document.querySelector('#nav-contact');
   
        //update Y-axis position
        setYLocation(window.scrollY);

        //Determining the scroll location against section locations (for navbar link animation update on scroll)
        //1. determine the locations of each section 
        const  Home = document.getElementById('home'),
               About = document.getElementById('about'),
               Gallery = document.getElementById('gallery'),
               Collection = document.getElementById('collection'),
               Contact = document.getElementById('contact'),
               yOffsetHome = 0, //zero offset for home location
               yOffset = -100, //offset for other locations
               HomeLocation = Home.getBoundingClientRect().top + window.pageYOffset + yOffsetHome,
               AboutLocation = About.getBoundingClientRect().top + window.pageYOffset + yOffset,
               GalleryLocation = Gallery.getBoundingClientRect().top + window.pageYOffset + yOffset,
               CollectionLocation = Collection.getBoundingClientRect().top + window.pageYOffset + yOffset,
               ContactLocation = Contact.getBoundingClientRect().top + window.pageYOffset + yOffset;         

        //2. compare the current YLocation value to the sections start & end values and if in this range, set the desired class on the navigation links 
        if(yLocation >= HomeLocation && yLocation < AboutLocation) {
            navHome.classList.add('current');
            navAbout.classList.remove('current');
            navGallery.classList.remove('current');
            navCollection.classList.remove('current');
            navContact.classList.remove('current');
        } else if(yLocation >= AboutLocation && yLocation < GalleryLocation) {
            navHome.classList.remove('current');
            navAbout.classList.add('current');
            navGallery.classList.remove('current');
            navCollection.classList.remove('current');
            navContact.classList.remove('current');
        } else if(yLocation >= GalleryLocation && yLocation < CollectionLocation) {
            navHome.classList.remove('current');
            navAbout.classList.remove('current');
            navGallery.classList.add('current');
            navCollection.classList.remove('current');
            navContact.classList.remove('current');
        } else if(yLocation >= CollectionLocation && yLocation < ContactLocation) {
            navHome.classList.remove('current');
            navAbout.classList.remove('current');
            navGallery.classList.remove('current');
            navCollection.classList.add('current');
            navContact.classList.remove('current');
        } else {
            navHome.classList.remove('current');
            navAbout.classList.remove('current');
            navGallery.classList.remove('current');
            navCollection.classList.remove('current');
            navContact.classList.add('current');
        }        
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); //clear down what's in memory (like unmount method in CBC's)
        }     
    })

    //CLICK Navigation       
    //"Home" CLICK Navigation 
    const handleClickHome = (e) => { 

        //variables
        const navHome = document.querySelector('#nav-home'),
              navAbout = document.querySelector('#nav-about'),
              navGallery = document.querySelector('#nav-gallery'),
              navCollection = document.querySelector('#nav-collection'),
              navContact = document.querySelector('#nav-contact'),
              Hdr = document.querySelector('.header'),
              burgerMenu = document.querySelector('#burger-menu');
        
        Hdr.classList.remove('expanded');
        burgerMenu.classList.remove('close');
    
        //determine "Home" section location & setup smooth scroll functionality
        const id = 'home',
              element = document.getElementById(id),
              y = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({top: y, behavior: 'smooth'});

        //add current class to "Home" link and ensure current class is cleared from any other links
        navHome.classList.add('current');
        navAbout.classList.remove('current');
        navGallery.classList.remove('current');
        navCollection.classList.remove('current');
        navContact.classList.remove('current');

        //prevent the default hash ID being added to the URL
        e.preventDefault();
    }
    
    //"About" CLICK Navigation
    const handleClickAbout = (e) => {
        
        //variables
        const navHome = document.querySelector('#nav-home'),
              navAbout = document.querySelector('#nav-about'),
              navGallery = document.querySelector('#nav-gallery'),
              navCollection = document.querySelector('#nav-collection'),
              navContact = document.querySelector('#nav-contact'),
              Hdr = document.querySelector('.header'),
              burgerMenu = document.querySelector('#burger-menu');
        
        Hdr.classList.remove('expanded');
        burgerMenu.classList.remove('close');
    
        //determine "About" section location & setup smooth scroll functionality
        const id = 'about',
              element = document.getElementById(id),
              yOffset = -50,
              y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});

        //add current class to "About" link and ensure current class is cleared from any other links
        navHome.classList.remove('current');
        navAbout.classList.add('current');
        navGallery.classList.remove('current');
        navCollection.classList.remove('current');
        navContact.classList.remove('current');
    
        //prevent the default hash ID being added to the URL
        e.preventDefault();
    }
    

    //"Gallery" CLICK Navigation
    const handleClickGallery = (e) => {
        
        //variables
        const navHome = document.querySelector('#nav-home'),
              navAbout = document.querySelector('#nav-about'),
              navGallery = document.querySelector('#nav-gallery'),
              navCollection = document.querySelector('#nav-collection'),
              navContact = document.querySelector('#nav-contact'),
              Hdr = document.querySelector('.header'),
              burgerMenu = document.querySelector('#burger-menu');
        
        Hdr.classList.remove('expanded');
        burgerMenu.classList.remove('close');
    
        //determine "Gallery" section location & setup smooth scroll functionality
        const id = 'gallery',
              element = document.getElementById(id),
              yOffset = -50,
              y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});

        //add current class to "Gallery" link and ensure current class is cleared from any other links
        navHome.classList.remove('current');
        navAbout.classList.remove('current');
        navGallery.classList.add('current');
        navCollection.classList.remove('current');
        navContact.classList.remove('current');
    
        //prevent the default hash ID being added to the URL
        e.preventDefault();
    }

    //"Collection" CLICK Navigation
    const handleClickCollection = (e) => {
        
        //variables
        const navHome = document.querySelector('#nav-home'),
              navAbout = document.querySelector('#nav-about'),
              navGallery = document.querySelector('#nav-gallery'),
              navCollection = document.querySelector('#nav-collection'),
              navContact = document.querySelector('#nav-contact'),
              Hdr = document.querySelector('.header'),
              burgerMenu = document.querySelector('#burger-menu');
        
        Hdr.classList.remove('expanded');
        burgerMenu.classList.remove('close');
    
        //determine "Collection" section location & setup smooth scroll functionality
        const id = 'collection',
              element = document.getElementById(id),
              yOffset = -50,
              y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});

        //add current class to "Collection" link and ensure current class is cleared from any other links
        navHome.classList.remove('current');
        navAbout.classList.remove('current');
        navGallery.classList.remove('current');
        navCollection.classList.add('current');
        navContact.classList.remove('current');
    
        //prevent the default hash ID being added to the URL
        e.preventDefault();
    }

    //"Contact" CLICK Navigation
    const handleClickContact = (e) => {
        
        //variables
        const navHome = document.querySelector('#nav-home'),
              navAbout = document.querySelector('#nav-about'),
              navGallery = document.querySelector('#nav-gallery'),
              navCollection = document.querySelector('#nav-collection'),
              navContact = document.querySelector('#nav-contact'),
              Hdr = document.querySelector('.header'),
              burgerMenu = document.querySelector('#burger-menu');
        
        Hdr.classList.remove('expanded');
        burgerMenu.classList.remove('close');
    
        //determine "Contact" section location & setup smooth scroll functionality
        const id = 'contact',
              element = document.getElementById(id),
              yOffset = -50,
              y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});

        //add current class to "Contact" link and ensure current class is cleared from any other links
        navHome.classList.remove('current');
        navAbout.classList.remove('current');
        navGallery.classList.remove('current');
        navCollection.classList.remove('current');
        navContact.classList.add('current');
    
        //prevent the default hash ID being added to the URL
        e.preventDefault();
    }

    const handleBurgerMenuOpen  = () => {

        const Hdr = document.querySelector('.header'),
              burgerMenu = document.querySelector('#burger-menu');
        burgerMenu.classList.add('close');
        Hdr.classList.add('expanded');
    };

    const handleBurgerMenuClose = () => {

        const Hdr = document.querySelector('.header'),
              burgerMenu = document.querySelector('#burger-menu');
        burgerMenu.classList.remove('close');
        Hdr.classList.remove('expanded');
    };
      
    return (        
        <div id="home">
            <header className="header">
                <div id="logo">
                    <a href="#home" onClick={ handleClickHome }><img src={ Logo } alt="dj banging mick"/></a>
                </div>
                <div id="navbar">
                    <nav>
                        <ul>
                            <li><a id="nav-home" className="current" href="#home" onClick={ handleClickHome }>Home</a></li>
                            <li><a id="nav-about" href="#about" onClick={ handleClickAbout }>About</a></li>
                            <li><a id="nav-gallery" href="#gallery" onClick={ handleClickGallery }>Gallery</a></li>
                            <li><a id="nav-collection" href="#collection" onClick={ handleClickCollection }>Collection</a></li>
                            <li><a id="nav-contact" href="#contact" onClick={ handleClickContact } >Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div id="telephone">
                    <span className="red">Tel:</span><a href="tel:+34609765797">+34 609 76 57 97</a>
                </div>
                <div id="burger-menu" className="btn-burger" onClick={() => {
                    const mobMenu = document.getElementById('burger-menu');
                    if(mobMenu.classList.contains('close')) {
                        handleBurgerMenuClose();
                    } else {
                       handleBurgerMenuOpen();
                    }
                  }}>
                    <div className="burger-btn-line"></div>
                    <div className="burger-btn-line"></div>
                    <div className="burger-btn-line"></div>
                </div>
            </header>
        </div>
    )
}

export default Header;