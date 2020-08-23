import React from 'react';
import './Collection.scss';

const Collection = () => {
    return (
        <div>
            <section id="collection" className="section-light">
                <p>Here's a little sample of some of my collection.....</p>
                <div id="collection-samples">                    
                    <iframe 
                        scrolling="no" 
                        frameborder="no" 
                        allow="autoplay" 
                        title="Progressive Mayhem U G Media XL"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/876828184&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">                       
                    </iframe>
                    <iframe 
                        scrolling="no" 
                        frameborder="no" 
                        allow="autoplay" 
                        title="The Banging Mick Legacy Vol 6"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/864797386&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                    </iframe>
                    <iframe 
                        scrolling="no" 
                        frameborder="no" 
                        allow="autoplay" 
                        title="The Rising"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/798745843&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                    </iframe>
                    <iframe
                        scrolling="no" 
                        frameborder="no" 
                        allow="autoplay" 
                        title="UG Media Show 8"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/791343832&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                    </iframe>
                    <iframe
                        scrolling="no" 
                        frameborder="no" 
                        allow="autoplay" 
                        title="Tranzfuzion Reload"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/698782063&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                    </iframe>
                </div>
                <p>Like what you see? ... view more of my collection <a href="https://soundcloud.com/bangingmickdj" target="_blank" rel="noopener noreferrer">here</a></p>
            </section>
        </div>
    )
}

export default Collection;