"use client"

import Aos from "aos";


function Footer(){

    return(
        <footer className='mt-32 lg:mt-48 px-2 pb-2'>
        <div className='rounded-[20px] bg-rose-50 py-12 px-8 lg:px-16'>
          <div className='mb-24 text-center md:text-left'>
            <h1 className='text-xl md:text-3xl'>Leading the next era of work.</h1>
          </div>
          <div className='mb-24 grid grid-rows-12 lg:grid-cols-3 lg:grid-rows-3 lg:gap-x-8'>
            <a href="mailto:oafounders@gmail.com" className='animated-link flex flex-row justify-between lg:self-end'>
              <div className='flex flex-row space-x-4'>
                <img src="/icon/article.png" className='w-[28px] h-[28px]'/>
                <p>Email Us</p>
              </div>
              <div>
                <img src='/arrow.png'/>
              </div>
            </a>
            <hr className="lg:hidden border-solid border-stone-300"></hr>
            <a href="https://www.instagram.com/oaforstudents/" className='animated-link flex flex-row justify-between lg:self-end'>
              <div className='flex flex-row space-x-4'>
                <img src="/icon/instagram.png" className='w-[28px] h-[28px]'/>
                <p>Instagram</p>
              </div>
              <div>
                <img src='/arrow.png'/>
              </div>

            </a>
            <hr className="lg:hidden border-solid border-stone-300"></hr>
            <a href="https://www.linkedin.com/company/of-age/" className='animated-link flex flex-row justify-between lg:self-end'>
              <div className='flex flex-row space-x-4'>
                <img src="/icon/linkedin.png" className='w-[28px] h-[28px]'/>
                <p>LinkedIn</p>
              </div>
              <div>
                <img src='/arrow.png'/>
              </div>

            </a>
            <hr className="lg:hidden border-solid border-stone-300"></hr>
            <a href="https://www.tiktok.com/" className='animated-link flex flex-row justify-between'>
              <div className='flex flex-row space-x-4'>
                <img src="/icon/tiktok.png" className='w-[28px] h-[28px]'/>
                <p>TikTok</p>
              </div>
              <div>
                <img src='/arrow.png'/>
              </div>

            </a>
            <hr className="lg:hidden border-solid border-stone-300"></hr>
            <a href="https://twitter.com/oaforstudents" className='animated-link flex flex-row justify-between'>
              <div className='flex flex-row space-x-4'>
                <img src="/icon/twitter.png" className='w-[28px] h-[28px]'/>
                <p>Twitter</p>
              </div>
              <div>
                <img src='/arrow.png'/>
              </div>

            </a>
            <hr className="lg:hidden border-solid border-stone-300"></hr>
            <a href="https://youtube.com" className='animated-link flex flex-row justify-between'>
              <div className='flex flex-row space-x-4'>
                <img src="/icon/youtube.png" className='w-[28px] h-[28px]'/>
                <p>Youtube</p>
              </div>
              <div>
                <img src='/arrow.png'/>
              </div>
            </a>
            <hr className="lg:hidden border-solid border-stone-300"></hr>

            <hr className='hidden lg:block lg:row-start-2 border-solid border-stone-300'></hr>
            <hr className='hidden lg:block lg:row-start-2 border-solid border-stone-300'></hr>
            <hr className='hidden lg:block lg:row-start-2 border-solid border-stone-300'></hr>

          </div>
          <div className='mb-24 grid grid-cols-2 lg:grid-cols-4 gap-y-4'>
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
          <div className='flex flex-row divide-x items-center'>
            <a href="#" className='pr-4'>
              <img src="logo.png" className='w-[75px]'/>
            </a>
            <div className='pl-4 text-gray-300'>
              <p>We're glad you're part of this community.</p>
            </div>

          </div>
          

        </div>
      </footer>
    )

}

export default Footer;