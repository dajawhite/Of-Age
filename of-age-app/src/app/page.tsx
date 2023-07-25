import Image from 'next/image'
import headerPic from './backpacking.jpg'
import profile1 from './profile-1.jpg'
import profile2 from './profile-2.jpg'
import profile3 from './profile-3.jpg'



export default function Home() {
  return (
    <main className='text-black overflow-hidden'>
      <section style={{backgroundColor: "yellow"}}>
        <nav className="hidden md:flex items-center justify-between px-8 pt-4">
          <div className="flex space-x-4">
            <a href="#" >About</a>
            <a href="#" >How it works</a>
            <a href="#" >Pricing</a>
            <a href="#" >FAQ</a>
          </div>
          <div>
            <Image src="/logo.jpg" alt="Logo" width={80} height={80} />
          </div>
          <div className="flex space-x-4 items-center">
            <a href="#" >Blog</a>
            <a href="#" >Contacts</a>
            <button className="rounded-full butt">Log in</button>
          </div>
        </nav>

        <div className='p-4 md:p-8'>
          <hr className='hidden md:block mb-5'></hr>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='grid grid-rows-4 md:col-span-1 flex flex-col justify-between h-full'>
              <div className='pt-14'>
                <h1 className='text-5xl md:text-8xl'>Your first digital art collection.</h1>
                <hr className='mt-5'></hr>
                <div className='grid md:grid-cols-4 mt-5'>                       
                  <div className='col-span-1 flex -space-x-2 overflow-hidden mt-5'>
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
                  <div className='col-span-3'>
                    <h2 className='mt-5'>JOIN OUR 150K+ COMMUNITY OF TALENTED ARTISTS</h2>
                  </div>
                </div>
                <button className='rounded-full mt-5 butt'>GET STARTED</button>
              </div>
              <div className='flex flex-row items-center social-box'>
                <div>
                  <Image className='pics'src={headerPic} width={200} height={200} alt='' style={{borderRadius: 5}}></Image>
                </div>
                <div className='ml-5'>
                  <h2 style={{marginBottom: 12}}>We are the comprehensive online resource for digital artists that offers tutorials, tips, and tools.</h2>
                  <button className='rounded-full butt'>Facebook</button>
                  <button className='rounded-full butt'>Twitter</button>
                  <button className='rounded-full butt'>Instagram</button>
                </div>
              </div>
            </div>
            <div className='col-span-1'>
              <Image className='pics hidden md:block' src={headerPic} alt="image" style={{borderRadius: 10}}
              />
            </div>
          </div>
          <hr className='mt-5'></hr>
        </div>
      </section>

    </main>
  )
}
