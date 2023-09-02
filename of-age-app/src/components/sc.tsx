"use client"
// components/SwitchContentOnScroll.tsx
import React, { useEffect, useState } from 'react';

const SwitchContentOnScroll: React.FC = () => {
  const [currentContent, setCurrentContent] = useState('Content 1');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentContent(`Content ${entry.target.id}`);
        }
      });
    }, { threshold: 0.5 });

    const card1 = document.getElementById('1');
    const card2 = document.getElementById('2');
    const card3 = document.getElementById('3');

    if (card1) observer.observe(card1);
    if (card2) observer.observe(card2);
    if (card3) observer.observe(card3);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="p-8 border-2 border-blue-500">
      {currentContent}
      <div id="1" className="h-48"></div>
      <div id="2" className="h-48"></div>
      <div id="3" className="h-48"></div>
    </div>
  );
};

export default SwitchContentOnScroll;
