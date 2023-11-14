"use client"

import Image from "next/legacy/image";
import Link from 'next/link';
import AOS from 'aos';
import { SignUpButton, SignOutButton, SignedOut, SignedIn, useUser, UserButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";

function NavBar(){
    const {user} = useUser();

    AOS.init({
        duration: 500,
        once: true
    });

    return (
        <div className="oa-nav w-full">
            <nav className="flex justify-between items-center py-8 lg:py-4 px-11">
                <div className="flex items-center ">
                    <Link href="index.html" aria-current="page" className="mr-32"><Image src="/oa-word.png" alt="" width={100} height={33} /></Link>
                    <div className="items-center relative h-full hidden lg:flex">
                        <Link href="/about-us" className="mr-8">
                            <div className="uppercase tracking-tight text-xs underline decoration-2 underline-offset-4">About Us</div>
                        </Link>
                    </div>
                </div>
                <div className=" flex flex-row nav-butt signup">
                    <SignedOut>
                        <SignUpButton mode="modal">
                        <div className="uppercase text-white tracking-tight text-xs cursor-pointer ">Early Access 
                            <span className="hidden md:inline">
                                <ArrowRight className="" color="white" size={12} />
                            </span>
                        </div>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <div className="hidden md:flex mr-4">
                            <h1 className="font-semibold uppercase text-white">hi, {user?.firstName}</h1>
                        </div>
                    </SignedIn>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                        {/*<div className="uppercase text-white tracking-tight text-xs cursor-pointer">Sign Out 
                            <span className="hidden md:inline ml-2">
                                <Image className="" src="/white-arrow.png" alt="" width={15} height={15} />
                            </span>
                        </div>*/}
                    </SignedIn>

                   

                    
                </div>
            </nav>
        </div>
    )
}

export default NavBar;