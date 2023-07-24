import Image from 'next/image'
import headerPic from './backpacking.jpg'
import profile1 from './profile-1.jpg'
import profile2 from './profile-2.jpg'
import profile3 from './profile-3.jpg'



export default function Home() {
  return (
    <main className='px-12 text-black'>
      <section>
        <div style={{backgroundColor: "yellow"}} className='p-8'>
          <hr className='mb-5' style={{borderColor: "black"}}></hr>
          <div className='grid grid-cols-2 gap-8'>
            <div className='col-span-1 '>
              <div className='flex flex-col justify-between h-full'>
                <div className='pt-14'>
                  <h1 style={{fontSize: 96, lineHeight: 1.05}}>Your first digital art collection.</h1>
                  <hr className='mt-5'style={{borderColor: "black"}}></hr>
                  <div className='grid grid-cols-3'>                       
                    <div className='col-span-1 flex -space-x-2 overflow-hidden mt-5'>
                      <Image
                        className="inline-block h-10 w-10 rounded-full"
                        src={profile1}
                        alt=""
                        style={{objectFit: "cover"}}
                      />
                      <Image
                        className="inline-block h-10 w-10 rounded-full"
                        src={profile3}
                        alt=""
                        style={{objectFit: "cover"}}
                      />
                      <Image
                        className="inline-block h-10 w-10 rounded-full"
                        src={profile2}
                        alt=""
                        style={{objectFit: "cover"}}
                      />
                    </div>
                    <div className='col-span-2'>
                      <h2 className='mt-5'>JOIN OUR 150K+ COMMUNITY OF TALENTED ARTISTS</h2>
                    </div>
                  </div>
                  <button className='rounded-full mt-5' style={{backgroundColor: "black", color: "white", padding: 12, marginRight:12}}>GET STARTED</button>
                </div>
                <div className='flex flex-row justify-between' style={{backgroundColor: "orange", padding: 24}}>
                  <div>
                    <Image src={headerPic} width={100} height={100} alt='' style={{objectFit: "cover", borderRadius: 10}}></Image>
                  </div>
                  <div>
                    <h2 style={{marginBottom: 12}}>We are the comprehensive online resource for digital artists that offers tutorials, tips, and tools. </h2>
                    <button className='rounded-full' style={{backgroundColor: "black", color: "white", padding: 12, marginRight:12}}>Facebook</button>
                    <button className='rounded-full' style={{backgroundColor: "black", color: "white", padding: 12, marginRight:12}}>Twitter</button>
                    <button className='rounded-full' style={{backgroundColor: "black", color: "white", padding: 12, marginRight:12}}>Instagram</button>
                  </div>
                </div>
              </div>

            </div>
            <div className='col-span-1'>
              <Image src={headerPic} alt="image" style={{borderRadius: 10}}
              />

            </div>

          </div>
          <hr className='mt-5' style={{borderColor: "black"}}></hr>


        </div>

      </section>

      <section>

      </section>

      <section>
        
      </section>

      <section>
        
      </section>

      <section>
        
      </section>


      
    </main>
  )
}
