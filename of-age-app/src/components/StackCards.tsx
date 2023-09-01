"use client"

import React, { useEffect, useRef, useState } from "react";

const StackCards = () => {
    const stackCardsRef = useRef<HTMLUListElement>(null);
    const [scrolling, setScrolling] = useState(false);

  // This effect sets up the IntersectionObserver and scroll event listener
  useEffect(() => {
    const element = stackCardsRef.current;

    // This is the callback for the IntersectionObserver
    // It adds or removes the scroll event listener depending on whether the element is in the viewport
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Element is in the viewport, so add the scroll event listener
        window.addEventListener("scroll", handleScroll);
      } else {
        // Element is not in the viewport, so remove the scroll event listener
        window.removeEventListener("scroll", handleScroll);
      }
    });

    // Start observing the element
    if (element) observer.observe(element);

    // Clean up by removing the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // This function is called whenever the user scrolls
  const handleScroll = () => {
    // If we're already scrolling, return early to avoid starting another animation frame
    if (scrolling) return;

    // Set scrolling to true to indicate that we're currently scrolling
    setScrolling(true);

    // Request an animation frame and call the animateStackCards function
    window.requestAnimationFrame(animateStackCards);
  };

  // This function applies the transformation to the stack cards
  const animateStackCards = () => {
    const element = stackCardsRef.current;
    if (!element) return;

    const top = element.getBoundingClientRect().top;
    const items = Array.from(element.getElementsByClassName("js-stack-cards__item")) as HTMLElement[];
    const cardTop = 50; // you need to define this value
    const cardHeight = 100; // you need to define this value
    const marginY = 8; // you need to define this value
    const minScale = 0.5; // minimum scale factor


    for (var i = 0; i < items.length; i++) {
        var scrolling = cardTop - top - i * (cardHeight + marginY);
        if (scrolling > 0) {
            var scale = Math.max((cardHeight - scrolling * 0.05) / cardHeight, minScale);
            var translateY = marginY * i;
            if (scale === minScale) {
                translateY = marginY * i + (1 - scale) * cardHeight / 2;
            }
            items[i].style.transform = "translateY(" + translateY + "px) scale(" + scale + ")";
        }
      }

    // Set scrolling to false to indicate that we're no longer scrolling
    setScrolling(false);
  };

  return (
    <div>
        <ul className="stack-cards js-stack-cards" ref={stackCardsRef}>
      <li className="stack-cards__item js-stack-cards__item">
        <div className="card__content">
            <div>
                <h2>Card One</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p><a href="#top" className="btn btn--accent">Read more</a></p>
            </div>
            <figure>
                <img src="../shared/img-1.jpg" alt="Image description"/>
            </figure>
        </div>
      </li>

      <li className="stack-cards__item js-stack-cards__item">
        <div className="card__content">
            <div>
                <h2>Card One</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p><a href="#top" className="btn btn--accent">Read more</a></p>
            </div>
            <figure>
                <img src="../shared/img-1.jpg" alt="Image description"/>
            </figure>
        </div>
      </li>

      <li className="stack-cards__item js-stack-cards__item">
        <div className="card__content">
            <div>
                <h2>Card One</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p><a href="#top" className="btn btn--accent">Read more</a></p>
            </div>
            <figure>
                <img src="../shared/img-1.jpg" alt="Image description"/>
            </figure>
        </div>
      </li>

      <li className="stack-cards__item js-stack-cards__item">
        <div className="card__content">
            <div>
                <h2>Card One</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p><a href="#top" className="btn btn--accent">Read more</a></p>
            </div>
            <figure>
                <img src="../shared/img-1.jpg" alt="Image description"/>
            </figure>
        </div>
      </li>

      {/* additional card items here */}
    </ul>
    </div>
    
  );
};

export default StackCards;

