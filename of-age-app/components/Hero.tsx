"use client"

import AOS from 'aos'
import React, { useState } from 'react'
import NavBar from './NavBar1';

function Hero(){
    const [showImages, setShowImages] = useState(true);
    const [showText, setShowText] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [fadeOutImages, setFadeOutImages] = useState(false);
    const [fadeOutImage1, setFadeOutImage1] = useState(false);
    const [fadeOutImage2, setFadeOutImage2] = useState(false);
    const [fadeOutImage3, setFadeOutImage3] = useState(false);
    const [fadeOutText, setFadeOutText] = useState(false);

    
    const noScroll = () =>{
        if (!showNavbar){
            document.body.style.overflow ='hidden';
        }
        else{
            document.body.style.overflow = 'auto';
        }
    }

    React.useEffect(() => {
        noScroll();
    }, [showNavbar]);
      
    
    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });

        const timers = [
            //after 4s fade out images & within 1s remove images & show text
            
            setTimeout(() => {
                setFadeOutImage1(true);
            }, 2500),

            setTimeout(() => {
                setFadeOutImage2(true);
            }, 3000),

            setTimeout(() => {
                setFadeOutImage3(true);
            }, 3500),

            setTimeout(() => {
                setFadeOutImages(true);
                setTimeout(() => {
                    setShowImages(false);
                    setShowText(true);
                }, 1000)
            }, 4000),

            //after 7s fade out text & within 1s remove text & show navbar and hero
            setTimeout(() => {
              setFadeOutText(true);
              setTimeout(() => {
                setShowText(false);
                setShowNavbar(true);
              }, 2000); // matches the fade-out duration
            }, 6500)
          ];
      
          return () => {
            timers.forEach(timer => clearTimeout(timer));
          }

    },[]);
    
    return(
        <div className='relative'>
            
            {/* Images */}
            {showImages && (
                <div className={`h-screen flex flex-col md:flex-row items-center md:py-24 justify-center space-y-4 md:space-x-14 md:px-10 transition-all duration-1000`}>
                    <div data-aos="fade-up" data-aos-delay="500" className={`image-container ${fadeOutImage1 ? 'opacity-0' : ''}`}>
                        <img src="/whohere.jpg" alt="Image 1" className='rounded-md ' />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="1000" className={`image-container ${fadeOutImage2 ? 'opacity-0' : ''}`}>
                        <img src="/beingbuilt.jpg" alt="Image 2" className='rounded-md' />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="1500" className={`image-container ${fadeOutImage3 ? 'opacity-0' : ''}`}>
                        <img src="/events.jpg" alt="Image 3" className='rounded-md' />
                    </div>
                </div>
            )}

            {/* Text */}
            {showText && (
                <div className={`h-screen flex flex-col items-center pt-8 md:pt-28 pb-24 justify-center px-6 transition-all duration-1000 bg-black ${fadeOutText ? 'opacity-0' : ''}`} data-aos="fade-in">
                    <h1 className="text-xl text-center leading-loose text-white">
                    Make the most of your university experience <br/> share your story & connect with others. 
                    </h1>
                </div>
            )}

            {/* Navbar/Header Section - Initially hidden */}
            {showNavbar && (
                <div className="top-0 left-0">
                    <NavBar data-aos="fade-down"></NavBar>
                    <header className='items-center pt-16 md:pt-28 pb-24 px-4 md:px-6 lg:px-11'>
                        <div className='mb-16 md:mb-30 flex flex-col items-center' data-aos="fade-up" data-aos-delay="4000">
                            <h1 className='text-4xl md:text-6xl lg:text-8xl text-center leading-loose'>
                                Meet who's building startups at your university & beyond
                            </h1>
                        </div>
                        <div className='flex flex-col items-center px-11' data-aos="fade-up" data-aos-delay="4500">
                            <p className='text-xl md:text-2xl text-center leading-loose'>
                            Of Age is your insider pass to the university start-up ecosystem. We're passionate about students creating and building. Sign up for a first look at who's building what. 
                            </p>
                        </div>
                    </header>
                </div>
            )}
        </div> 
    )
}

export default Hero;