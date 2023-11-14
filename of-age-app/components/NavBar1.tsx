"use client"

import Image from "next/legacy/image";
import Link from 'next/link';
import { SignUpButton, SignedOut, SignedIn, useUser, UserButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";

function NavBar(){
    const {user} = useUser();

    return (
        <div className="oa-nav w-full">
            <nav className="flex justify-between items-center py-8 lg:py-4 px-11">
                <div className="flex items-center ">
                    <Link href="index.html" aria-current="page" className="md:mr-32"><Image src="/oa-word.png" alt="" width={100} height={33} /></Link>
                    <div className="items-center relative h-full hidden lg:flex">
                        <Link href="/about-us" className="mr-8">
                            <div className="uppercase tracking-tight text-xs underline decoration-2 underline-offset-4">About Us</div>
                        </Link>
                    </div>
                </div>
                <div className=" flex flex-row items-center rounded-[8px] md:px-7 md:py-3 px-4 py-3 signup">
                    <SignedOut>
                        <SignUpButton mode="modal">
                        <div className="md:flex uppercase text-white tracking-tight text-xs cursor-pointer items-center ">Early Access 
                            <span className="hidden md:inline-flex items-center pl-2">
                                <ArrowRight className="" color="white" size={20} />
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