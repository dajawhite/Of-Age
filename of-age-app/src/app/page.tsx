import Image from 'next/image'
import Hero from '../components/Hero'
import Head from 'next/head'

export default function Home() {
  return (
    <main className='text-black '>
      <Head>
        <script src="/arrows.js"></script>
      </Head>

      

      {/* header */}
      <section className='h-screen'>
        <Hero></Hero>
      </section>

      {/* articles */}
      <section>
        <div className="relative z-10">
          {/*large text */}
          <div className="sticky top-0 z-20 flex justify-center w-full lg:h-screen lg:items-center">
            <div className="max-w-6xl px-6 mx-auto">
            <h2 className="my-20 text-5xl text-center lg:text-8xl lg:mt-0">You are Of Age. They are Of Age.</h2>
            </div>
          </div>

          {/*images */}
          <div className="max-w-6xl px-6 mx-auto px-4 pb-16 mx-auto space-y-16 lg:px-0 lg:space-y-0 lg:pb-[100vh]">
            {/*image 1*/}
            <div className="lg:ml-40 z-20 lg:z-0 max-w-[290px] lg:max-w-sm relative">
              <div className="relative flex flex-col justify-end w-full p-6 overflow-hidden text-white bg-cover shadow-2xl rounded-xl group lg:h-[400px]  lg:w-[390px] w-[290px] h-[290px] lg:w-auto">
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl" style={{clipPath:'content-box'}}>
                  <Image layout='fill' objectFit='cover' alt='' src="/paytonoa.jpg"  className="w-full h-full rounded-xl" />
                </div>
                <div className="absolute inset-0 w-full h-full transform rounded-xl" style={{background:'linear-gradient(360deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 60%)'}}>
                </div>
                <div className="max-w-md">
                  <h3 className="relative text-2xl">
                    <p>I put an inclusive haircare line in 500 hotels worldwide.</p>
                  </h3>
                </div>
              </div>
            </div>

            {/*image 2 */}
            <div className="ml-auto z-20 max-w-[290px] lg:max-w-sm relative">
              <a href="/blog/stories/i-have-the-best-job-in-the-world" className="relative flex flex-col justify-end w-full p-6 overflow-hidden text-white bg-cover shadow-2xl rounded-xl group h-[320px] lg:h-[460px] w-[290px] h-[290px] lg:w-auto">
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl" style={{clipPath:'content-box'}}>
                  <Image layout="fill" objectFit='cover' alt='' src="/jeremiahoa.jpg" className="w-full h-full transition duration-300 transform rounded-xl group-hover:scale-110"/>
                </div>
                <div className="absolute inset-0 w-full h-full transform rounded-xl" style={{background:'linear-gradient(360deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 60%)'}}>
                </div>
                <div className="max-w-md">
                  <h3 className="relative text-2xl">
                    <p>I started TCU's Frog Fund.</p>
                  </h3>
                </div>
                <button className="z-10 block relative flex items-center mt-6 pointer-events-none"  >
                  <div className="flex items-center overflow-hidden gap-x-2 group"  >
                    <div className="relative">
                      <div className="transition duration-500 md:group-hover:-translate-y-full py-0.5">Read the story</div>
                      <div className="absolute top-0 left-0 transition duration-500 translate-y-full md:group-hover:translate-y-0 py-0.5">Read the story</div>
                    </div>
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-6 h-6 text-white">
                      <path d="M21.56 14.67 14.41 7.5l1.89-1.88L26.67 16 16.3 26.37 14.4 24.5l7.15-7.16H5.33v-2.66h16.23Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </button>
              </a>
            </div>

            {/*image 3 */}
            <div className="z-20 max-w-[290px] lg:max-w-sm relative">
              <a href="/blog/stories/vfx-where-talents-interests-collide" className="relative flex flex-col justify-end w-full p-6 overflow-hidden text-white bg-cover shadow-2xl rounded-xl group h-[320px] lg:h-[460px] lg:h-[320px] lg:w-[320px] w-[290px] h-[290px] lg:w-auto">
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl" style={{clipPath:'content-box'}}>
                  <Image layout="fill" objectFit='cover' alt='' src="/dudesoa.jpg" className="w-full h-full transition duration-300 transform rounded-xl group-hover:scale-110"/>
                </div>
                <div className="absolute inset-0 w-full h-full transform rounded-xl" style={{background:'linear-gradient(360deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 60%)'}}>
                </div>
                <div className="max-w-md">
                  <h3 className="relative text-2xl"></h3>
                  <div className="relative font-normal mt-2.5">
                    <p>We're changing product design at legacy companies.</p>
                  </div>
                </div>
                <button className="z-10 block relative flex items-center mt-6 pointer-events-none"  >
                  <div className="flex items-center overflow-hidden gap-x-2 group"  >
                    <div className="relative">
                      <div className="transition duration-500 md:group-hover:-translate-y-full py-0.5">Read the story
                      </div>
                      <div className="absolute top-0 left-0 transition duration-500 translate-y-full md:group-hover:translate-y-0 py-0.5">Read the story
                      </div>
                    </div>
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-6 h-6 text-white">
                      <path d="M21.56 14.67 14.41 7.5l1.89-1.88L26.67 16 16.3 26.37 14.4 24.5l7.15-7.16H5.33v-2.66h16.23Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </button>
              </a>
            </div>

            {/*image 4 */}
            <div className="ml-auto lg:mr-20 z-20 lg:z-0 max-w-[290px] lg:max-w-sm relative">
              <div className="relative flex flex-col justify-end w-full p-6 overflow-hidden text-white bg-cover shadow-2xl rounded-xl group lg:h-[320px]  lg:w-[256px] w-[290px] h-[290px] lg:w-auto">
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl" style={{clipPath:'content-box'}}>
                  <Image layout="fill" objectFit='cover' alt='' src="/camoa.jpg" className="w-full h-full transition duration-300 transform rounded-xl"/>
                </div>
                <div className="absolute inset-0 w-full h-full transform rounded-xl" style={{background:'linear-gradient(360deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 60%)'}}>
                </div>
                <div className="max-w-md">
                  <h3 className="relative text-2xl">
                    <p>I'm a first-gen MIT student, building biotech. </p>
                  </h3>
                </div>
              </div>
            </div>

            {/*image 5*/}
            <div className="lg:ml-20 z-20 lg:z-0 max-w-[290px] lg:max-w-sm relative">
              <div className="relative flex flex-col justify-end w-full p-6 overflow-hidden text-white bg-cover shadow-2xl rounded-xl group lg:h-[320px]  lg:w-[256px] w-[290px] h-[290px] lg:w-auto">
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl" style={{clipPath:'content-box'}}>
                  <Image layout="fill" objectFit='cover' alt='' src="/mboa.jpg" className="w-full h-full transition duration-300 transform rounded-xl"/>
                </div>
                <div className="absolute inset-0 w-full h-full transform rounded-xl" style={{background:'linear-gradient(360deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 60%)'}}>
                </div>
                <div className="max-w-md">
                  <h3 className="relative text-2xl">
                    <p className='text-xl'>We're sisters redesigning inventory systems for SMBs.</p>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* what we do */}
      <section className='h-screen'>
        <div className="grid md:grid-cols-2 gap-7 lg:gap-[30px] mb-16 px-16">
          <h1 className='text-5xl'>Residences</h1>
          <div className='text-2xl pr-10 space-y-4'>
            <p>From shared living to luxury tower living, Gravity offers residential spaces that are as individual as you are.</p>
            <p className=''><a className='button rounded-full buttline'>Explore</a></p>
          </div>
        </div>
        <div className="main"> 
          <div className="main-wrap">
            {/*showcase parts*/}
            <div className="collections-wrap over" data-aos="fade-left">
                {/*workbooks*/}
              <div id="pnProductNav" className="book-collection-wrap" data-overflowing="none">
                <div id="pnProductNavContents" className="book-list">
                  {/*belmont*/}
                  <div className="book-item w-full h-auto lg:w-[580px] lg:h-[670px] lg:rounded-[20px] overflow-hidden opacity-1 ">
                    <div className='absolute bottom-0 left-0 h-24 w-full lg:block bg-gradient-to-t from-neutral-800'>
                      <h3 className='book-cover-title'>Belmont University</h3>
                    </div>
                    <img src="/belmont.jpg" />
                    <div className="hidden absolute first-letter:z-[1] lg:flex items-center justify-start gap-3 lg:gap-4 top-10 left-10 text-body uppercase text-white">
                      <div className="relative block w-2 h-2 lg:h-3 lg:w-3">
                        <span className="absolute inline-block w-full h-full rounded-full bg-aqua animate-ping"></span>
                        <span className="absolute inline-block w-full h-full rounded-full bg-aqua"></span>
                      </div>
                      <h2 className='text-lg'>Now Leasing</h2>
                    </div>
                    <div className='uni-cards py-8 pl-8 pr-12'>
                      <div className='space-y-4'>
                        <h3 className='text-2xl font-semibold'>Building A</h3>
                        <p>Mixed-use<br/>500 W. Broad St.</p>
                        <p>Gravity's original mixed-use residence. Equipped with studio, one, and two-bedroom apartments, and signature amenities including an outdoor movie wall and programming based on wellness.</p>
                      </div>
                      <div className='mt-12'>
                        <hr />
                        <div className='flex flex-row space-x-2'>
                          <p className=''><a className='button rounded-full buttline'>Explore</a></p>
                          <p className=''><a className='button rounded-full buttline'>Availability</a></p>
                          <p className=''><a className='button rounded-full buttline'>Schedule Tour</a></p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  {/*harvard*/}
                  <div className="book-item w-full h-auto lg:w-[580px] lg:h-[670px] lg:rounded-[20px] overflow-hidden opacity-1 ">
                    <div className='absolute bottom-0 left-0 h-24 w-full lg:block bg-gradient-to-t from-neutral-800'>
                      <h3 className='book-cover-title'>Harvard University</h3>
                    </div>
                    <img src="/harvard.jpg" />
                    <div className="hidden absolute first-letter:z-[1] lg:flex items-center justify-start gap-3 lg:gap-4 top-10 left-10 text-body uppercase text-white">
                      <div className="relative block w-2 h-2 lg:h-3 lg:w-3">
                        <span className="absolute inline-block w-full h-full rounded-full bg-aqua animate-ping"></span>
                        <span className="absolute inline-block w-full h-full rounded-full bg-aqua"></span>
                      </div>
                      <h2 className='text-lg'>Now Leasing</h2>
                    </div>
                    <div className='uni-cards py-8 pl-8 pr-12'>
                      <div className='space-y-4'>
                        <h3 className='text-2xl font-semibold'>Building A</h3>
                        <p>Mixed-use<br/>500 W. Broad St.</p>
                        <p>Gravity's original mixed-use residence. Equipped with studio, one, and two-bedroom apartments, and signature amenities including an outdoor movie wall and programming based on wellness.</p>
                      </div>
                      <div className='mt-12'>
                        <hr />
                        <div className='flex flex-row space-x-2'>
                          <p className=''><a className='button rounded-full buttline'>Explore</a></p>
                          <p className=''><a className='button rounded-full buttline'>Availability</a></p>
                          <p className=''><a className='button rounded-full buttline'>Schedule Tour</a></p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  {/*notre dame*/}    
                  <div className="book-item w-full h-auto lg:w-[580px] lg:h-[670px] lg:rounded-[20px] overflow-hidden opacity-1 ">
                    <div className='absolute bottom-0 left-0 h-24 w-full lg:block bg-gradient-to-t from-neutral-800'>
                      <h3 className='book-cover-title'>University of Notre Dame</h3>
                    </div>
                    <img src="/notredame.jpg" />
                    <div className="hidden absolute first-letter:z-[1] lg:flex items-center justify-start gap-3 lg:gap-4 top-10 left-10 text-body uppercase text-white">
                      <div className="relative block w-2 h-2 lg:h-3 lg:w-3">
                        <span className="absolute inline-block w-full h-full rounded-full bg-aqua animate-ping"></span>
                        <span className="absolute inline-block w-full h-full rounded-full bg-aqua"></span>
                      </div>
                      <h2 className='text-lg'>Now Leasing</h2>
                    </div>
                    <div className='uni-cards py-8 pl-8 pr-12'>
                      <div className='space-y-4'>
                        <h3 className='text-2xl font-semibold'>Building A</h3>
                        <p>Mixed-use<br/>500 W. Broad St.</p>
                        <p>Gravity's original mixed-use residence. Equipped with studio, one, and two-bedroom apartments, and signature amenities including an outdoor movie wall and programming based on wellness.</p>
                      </div>
                      <div className='mt-12'>
                        <hr />
                        <div className='flex flex-row space-x-2'>
                          <p className=''><a className='button rounded-full buttline'>Explore</a></p>
                          <p className=''><a className='button rounded-full buttline'>Availability</a></p>
                          <p className=''><a className='button rounded-full buttline'>Schedule Tour</a></p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  {/*oxford*/}    
                  <div className="book-item w-full h-auto lg:w-[580px] lg:h-[670px] lg:rounded-[20px] overflow-hidden opacity-1 ">
                    <div className='absolute bottom-0 left-0 h-24 w-full lg:block bg-gradient-to-t from-neutral-800'>
                      <h3 className='book-cover-title'>Oxford University</h3>
                    </div>
                    <img src="/oxford.jpg" />
                    <div className="hidden absolute first-letter:z-[1] lg:flex items-center justify-start gap-3 lg:gap-4 top-10 left-10 text-body uppercase text-white">
                      <div className="relative block w-2 h-2 lg:h-3 lg:w-3">
                        <span className="absolute inline-block w-full h-full rounded-full bg-aqua animate-ping"></span>
                        <span className="absolute inline-block w-full h-full rounded-full bg-aqua"></span>
                      </div>
                      <h2 className='text-lg'>Now Leasing</h2>
                    </div>
                    <div className='uni-cards py-8 pl-8 pr-12'>
                      <div className='space-y-4'>
                        <h3 className='text-2xl font-semibold'>Building A</h3>
                        <p>Mixed-use<br/>500 W. Broad St.</p>
                        <p>Gravity's original mixed-use residence. Equipped with studio, one, and two-bedroom apartments, and signature amenities including an outdoor movie wall and programming based on wellness.</p>
                      </div>
                      <div className='mt-12'>
                        <hr />
                        <div className='flex flex-row space-x-2'>
                          <p className=''><a className='button rounded-full buttline'>Explore</a></p>
                          <p className=''><a className='button rounded-full buttline'>Availability</a></p>
                          <p className=''><a className='button rounded-full buttline'>Schedule Tour</a></p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  {/*montana*/}    
                  <div className="book-item w-full h-auto lg:w-[580px] lg:h-[670px] lg:rounded-[20px] overflow-hidden opacity-1 ">
                    <div className='absolute bottom-0 left-0 h-24 w-full lg:block bg-gradient-to-t from-neutral-800'>
                      <h3 className='book-cover-title'>University of Montana</h3>
                    </div>
                    <img src="/montana.jpg" />
                    <div className="hidden absolute first-letter:z-[1] lg:flex items-center justify-start gap-3 lg:gap-4 top-10 left-10 text-body uppercase text-white">
                      <div className="relative block w-2 h-2 lg:h-3 lg:w-3">
                        <span className="absolute inline-block w-full h-full rounded-full bg-aqua animate-ping"></span>
                        <span className="absolute inline-block w-full h-full rounded-full bg-aqua"></span>
                      </div>
                      <h2 className='text-lg'>Now Leasing</h2>
                    </div>
                    <div className='uni-cards py-8 pl-8 pr-12'>
                      <div className='space-y-4'>
                        <h3 className='text-2xl font-semibold'>Building A</h3>
                        <p>Mixed-use<br/>500 W. Broad St.</p>
                        <p>Gravity's original mixed-use residence. Equipped with studio, one, and two-bedroom apartments, and signature amenities including an outdoor movie wall and programming based on wellness.</p>
                      </div>
                      <div className='mt-12'>
                        <hr />
                        <div className='flex flex-row space-x-2'>
                          <p className=''><a className='button rounded-full buttline'>Explore</a></p>
                          <p className=''><a className='button rounded-full buttline'>Availability</a></p>
                          <p className=''><a className='button rounded-full buttline'>Schedule Tour</a></p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-row arrows'>
            {/*left arrow*/}
            <div className="">
                <div id="advancer-left" className="collections-nav-button collections-nav-button--left">
                    <div className="collections-arrow-icon"><svg width="8" height="14" viewBox="0 0 8 14"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893C0.683418 -0.0976314 1.31658 -0.0976314 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683418 14.0976 0.292893 13.7071Z"
                                fill="currentColor" />
                        </svg>
                    </div>
                </div>
            </div>
            {/*right arrow*/}
            <div className="">
              <div id="advancer-right" className="collections-nav-button">
                  <div className="collections-arrow-icon"><svg width="8" height="14" viewBox="0 0 8 14"
                          fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893C0.683418 -0.0976314 1.31658 -0.0976314 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683418 14.0976 0.292893 13.7071Z"
                              fill="currentColor" />
                      </svg>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  )
}
