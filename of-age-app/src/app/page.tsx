import Image from 'next/image'
import headerPic from './backpacking.jpg'
import profile1 from './profile-1.jpg'
import profile2 from './profile-2.jpg'
import profile3 from './profile-3.jpg'



export default function Home() {
  return (
    <main className='text-black '>
      <section className='p-4 overflow-hidden' style={{backgroundColor:"var(--bg)"}}>
        <nav className="hidden md:flex items-center justify-between px-8 pt-4">
          <div className="flex space-x-4">
            <a href="#" >About</a>
            <a href="#" >How it works</a>
            <a href="#" >Pricing</a>
            <a href="#" >FAQ</a>
          </div>
          <div>
            <Image src="/logo.png" alt="Logo" width={80} height={80} />
          </div>
          <div className="flex space-x-4 items-center">
            <a href="#" >Blog</a>
            <a href="#" >Contacts</a>
            <button className="rounded-full butt">Log in</button>
          </div>
        </nav>

        <nav className='flex flex-row justify-between items-center'>
          <div>
            <Image src="/logo.png" alt="Logo" width={80} height={80} />
          </div>
          <div className="space-x-3">
            <a href="#" >More </a>
            <button className="rounded-full butt">Log in</button>
          </div>
        </nav>

        <div className='mt-8 text-left'>
          <h1 className='text-6xl'>Your first digital art collection.</h1>
          <hr className='mt-8'></hr>
        </div>

        <div className='mt-8 flex -space-x-2 overflow-hidden'>
          <Image
            className="inline-block h-12 w-12 rounded-full pics"
            src={profile1}
            alt=""
          />
          <Image
            className="inline-block h-12 w-12 rounded-full pics"
            src={profile3}
            alt=""
          />
          <Image
            className="inline-block h-12 w-12 rounded-full pics"
            src={profile2}
            alt=""
          />
        </div>

        <div className='mt-8'>
          <h2 className=''>JOIN OUR 150K+ COMMUNITY OF TALENTED ARTISTS</h2>
          <button className='rounded-full mt-2 butt'>Get Started</button>
        </div>

        <div className='mt-8'>
        <Image src="/mobile-header.jpg" alt="Logo" width={350} height={80} className='pics' style={{borderRadius: 5}}/>
        </div>

        <div className='mt-5'>
          <div className='hidden'>
            <Image className='pics'src={headerPic} width={200} height={200} alt='' style={{borderRadius: 5}}></Image>
          </div>
          <div className=''>
            <h2 className='mb-2'>We are the comprehensive online resource for digital artists that offers tutorials, tips, and tools.</h2>
            <div className='flex justify-center'>
              <button className='rounded-full butt'>Facebook</button>
              <button className='rounded-full butt'>Twitter</button>
              <button className='rounded-full butt'>Instagram</button>
            </div>
          </div>
        </div>
        <hr className='hidden mt-5'></hr>
      </section>

      <section>
        <div className="relative z-10">
          {/*large text */}
          <div className="sticky top-0 z-20 flex justify-center w-full lg:h-screen lg:items-center">
            <div className="max-w-6xl px-6 mx-auto">
            <h2 className="my-20 text-5xl text-center lg:text-8xl lg:mt-0">Our team is next-level. And we're proud of it.</h2>
            </div>
          </div>

          {/*images */}
          <div className="max-w-6xl px-6 mx-auto px-4 pb-16 mx-auto space-y-16 lg:px-0 lg:space-y-0 lg:pb-[100vh]">
            {/*image 1*/}
            <div className="lg:ml-40 z-20 lg:z-0 max-w-[290px] lg:max-w-sm relative">
              <div className="relative flex flex-col justify-end w-full p-6 overflow-hidden text-white bg-cover shadow-2xl rounded-xl group lg:h-[256px]  lg:w-[256px] w-[290px] h-[290px] lg:w-auto">
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl" style={{clipPath:'content-box'}}>
                  <Image width={100} height={100} alt='' src="/malibu.jpg"  className="object-cover w-full h-full transition duration-300 transform rounded-xl"/>
                </div>
                <div className="max-w-md">
                  <h3 className="relative text-2xl"></h3>
                </div>
              </div>
            </div>

            {/*image 2 */}
            <div className="ml-auto z-20 max-w-[290px] lg:max-w-sm relative">
              <a href="/blog/stories/i-have-the-best-job-in-the-world" className="relative flex flex-col justify-end w-full p-6 overflow-hidden text-white bg-cover shadow-2xl rounded-xl group h-[320px] lg:h-[460px] w-[290px] h-[290px] lg:w-auto">
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl" style={{clipPath:'content-box'}}>
                  <Image width={100} height={100} alt='' src="/malibu.jpg" className="object-cover w-full h-full transition duration-300 transform rounded-xl group-hover:scale-110"/>
                </div>
                <div className="absolute inset-0 w-full h-full transform rounded-xl" style={{background:'linear-gradient(360deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 60%)'}}>
                </div>
                <div className="max-w-md">
                  <h3 className="relative text-2xl">
                    <p>I Have the Best Job in the World.</p>
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
                  <Image width={100} height={100} alt='' src="/malibu.jpg" className="object-cover w-full h-full transition duration-300 transform rounded-xl group-hover:scale-110"/>
                </div>
                <div className="absolute inset-0 w-full h-full transform rounded-xl" style={{background:'linear-gradient(360deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 60%)'}}>
                </div>
                <div className="max-w-md">
                  <h3 className="relative text-2xl"></h3>
                  <div className="relative font-normal mt-2.5">
                    <p>VFX Art is Where My Talents and Interests Collide.</p>
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
              <div   className="relative flex flex-col justify-end w-full p-6 overflow-hidden text-white bg-cover shadow-2xl rounded-xl group lg:h-[256px]  lg:w-[256px] w-[290px] h-[290px] lg:w-auto">
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl" style={{clipPath:'content-box'}}>
                  <Image width={100} height={100} alt='' src="/malibu.jpg"   className="object-cover w-full h-full transition duration-300 transform rounded-xl"/>
                </div>
                <div className="max-w-md">
                  <h3 className="relative text-2xl"></h3>
                </div>
              </div>
            </div>

            {/*image 5*/}
            <div className="lg:ml-80 z-20 lg:z-0 max-w-[290px] lg:max-w-sm relative">
              <div   className="relative flex flex-col justify-end w-full p-6 overflow-hidden text-white bg-cover shadow-2xl rounded-xl group lg:h-[256px]  lg:w-[256px] w-[290px] h-[290px] lg:w-auto">
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl" style={{clipPath:'content-box'}}>
                  <Image width={100} height={100} alt='' src="/malibu.jpg" className="object-cover w-full h-full transition duration-300 transform rounded-xl"/>
                </div>
                <div className="max-w-md">
                  <h3 className="relative text-2xl"></h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
