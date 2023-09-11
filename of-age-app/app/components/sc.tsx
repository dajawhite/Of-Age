"use client"

import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';

function SwitchContent () {
    const [show, setShow] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setShow(prev => prev % 3 + 1);
        }, 3000);

        return () => {
            clearInterval(timer);
        };
    }, []);


  return (
    <div className='flex items-center justify-center'>
        {show === 1 && (
            <div className=''>
                <img src="/article-card-1.png" className='rounded-[20px] h-[500px]'/>
            </div>
        )}
        {show === 2 && (
            <div className=''>
                <img src="/article-card-2.png" className='rounded-[20px] h-[500px]'/>
            </div>
        )}
        {show === 3 && (
            <div className=''>
                <img src="/article-card-3.png" className='rounded-[20px] h-[500px]'/>
            </div>
        )}
    </div>
  );
};

export default SwitchContent;

