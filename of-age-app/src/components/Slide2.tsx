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
