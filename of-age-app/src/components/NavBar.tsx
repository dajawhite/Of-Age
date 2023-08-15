"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar(){
    const[navbar, setNavbar] = useState(false);
    return (
        <div className="oa-nav">
            <nav className="flex justify-between items-center ">
                <div className="flex items-center">
                    <Link href="index.html" aria-current="page" className="">{/*<Image src="images/Logo-black.svg" loading="lazy" alt="" className="main-logo"/>*/}</Link>
                    <div className="flex items-center relative h-full">
                        <Link href="fnd-devs.html" className="">
                            <div className="">Find devs</div>
                            <div className=""></div>
                            <div className=""></div>
                        </Link>
                        <Link href="find-work.html" className="">
                            <div className="">Find work</div>
                            <div className=""></div>
                            <div className=""></div>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="">
                        <Link href="https://platform.unbench.us/signin" target="_blank" className="">{/*<Image src="images/Profile-black.svg" loading="lazy" alt="" className="profile-icon"/>*/}
                            <div className="">Log in</div>
                        </Link>
                        <Link href="https://platform.unbench.us/signup" target="_blank" className="">
                            <div className="">
                            <div className="">Try it for free</div>
                            </div>
                            <div className="">{/*<Image src="images/Arrow-white.svg" loading="lazy" alt="" className="arrow-link"/><Image src="images/Arrow-white.svg" loading="lazy" alt="" className="arrow-link _2"/>*/}</div>
                        </Link>
                    </div>
                    <Link href="#" className="">
                        <div className="">Menu</div>{/*<Image src="images/Menu-logo-black.svg" loading="lazy" alt="" className="menu-icon"/>*/}
                    </Link>
                </div>
            </nav>
        </div>
    )

}

export default NavBar;