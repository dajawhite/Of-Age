import Image from "next/legacy/image"
import Hero from '../../components/Hero'
import Slide from '../../components/Slide'
import Footer from '../../components/Footer'
import SwitchContent from '../../components/sc'

export default function Home() {
  return (
    <main className='text-black '>
      {/* header */}
      <section className='md:h-screen'>
        <Hero></Hero>
      </section>

      {/* articles */}
      <section>
        <div className="relative z-10 montserrat text-xl">
          {/*large text */}
          <div className="sticky top-0 z-20 flex justify-center w-full lg:h-screen lg:items-center text-primary">
            <div className="max-w-6xl px-6 mx-auto">
            <h2 className="text-5xl/relaxed text-center lg:text-8xl/relaxed lg:mt-0 montserrat semi-bold-text" >You are Of Age.<br className='hidden md:inline'/> They are Of Age.</h2>
            </div>
          </div>

          {/*images */}
          <div className="max-w-6xl px-6  pb-16 mx-auto space-y-16 lg:px-0 lg:space-y-0 lg:pb-[100vh]">
            {/*image 1*/}
            <div className="lg:ml-40 z-30 max-w-[290px] lg:max-w-sm relative">
              <div className="relative flex flex-col justify-end w-full p-6 overflow-hidden text-white bg-cover shadow-2xl rounded-xl group lg:h-[400px]  lg:w-[390px] h-[290px]">
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl" style={{clipPath:'content-box'}}>
                  <Image layout='fill' objectFit='cover' alt='' src="/paytonoa.jpg"  className="w-full h-full rounded-xl" />
                </div>
                <div className="absolute inset-0 w-full h-full transform rounded-xl" style={{background:'linear-gradient(360deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 60%)'}}>
                </div>
                <div className="max-w-md">
                  <h3 className="relative ">
                    <p>I put an inclusive haircare line in 500 hotels worldwide.</p>
                  </h3>
                </div>
              </div>
            </div>

            {/*image 2 */}
            <div className="ml-auto z-30 max-w-[290px] lg:max-w-sm relative">
              <a href="/blog/stories/i-have-the-best-job-in-the-world" className="relative flex flex-col justify-end w-full p-6 overflow-hidden text-white bg-cover shadow-2xl rounded-xl group lg:h-[460px] h-[290px] lg:w-auto">
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl" style={{clipPath:'content-box'}}>
                  <Image layout="fill" objectFit='cover' alt='' src="/jeremiahoa.jpg" className="w-full h-full transition duration-300 transform rounded-xl group-hover:scale-110"/>
                </div>
                <div className="absolute inset-0 w-full h-full transform rounded-xl" style={{background:'linear-gradient(360deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 60%)'}}>
                </div>
                <div className="max-w-md">
                    <p className="relative ">I started TCU&apos;s Frog Fund.</p>
                </div>
                <button className="z-10 relative hidden items-center mt-6 pointer-events-none"  >
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
            <div className="z-30 max-w-[290px] lg:max-w-sm relative">
              <a href="/blog/stories/vfx-where-talents-interests-collide" className="relative flex flex-col justify-end w-full p-6 overflow-hidden text-white bg-cover shadow-2xl rounded-xl group lg:h-[460px] h-[290px] lg:w-auto">
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl" style={{clipPath:'content-box'}}>
                  <Image layout="fill" objectFit='cover' alt='' src="/dudesoa.jpg" className="w-full h-full transition duration-300 transform rounded-xl group-hover:scale-110"/>
                </div>
                <div className="absolute inset-0 w-full h-full transform rounded-xl" style={{background:'linear-gradient(360deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 60%)'}}>
                </div>
                <div className="max-w-md">
                  <div className="relative font-normal mt-2.5">
                    <p>We&apos;re changing product design at legacy companies.</p>
                  </div>
                </div>
                <button className="z-10 relative hidden items-center mt-6 pointer-events-none"  >
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
            <div className="ml-auto lg:mr-20 z-30 max-w-[290px] lg:max-w-sm relative">
              <div className="relative flex flex-col justify-end w-full p-6 overflow-hidden text-white bg-cover shadow-2xl rounded-xl group lg:h-[320px] h-[290px] lg:w-auto">
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl" style={{clipPath:'content-box'}}>
                  <Image layout="fill" objectFit='cover' alt='' src="/camoa.jpg" className="w-full h-full transition duration-300 transform rounded-xl"/>
                </div>
                <div className="absolute inset-0 w-full h-full transform rounded-xl" style={{background:'linear-gradient(360deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 60%)'}}>
                </div>
                <div className="max-w-md">
                  <p className="relative">I&apos;m a first-gen Purdue student, building biotech. </p>
                </div>
              </div>
            </div>

            {/*image 5*/}
            <div className="lg:ml-20 z-30 max-w-[290px] lg:max-w-sm relative">
              <div className="relative flex flex-col justify-end w-full p-6 overflow-hidden text-white bg-cover shadow-2xl rounded-xl group lg:h-[320px] h-[290px] lg:w-auto">
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl" style={{clipPath:'content-box'}}>
                  <Image layout="fill" objectFit='cover' alt='' src="/mboa.jpg" className="w-full h-full transition duration-300 transform rounded-xl"/>
                </div>
                <div className="absolute inset-0 w-full h-full transform rounded-xl" style={{background:'linear-gradient(360deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 60%)'}}>
                </div>
                <div className="max-w-md">
                  <p className="relative">We&apos;re sisters redesigning inventory systems for SMBs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* what we do */}
      <section className='h-screen'>
        <div className="grid md:grid-cols-2 gap-7 lg:gap-[30px] mb-8 px-16">
          <h1 className='text-5xl text-primary font-semibold oswald'>Featured Universities</h1>
          <div className='text-3xl/relaxed pr-10 space-y-4 text-primary montserrat'>
            <p>We&apos;re set on finding start-ups at every university. Here&apos;s who we have so far.</p>
          </div>
        </div>
        <Slide></Slide>
      </section>


      <div className="mt-32 lg:mt-48"> <Footer></Footer> </div>
      

    </main>
  )
}
