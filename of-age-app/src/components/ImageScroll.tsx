import React, { useEffect, useState, useRef } from 'react';

const ImagesComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const imageRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  imageRefs.current = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    //... add as many refs as you have images
  ];

  const images = [
    'path/to/image1.jpg',
    'path/to/image2.jpg',
    'path/to/image3.jpg',
    //... add as many images as you want
  ];

  useEffect(() => {
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
      observer.observe(ref.current);
    });

    return () => {
      imageRefs.current.forEach((ref, index) => {
        observer.unobserve(ref.current);
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