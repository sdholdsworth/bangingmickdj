import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <span>Copyright&nbsp;<i id="copy" className="fa fa-copyright"></i>&nbsp;<strong className="red">bangingmickdj.co.uk</strong>&nbsp;All Rights Reserved</span>
                <div id="social">
                    <a href="https://www.facebook.com/DJ-Banging-mick-101634288151123/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                    <a href="https://twitter.com/bangingmick" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
                    <a href="https://uk.linkedin.com/in/mick-lewis-06a545106" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-square"></i></a>
                    <a href="https://soundcloud.com/bangingmickdj" target="_blank" rel="noopener noreferrer"><i className="fab fa-soundcloud"></i></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;