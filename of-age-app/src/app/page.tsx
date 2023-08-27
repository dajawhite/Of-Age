import Image from 'next/image'
import Hero from '../components/Hero'
import Head from 'next/head'
import Slide from '@/components/Slide'
import Slide2 from '@/components/Slide2'

export default function Home() {
  return (
    <main className='text-black '>

      {/* header */}
      <section className='lg:h-screen'>
        <Hero></Hero>
      </section>

      {/* articles */}
      <section>
        <div className="relative z-10">
          {/*large text */}
          <div className="sticky top-0 z-20 flex justify-center w-full lg:h-screen lg:items-center">
            <div className="max-w-6xl px-6 mx-auto">
            <h2 className="my-20 text-5xl text-center lg:text-8xl lg:leading-relaxed lg:mt-0 leading-relaxed" >You are Of Age.<br className='hidden md:inline'/> They are Of Age.</h2>
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
        <Slide></Slide>
      </section>

      {/* featured stories w uni rep */}
      <section className='h-screen mt-64'>
        <div className='flex justify-center'>
          <h2 className='text-4xl text-center'>Imagine how your stories <br/>could look on Storio</h2>
        </div>
        <Slide2></Slide2>
      </section>

      {/* featured stories w uni rep */}
      <section className='h-screen mt-64 pb-8'>
        <div className='flex justify-center'>
          <h2 className='text-4xl text-center'>Here are more cool things <br/>you can do with Storio.</h2>
        </div>
        <div className='grid grid-cols-2 gap-12 px-16 mt-8'>
          <div className="image-para-pair flex flex-col items-center justify-center justify-self-end">
            <img src="/cool-thing.png" alt="Description of Image 1" className=""/>
            <p className="text-xl mt-4 text-center">Tag your friends, collaborators or brands.</p>
          </div>
          <div className="image-para-pair flex flex-col justify-center items-center justify-self-start">
            <img src="/cool-thing.png" alt="Description of Image 1" className=""/>
            <p className="text-xl mt-4  text-center ">Tag your friends, collaborators or brands.</p>
          </div>
          <div className="image-para-pair flex flex-col justify-center items-center justify-self-end">
            <img src="/cool-thing.png" alt="Description of Image 1" className=""/>
            <p className="text-xl mt-4  text-center">Tag your friends, collaborators or brands.</p>
          </div>
          <div className="image-para-pair flex flex-col justify-center items-center justify-self-start">
            <img src="/cool-thing.png" alt="Description of Image 1" className=""/>
            <p className="text-xl mt-4  text-center">Tag your friends, collaborators or brands.</p>
          </div>
          <div className="image-para-pair flex flex-col justify-center items-center justify-self-end">
            <img src="/cool-thing.png" alt="Description of Image 1" className=""/>
            <p className="text-xl mt-4  text-center">Tag your friends, collaborators or brands.</p>
          </div>
          <div className="image-para-pair flex flex-col justify-center items-center justify-self-start">
            <img src="/cool-thing.png" alt="Description of Image 1" className=""/>
            <p className="text-xl mt-4  text-center">Tag your friends, collaborators or brands.</p>
          </div>

        </div>

        
      </section>


      
    </main>
  )
}
