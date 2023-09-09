"use client"

import Image from "next/legacy/image";
import Link from 'next/link';
import { useState } from 'react';
import AOS from 'aos';

function NavBar(){
    const[menuActive, setMenuActive] = useState(false);
    const toggleMenu =() =>{
        setMenuActive(!menuActive);
        if(!menuActive){
            document.body.style.overflow ='hidden';
        }
        else{
            document.body.style.overflow = 'auto';
        }
    }

    AOS.init({
        duration: 500,
        once: true
    });

    return (
        <div className="oa-nav w-full">
            <nav className="flex justify-between items-center py-8 lg:py-4 px-11">
                <div className="flex items-center ">
                    <Link href="index.html" aria-current="page" className="mr-32"><Image src="/oa-word.png" alt="" width={100} height={70} /></Link>
                    <div className="flex items-center relative h-full hidden lg:flex">
                        <Link href="index.html" className="mr-8">
                            <div className="uppercase tracking-tight text-xs underline decoration-2 underline-offset-4">who are we</div>
                        </Link>
                        <Link href="index.html" className="mr-8">
                            <div className="uppercase tracking-tight text-xs underline decoration-2 underline-offset-4">what we do</div>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between items-center ">
                    <div className="flex items-center mr-8 hidden md:flex">
                        <Link href="index.html" target="_blank" className="nav-butt login">
                            <Image src="/profile.png" width={15} height={15} alt="" className='mr-1'/>
                            <div className="uppercase tracking-tight text-xs primtext">Log in</div>
                        </Link>
                        <Link href="index.html" target="_blank" className="nav-butt signup flex">
                            <div className="uppercase text-white tracking-tight text-xs">Early Access</div>
                            <div className="ml-8"><Image src="/white-arrow.png" alt="" width={15} height={15} /></div>
                        </Link>
                    </div>
                    <Link onClick={toggleMenu} href="#" className="flex items-center">
                        <div className="uppercase tracking-tight text-xs mr-4 primtext">More</div>
                        <Image src="/menu-icon.svg" alt="" width={50} height={50}/>
                    </Link>
                </div>
            </nav>

            {menuActive && (
                <div className='fixed top-0 left-0 w-full h-full bg-white z-50' data-aos="fade-down">
                    <nav className="flex justify-between items-center py-8 lg:py-4 px-11">
                        <div className="flex items-center ">
                            <Link href="index.html" aria-current="page" className="mr-32"><Image src="/oa-word.png" alt="" width={100} height={70} /></Link>
                            <div className="flex items-center relative h-full hidden lg:flex">
                                <Link href="index.html" className="mr-8">
                                    <div className="uppercase tracking-tight text-xs underline decoration-2 underline-offset-4">who are we</div>
                                </Link>
                                <Link href="index.html" className="mr-8">
                                    <div className="uppercase tracking-tight text-xs underline decoration-2 underline-offset-4">what we do</div>
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-between items-center ">
                            <div className="flex items-center mr-8 hidden md:flex">
                                <Link href="index.html" target="_blank" className="nav-butt login">
                                    <Image src="/profile.png" width={15} height={15} alt="" className='mr-1'/>
                                    <div className="uppercase tracking-tight text-xs primtext">Log in</div>
                                </Link>
                                <Link href="index.html" target="_blank" className="nav-butt signup flex">
                                    <div className="uppercase text-white tracking-tight text-xs">Early Access</div>
                                    <div className="ml-8"><Image src="/white-arrow.png" alt="" width={15} height={15} /></div>
                                </Link>
                            </div>
                            <a onClick={toggleMenu} href="#" className="flex items-center close">
                                <div className="uppercase tracking-tight text-xs mr-4 primtext">Close</div>
                                <Image src="/close.png" alt="" width={35} height={35} className='close-icon'/>
                            </a>
                        </div>
                    </nav>
                    <div className='flex justify-center items-center h-full'>
                        <h1 className='mt-[-8rem] uppercase font-bold text-8xl mx-auto text-left max-w-[18rem] md:max-w-none' data-aos="fade-up" data-aos-delay="300">
                            Find devs<br/>Find work
                        </h1>

                    </div>
                </div>
            )}
        </div>
    )
}

export default NavBar;