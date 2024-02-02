"use client"

import { Instagram, Linkedin, Youtube, Mail, Music2, Twitter, MoveRight } from "lucide-react";


function Footer(){

    return(
        <footer className=' px-2 pb-2'>
        <div className='rounded-[20px] bg-blue-200/50 py-12 px-8 lg:px-16'>
          <div className='mb-24 text-center md:text-left oswald'>
            <h1 className='text-xl md:text-3xl text-primary'>Connecting the next generation of tech.</h1>
          </div>
          <div className='mb-24 grid grid-rows-12 lg:grid-cols-3 lg:grid-rows-3 lg:gap-x-8 text-primary'>
            <a href="mailto:oafounders@gmail.com" className='animated-link flex flex-row justify-between lg:self-end'>
              <div className='flex flex-row space-x-4 montserrat'>
                <Mail size={28} color="#1b2954"/>
                <p>Email Us</p>
              </div>
              <div>
              <MoveRight size={28} color="#1b2954"/>
              </div>
            </a>
            <hr className="lg:hidden border-solid text-primary"></hr>
            <a href="https://www.instagram.com/oaforstudents/" className='animated-link flex flex-row justify-between lg:self-end'>
              <div className='flex flex-row space-x-4 montserrat'>
              <Instagram size={28} color="#1b2954"/>
                <p>Instagram</p>
              </div>
              <div>
                <MoveRight size={28} color="#1b2954"/>
              </div>

            </a>
            <hr className="lg:hidden border-solid text-primary"></hr>
            <a href="https://www.linkedin.com/company/of-age/" className='animated-link flex flex-row justify-between lg:self-end'>
              <div className='flex flex-row space-x-4 montserrat'>
              <Linkedin size={28} color="#1b2954"/>
                <p>LinkedIn</p>
              </div>
              <div>
                <MoveRight size={28} color="#1b2954"/>
              </div>

            </a>
            <hr className="lg:hidden border-solid text-primary"></hr>
            <a href="https://www.tiktok.com/" className='animated-link flex flex-row justify-between'>
              <div className='flex flex-row space-x-4 montserrat'>
              <Music2 size={28} color="#1b2954"/>
                <p>TikTok</p>
              </div>
              <div>
                <MoveRight size={28} color="#1b2954"/>
              </div>

            </a>
            <hr className="lg:hidden border-solid text-primary"></hr>
            <a href="https://twitter.com/oaforstudents" className='animated-link flex flex-row justify-between'>
              <div className='flex flex-row space-x-4 montserrat'>
              <Twitter size={28} color="#1b2954"/>
                <p>Twitter</p>
              </div>
              <div>
                <MoveRight size={28} color="#1b2954"/>
              </div>

            </a>
            <hr className="lg:hidden border-solid text-primary"></hr>
            <a href="https://youtube.com" className='animated-link flex flex-row justify-between'>
              <div className='flex flex-row space-x-4 montserrat'>
              <Youtube size={28} color="#1b2954"/>
                <p>Youtube</p>
              </div>
              <div>
                <MoveRight size={28} color="#1b2954"/>
              </div>
            </a>
            <hr className="lg:hidden border-solid text-primary"></hr>

            <hr className='hidden lg:block lg:row-start-2 border-solid text-primary'></hr>
            <hr className='hidden lg:block lg:row-start-2 border-solid text-primary'></hr>
            <hr className='hidden lg:block lg:row-start-2 border-solid text-primary'></hr>

          </div>
          <div className='hidden mb-24  grid-cols-2 lg:grid-cols-4 gap-y-4'>
            <a className="">
              <h1 className='underline-link text-xl'>Companies</h1>
            </a>
            <a>
              <h1 className='underline-link text-xl'>Talent</h1>
            </a>
            <a>
              <h1 className='underline-link text-xl'>Society</h1>
            </a>
            <a>
              <h1 className='underline-link text-xl'>General</h1>
            </a>

          </div>
          <div className='flex flex-row divide-x-2 items-center text-primary'>
            <a href="/" className='pr-4'>
              <img src="logo.png" className='w-[75px]'/>
            </a>
            <div className='pl-4 text-primary montserrat'>
              <p>You are the next you.</p>
            </div>

          </div>
          

        </div>
      </footer>
    )

}

export default Footer;