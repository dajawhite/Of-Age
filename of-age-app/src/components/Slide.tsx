"use client"
import { useEffect, useRef } from "react";
import Aos from "aos";

function Slide(){
    const leftArrowRef = useRef<HTMLDivElement | null>(null);
    const rightArrowRef = useRef<HTMLDivElement | null>(null);
    const pnProductNavRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

      var scrollAmount = 0; 
        const handleResize = () => {
          if(window.innerWidth <= 767){
            scrollAmount = 300;
          }
          else{
            scrollAmount = 600;
          }
        }

        window.addEventListener('resize', handleResize);
        

        const handleLeftClick = () => {
            pnProductNavRef.current?.scrollBy({
                top: 0,
                left: -scrollAmount,
                behavior: 'smooth'
            });
        };

        const handleRightClick = () => {
            pnProductNavRef.current?.scrollBy({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            });
        };


        leftArrowRef.current?.addEventListener("click", handleLeftClick);
        rightArrowRef.current?.addEventListener("click", handleRightClick);

        // Cleanup listeners when component is unmounted
        return () => {
            leftArrowRef.current?.removeEventListener("click", handleLeftClick);
            rightArrowRef.current?.removeEventListener("click", handleRightClick);
            window.removeEventListener('resize', handleResize);
        }

    }, []);

    return (
       
        <div className=""> 
          <div className="main-wrap">
            {/*showcase parts*/}
            <div className="collections-wrap">
                {/*workbooks*/}
              <div id="pnProductNav" ref={pnProductNavRef} className="book-collection-wrap" data-overflowing="none">
                <div id="pnProductNavContents" className="book-list">
                  {/*belmont*/}
                  <div className="book-item w-full h-auto overflow-hidden opacity-1 ">
                    <div className='absolute bottom-0 left-0 h-24 w-[290px] lg:w-full lg:block bg-gradient-to-t from-neutral-800'>
                      <h3 className='book-cover-title'>Belmont University</h3>
                    </div>
                    <img src="/belmont.jpg" />
                    <div className="hidden absolute first-letter:z-[1] lg:flex items-center justify-start gap-3 lg:gap-4 top-10 left-10 text-body uppercase text-white">
                      <div className="relative block w-2 h-2 lg:h-3 lg:w-3">
                        <span className="absolute inline-block w-full h-full rounded-full bg-aqua animate-ping"></span>
                        <span className="absolute inline-block w-full h-full rounded-full bg-aqua"></span>
                      </div>
                      <h2 className='text-lg'>Now Leasing</h2>
                    </div>
                    <div className='uni-cards py-8 pl-8 pr-12'>
                      <div className='space-y-4'>
                        <h3 className='text-2xl font-semibold'>Building A</h3>
                        <p>Mixed-use<br/>500 W. Broad St.</p>
                        <p>Gravity's original mixed-use residence. Equipped with studio, one, and two-bedroom apartments, and signature amenities including an outdoor movie wall and programming based on wellness.</p>
                      </div>
                      <div className='mt-12'>
                        <hr />
                        <div className='flex flex-row space-x-2'>
                          <p className=''><a className='button rounded-full buttline'>Explore</a></p>
                          <p className=''><a className='button rounded-full buttline'>Availability</a></p>
                          <p className=''><a className='button rounded-full buttline'>Schedule Tour</a></p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  {/*harvard*/}
                  <div className="book-item w-full h-auto lg:w-[580px] lg:h-[670px] lg:rounded-[20px] overflow-hidden opacity-1 ">
                    <div className='absolute bottom-0 left-0 h-24 w-full lg:block bg-gradient-to-t from-neutral-800'>
                      <h3 className='book-cover-title'>Harvard University</h3>
                    </div>
                    <img src="/harvard.jpg" />
                    <div className="hidden absolute first-letter:z-[1] lg:flex items-center justify-start gap-3 lg:gap-4 top-10 left-10 text-body uppercase text-white">
                      <div className="relative block w-2 h-2 lg:h-3 lg:w-3">
                        <span className="absolute inline-block w-full h-full rounded-full bg-aqua animate-ping"></span>
                        <span className="absolute inline-block w-full h-full rounded-full bg-aqua"></span>
                      </div>
                      <h2 className='text-lg'>Now Leasing</h2>
                    </div>
                    <div className='uni-cards py-8 pl-8 pr-12'>
                      <div className='space-y-4'>
                        <h3 className='text-2xl font-semibold'>Building A</h3>
                        <p>Mixed-use<br/>500 W. Broad St.</p>
                        <p>Gravity's original mixed-use residence. Equipped with studio, one, and two-bedroom apartments, and signature amenities including an outdoor movie wall and programming based on wellness.</p>
                      </div>
                      <div className='mt-12'>
                        <hr />
                        <div className='flex flex-row space-x-2'>
                          <p className=''><a className='button rounded-full buttline'>Explore</a></p>
                          <p className=''><a className='button rounded-full buttline'>Availability</a></p>
                          <p className=''><a className='button rounded-full buttline'>Schedule Tour</a></p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  {/*notre dame*/}    
                  <div className="book-item w-full h-auto lg:w-[580px] lg:h-[670px] lg:rounded-[20px] overflow-hidden opacity-1 ">
                    <div className='absolute bottom-0 left-0 h-24 w-full lg:block bg-gradient-to-t from-neutral-800'>
                      <h3 className='book-cover-title'>University of Notre Dame</h3>
                    </div>
                    <img src="/notredame.jpg" />
                    <div className="hidden absolute first-letter:z-[1] lg:flex items-center justify-start gap-3 lg:gap-4 top-10 left-10 text-body uppercase text-white">
                      <div className="relative block w-2 h-2 lg:h-3 lg:w-3">
                        <span className="absolute inline-block w-full h-full rounded-full bg-aqua animate-ping"></span>
                        <span className="absolute inline-block w-full h-full rounded-full bg-aqua"></span>
                      </div>
                      <h2 className='text-lg'>Now Leasing</h2>
                    </div>
                    <div className='uni-cards py-8 pl-8 pr-12'>
                      <div className='space-y-4'>
                        <h3 className='text-2xl font-semibold'>Building A</h3>
                        <p>Mixed-use<br/>500 W. Broad St.</p>
                        <p>Gravity's original mixed-use residence. Equipped with studio, one, and two-bedroom apartments, and signature amenities including an outdoor movie wall and programming based on wellness.</p>
                      </div>
                      <div className='mt-12'>
                        <hr />
                        <div className='flex flex-row space-x-2'>
                          <p className=''><a className='button rounded-full buttline'>Explore</a></p>
                          <p className=''><a className='button rounded-full buttline'>Availability</a></p>
                          <p className=''><a className='button rounded-full buttline'>Schedule Tour</a></p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  {/*oxford*/}    
                  <div className="book-item w-full h-auto lg:w-[580px] lg:h-[670px] lg:rounded-[20px] overflow-hidden opacity-1 ">
                    <div className='absolute bottom-0 left-0 h-24 w-full lg:block bg-gradient-to-t from-neutral-800'>
                      <h3 className='book-cover-title'>Oxford University</h3>
                    </div>
                    <img src="/oxford.jpg" />
                    <div className="hidden absolute first-letter:z-[1] lg:flex items-center justify-start gap-3 lg:gap-4 top-10 left-10 text-body uppercase text-white">
                      <div className="relative block w-2 h-2 lg:h-3 lg:w-3">
                        <span className="absolute inline-block w-full h-full rounded-full bg-aqua animate-ping"></span>
                        <span className="absolute inline-block w-full h-full rounded-full bg-aqua"></span>
                      </div>
                      <h2 className='text-lg'>Now Leasing</h2>
                    </div>
                    <div className='uni-cards py-8 pl-8 pr-12'>
                      <div className='space-y-4'>
                        <h3 className='text-2xl font-semibold'>Building A</h3>
                        <p>Mixed-use<br/>500 W. Broad St.</p>
                        <p>Gravity's original mixed-use residence. Equipped with studio, one, and two-bedroom apartments, and signature amenities including an outdoor movie wall and programming based on wellness.</p>
                      </div>
                      <div className='mt-12'>
                        <hr />
                        <div className='flex flex-row space-x-2'>
                          <p className=''><a className='button rounded-full buttline'>Explore</a></p>
                          <p className=''><a className='button rounded-full buttline'>Availability</a></p>
                          <p className=''><a className='button rounded-full buttline'>Schedule Tour</a></p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  {/*montana*/}    
                  <div className="book-item w-full h-auto lg:w-[580px] lg:h-[670px] lg:rounded-[20px] overflow-hidden opacity-1 ">
                    <div className='absolute bottom-0 left-0 h-24 w-full lg:block bg-gradient-to-t from-neutral-800'>
                      <h3 className='book-cover-title'>University of Montana</h3>
                    </div>
                    <img src="/montana.jpg" />
                    <div className="hidden absolute first-letter:z-[1] lg:flex items-center justify-start gap-3 lg:gap-4 top-10 left-10 text-body uppercase text-white">
                      <div className="relative block w-2 h-2 lg:h-3 lg:w-3">
                        <span className="absolute inline-block w-full h-full rounded-full bg-aqua animate-ping"></span>
                        <span className="absolute inline-block w-full h-full rounded-full bg-aqua"></span>
                      </div>
                      <h2 className='text-lg'>Now Leasing</h2>
                    </div>
                    <div className='uni-cards py-8 pl-8 pr-12'>
                      <div className='space-y-4'>
                        <h3 className='text-2xl font-semibold'>Building A</h3>
                        <p>Mixed-use<br/>500 W. Broad St.</p>
                        <p>Gravity's original mixed-use residence. Equipped with studio, one, and two-bedroom apartments, and signature amenities including an outdoor movie wall and programming based on wellness.</p>
                      </div>
                      <div className='mt-12'>
                        <hr />
                        <div className='flex flex-row space-x-2'>
                          <p className=''><a className='button rounded-full buttline'>Explore</a></p>
                          <p className=''><a className='button rounded-full buttline'>Availability</a></p>
                          <p className=''><a className='button rounded-full buttline'>Schedule Tour</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-row arrows'>
            {/*left arrow*/}
            <div className="">
                <div id="advancer-left" ref={leftArrowRef} className="collections-nav-button collections-nav-button--left">
                    <div className="collections-arrow-icon"><svg width="8" height="14" viewBox="0 0 8 14"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893C0.683418 -0.0976314 1.31658 -0.0976314 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683418 14.0976 0.292893 13.7071Z"
                                fill="currentColor" />
                        </svg>
                    </div>
                </div>
            </div>
            {/*right arrow*/}
            <div className="">
              <div id="advancer-right" ref={rightArrowRef} className="collections-nav-button">
                  <div className="collections-arrow-icon"><svg width="8" height="14" viewBox="0 0 8 14"
                          fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893C0.683418 -0.0976314 1.31658 -0.0976314 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683418 14.0976 0.292893 13.7071Z"
                              fill="currentColor" />
                      </svg>
                  </div>
              </div>
            </div>
          </div>
        </div>
        
    );
}

export default Slide;