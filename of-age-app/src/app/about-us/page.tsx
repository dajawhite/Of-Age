import Footer from "@/components/Footer";

export default function About(){
    return(
        <main className='text-black'>
            <header className="pt-8 lg:pt-16 lg:px-56 px-8">
                <div className="text-center">
                    <h1 className="text-5xl lg:text-9xl font-bold uppercase">Initiate</h1>
                </div>
                <div className="flex justify-center mt-4 lg:mt-10">
                    <p className="text-left text-xl lg:text-2xl">We bring <button className="rounded-full border-2 border-orange-400 text-orange-400 px-2 hover:bg-orange-400 hover:text-white">New Life <img className="inline w-[16px] lg:w-[24px] "src="arrow.png"/></button>, light, and joy to the old,<br className="hidden lg:block"/> mundane or otherwise overlooked.</p>
                </div>
                <div className="mt-4 lg:mt-10 justify-center flex flex-col">
                    <img src="/snowy.jpg" className="rounded-[30px] w-auto h-[320px] lg:w-full lg:h-auto"/>
                    <div className="hidden lg:block mt-4">
                        <div className="grid gap-x-4">
                            <div className="col-start-1 col-end-1 bg-orange-100 p-4 flex flex-col rounded-[30px]">
                                <h1 className="leading-snug">Ty Corbel <br/> Cardiff <br/> 2022</h1>
                                <a className="mt-9 uppercase text-xs underline text-orange-400">View Project</a>
                            </div>
                            <div className="col-start-2 col-end-6 bg-orange-100 p-4  rounded-[30px]">
                                <ul className="flex flex-row flex-wrap gap-3 w-6/12">
                                    <li className="rounded-full border-[1px] px-3 py-1 border-black hover:bg-black hover:text-white"><button>2022</button></li>
                                    <li className="rounded-full border-[1px] px-3 py-1 border-black hover:bg-black hover:text-white"><button>Cardiff</button></li>
                                    <li className="rounded-full border-[1px] px-3 py-1 border-black hover:bg-black hover:text-white"><button>Adaptive Re-Use </button></li>
                                    <li className="rounded-full border-[1px] px-3 py-1 border-black hover:bg-black hover:text-white"><button>Residential</button></li>
                                    <li className="rounded-full border-[1px] px-3 py-1 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"><button>All Works <img className="inline w-[16px] "src="arrow.png"/></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden mt-2">
                        <div className="flex flex-row justify-between px-2 py-4 bg-orange-100 rounded-[30px]">
                            <p className="ml-3">Gweithdy</p>
                            <a className="uppercase text-xs underline text-orange-400 self-center mr-3">View Project</a>

                        </div>

                    </div>
                </div>
                
            </header>
            <section className="mt-16 bg-black lg:px-[5vw] px-[6vw] pb-16">
                <div className="text-white">
                    <h1 className="uppercase text-6xl font-extrabold pt-8">Our story.</h1>
                    <div className="lg:mt-[10.5vw] mt-[21vw] text-[7vw] lg:text-[3vw] leading-tight">
                        <p className="">Capital Group is a management consulting firm with more than a decade of experience in providing effective and innovative consulting services to public and private sector clients. Our projects have saved clients over $3 billion since our inception.<br/><br/>Each day we earn the trust of our clients through solving complex program management and systems engineering challenges, while carefully managing risks. Our capabilities are rooted in experienced program management, strong technical competencies, and results that matter for our clients.
                        </p>
                    </div>
                    
                </div>

            </section>
            <Footer></Footer>
        </main>
        
    )
}