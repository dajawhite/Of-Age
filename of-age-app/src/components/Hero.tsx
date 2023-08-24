"use client"

import AOS from 'aos'
import React, { useState } from 'react'
import NavBar from './NavBar';

function Hero(){
    const [showImages, setShowImages] = useState(true);
    const [showText, setShowText] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [fadeOutImages, setFadeOutImages] = useState(false);
    const [fadeOutText, setFadeOutText] = useState(false);
    
    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });

        const timers = [
            setTimeout(() => {
              setFadeOutImages(true);
              setTimeout(() => {
                setShowImages(false);
                setShowText(true);
              }, 1000); // matches the fade-out duration
            }, 4000),
            setTimeout(() => {
              setFadeOutText(true);
              setTimeout(() => {
                setShowText(false);
                setShowNavbar(true);
              }, 1000); // matches the fade-out duration
            }, 7000)
          ];
      
          return () => timers.forEach(timer => clearTimeout(timer));
      },[]);
    
    return(
        <div className='relative '>
            {/* Images */}
            {showImages && (
                <div className={`h-screen flex flex-row items-center pt-24 pb-24 justify-center space-x-16 px-6 transition-all duration-1000 ${fadeOutImages ? 'opacity-0' : ''}`}>
                    <div data-aos="fade-up" data-aos-delay="500">
                        <img src="/whohere.jpg" alt="Image 1" className='rounded-md' />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="1500">
                        <img src="/beingbuilt.jpg" alt="Image 2" className='rounded-md'/>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="2500">
                        <img src="/events.jpg" alt="Image 3" className='rounded-md'/>
                    </div>
                </div>
            )}

            {/* Text */}
            {showText && (
                <div className={`h-screen flex flex-col items-center pt-28 pb-24 justify-center px-6 transition-all duration-1000 bg-black ${fadeOutText ? 'opacity-0' : ''}`} data-aos="fade-in">
                    <h1 className="text-sm text-center leading-loose text-white">
                        Share your incredible <br/> stories - your way.
                    </h1>
                </div>
            )}

            {/* Navbar/Header Section - Initially hidden */}
            {showNavbar && (
                <div className="top-0 left-0 w-full transition-all duration-1000">
                    <NavBar data-aos="fade-up"></NavBar>
                    <header className='items-center pt-28 pb-24'>
                        <div className='mb-16 flex flex-col items-center' data-aos="fade-up" data-aos-delay="4000">
                        <h1 className='text-8xl text-center leading-loose'>
                            Share your incredible <br/> stories  - your way.
                        </h1>
                        </div>
                        <div className='flex flex-col items-center' data-aos="fade-up" data-aos-delay="4500">
                        <p className='text-2xl text-center leading-loose'>
                            Post the stories you are passionate about, short or long. <br/> Create photo updates, vlogs, articles or even books.
                        </p>
                        </div>
                    </header>
                </div>
            )}
        </div> 
    )
}

export default Hero;