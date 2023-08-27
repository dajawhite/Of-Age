"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar(){
    const[navbar, setNavbar] = useState(false);
    return (
        <div className="oa-nav w-full">
            <nav className="flex justify-between items-center py-8 md:py-4 px-11">
                <div className="flex items-center ">
                    <Link href="index.html" aria-current="page" className="mr-32"><Image src="/oa-word.png" alt="" width={100} height={70} /></Link>
                    <div className="flex items-center relative h-full hidden md:flex">
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
                    <Link href="#" className="flex items-center">
                        <div className="uppercase tracking-tight text-xs mr-4 primtext">More</div>
                        <Image src="/menu-icon.svg" alt="" width={50} height={50}/>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;