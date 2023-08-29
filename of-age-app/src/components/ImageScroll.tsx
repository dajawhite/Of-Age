"use client"

import React, { useEffect, useState, useRef } from 'react';

const ImagesComponent = () => {
  //state variable to keep track of current image displayed
  const [currentImage, setCurrentImage] = useState(0);

  //holds an array of refs, for each section of the page
  const imageRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  imageRefs.current = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    //... add as many refs as you have images
  ];

  const images = [
    '/article-card.png',
    '/article-card.png',
    '/article-card.png',
    //... add as many images as you want
  ];

  useEffect(() => {
    //observes each section of the page
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setCurrentImage(index);
          }
        });
      },
      { threshold: 1 }
    );

    imageRefs.current.forEach((ref, index) => {
      if(ref.current) observer.observe(ref.current);
    });

    return () => {
      imageRefs.current.forEach((ref, index) => {
        if(ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div>
      <div style={{ position: 'fixed', top: '50%', left: '50%' }}>
        <img src={images[currentImage]} alt={`image ${currentImage}`} />
      </div>
      <div>
        {images.map((_, index) => (
          <div
            ref={imageRefs.current[index]}
            key={index}
            style={{ height: '100vh', background: 'lightgrey', marginBottom: '10px' }}
          >
            Scroll here
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesComponent;