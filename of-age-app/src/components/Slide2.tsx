"use client"
import { useEffect, useRef } from "react";
import Aos from "aos";

function Slide2(){
    const leftArrowRef = useRef<HTMLDivElement | null>(null);
    const rightArrowRef = useRef<HTMLDivElement | null>(null);
    const pnProductNavRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scrollAmount = 1450; 

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
        }

    }, []);

    return (
        <>
            {/*showcase parts*/}
            <div className='flex flex-row arrows-2 justify-end'>
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
            {/*workbooks*/}
            <div id="pnProductNav" ref={pnProductNavRef} className="" data-overflowing="none">
                {/* #1 */}
                <div className="article-wrap">
                    <div className="article-relative">
                        <div className="article-image-wrap">
                            <div className="article-overflow-item">
                                <img src="/belmont.jpg"></img>
                            </div>
                        </div>
                            
                    </div>
                    <div className="article-card-wrap">
                        <div className="article-card-image-wrap">
                            <div className="article-image-overflow-box">
                                <img src="/article-card.png" className="cover-image article-card"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="article-wrap">
                    <div className="article-relative">
                        <div className="article-image-wrap">
                            <div className="article-overflow-item">
                                <img src="/belmont.jpg"></img>
                            </div>
                        </div>
                            
                    </div>
                    <div className="article-card-wrap">
                        <div className="article-card-image-wrap">
                            <div className="article-image-overflow-box">
                                <img src="/article-card.png" className="cover-image article-card"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="article-wrap">
                    <div className="article-relative">
                        <div className="article-image-wrap">
                            <div className="article-overflow-item">
                                <img src="/belmont.jpg"></img>
                            </div>
                        </div>
                            
                    </div>
                    <div className="article-card-wrap">
                        <div className="article-card-image-wrap">
                            <div className="article-image-overflow-box">
                                <img src="/article-card.png" className="cover-image article-card"></img>
                            </div>
                        </div>
                    </div>
                </div>
                    

                    



            
            </div>
            
          </>
          
        
    );
}

export default Slide2;
