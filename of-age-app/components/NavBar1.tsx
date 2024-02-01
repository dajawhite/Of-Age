"use client"

import Image from "next/legacy/image";
import Link from 'next/link';
import { SignUpButton, SignedOut, SignedIn, useUser, UserButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

function NavBar(){
    const {user} = useUser();
    const pathname = usePathname();
    const currentUrl = `${pathname}`;

    const [pathHighlight, setPathHighlight] = useState("")

    useEffect(() => {
        if (currentUrl == "/about-us"){
            setPathHighlight("about")
        }
        else if (currentUrl == "/"){
            setPathHighlight("home")
        }
    }, [currentUrl])
    
    

    return (
        <div className="oa-nav w-full">
            <nav className="flex justify-between items-center py-8 lg:py-4 px-11">
                <div className="flex items-center ">
                    <Link href="/" aria-current="page" className="md:mr-32"><Image src="/oa-word.png" alt="" width={100} height={33} /></Link>
                    <div className="items-center relative h-full hidden lg:flex">
                        <Link href="/" className="mr-8">
                            <div className={`uppercase text-sm ${pathHighlight=="home"? ' underline decoration-2 underline-offset-4': ''}  montserrat`}>Home</div>
                        </Link>
                        <Link href="/about-us" className="mr-8">
                            <div className={`uppercase text-sm ${pathHighlight=="about" ? ' underline decoration-2 underline-offset-4': ''}  montserrat`}>About Us</div>
                        </Link>
                    </div>
                </div>
                <div className=" flex flex-row items-center rounded-[8px] md:px-7 md:py-3 px-4 py-3">
                    <SignedOut>
                        <SignUpButton mode="modal">
                        <div className="md:flex uppercase text-white text-sm cursor-pointer items-center bg-[--primary] rounded-md py-2 px-4 montserrat semi-bold-text">Early Access 
                            <span className="hidden md:inline-flex items-center pl-2">
                                <ArrowRight className="" color="white" size={20} />
                            </span>
                        </div>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <div className="hidden md:flex mr-4">
                            <h1 className="semi-bold-text uppercase text-primary montserrat">hi, {user?.firstName}</h1>
                        </div>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>

                </div>
            </nav>
        </div>
    )
}

export default NavBar;