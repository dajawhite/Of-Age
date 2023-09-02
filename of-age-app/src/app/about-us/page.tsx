import Footer from "@/components/Footer";

export default function About(){
    return(
        <main className='text-black'>
            <header className="pt-8 lg:pt-16 lg:px-56 px-8">
                <div className="text-center">
                    <h1 className="text-5xl lg:text-9xl font-bold uppercase">About Us</h1>
                </div>
                <div className="flex justify-center mt-4 lg:mt-10">
                    <p className="text-left text-xl lg:text-2xl">Daja is <button className="rounded-full border-2 border-orange-400 text-orange-400 px-2 hover:bg-orange-400 hover:text-white">Determined <img className="inline w-[16px] lg:w-[24px] "src="arrow.png"/></button> to get a dog,<br className="hidden lg:block"/> nothing will stand in her way.</p>
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
                    <h1 className="uppercase text-6xl font-extrabold lg:pt-24 pt-16">Our story.</h1>
                    <div className="lg:mt-[10.5vw] mt-[21vw] text-[7vw] lg:text-[3vw] leading-tight">
                        <p className="">Capital Group is a management consulting firm with more than a decade of experience in providing effective and innovative consulting services to public and private sector clients. Our projects have saved clients over $3 billion since our inception.<br/><br/>Each day we earn the trust of our clients through solving complex program management and systems engineering challenges, while carefully managing risks. Our capabilities are rooted in experienced program management, strong technical competencies, and results that matter for our clients.
                        </p>
                    </div>
                </div>
                <div className="lg:mt-[10.5vw] mt-[11vw] lg:flex lg:items-start text-white">
                    <div className="flex-none lg:w-[41vw] w-full">
                        <h2 className="lg:text-[3vw] text-[7vw] leading-tight">We're not your average consulting firm.</h2>
                        <p className="mt-[6.4vw] lg:mt-[2vw] text-[5vw] lg:text-[1.3vw]">Since 2011, Capital Group has assisted clients in achieving their business objectives. Our team’s diverse background and extensive experience in both the public and private sector brings our ingenuity and pragmatism together to deliver actionable strategies for clients.</p>
                    </div>
                    <div className="flex-none lg:ml-[6.25vw] lg:mt-0 mt-[17vw]">
                        <h1 className="lg:text-[15vw] text-[35vw] lg:mt-[-4vw]">$1B+</h1>
                        <p className="mt-[0.8vw] lg:text-[1vw] text-[4.8vw]">Supporting Government and Commercial Programs Ranging from $10M – $1B+</p>
                        <div className="flex flex-row flex-wrap mt-[4vw]">
                            <div className="w-[41vw] lg:w-auto">
                                <h2 className="lg:text-[4.3vw] text-[18vw]">98%</h2>
                                <p className="mt-[1vw] lg:text-[.75vw] text-[4vw]">Employee Retention Rate</p>
                            </div>
                            <div className="ml-[5vw] w-[41vw] lg:w-auto">
                                <h2 className="lg:text-[4.3vw] text-[18vw]">$3B</h2>
                                <p className="mt-[1vw] lg:text-[.75vw] text-[4vw]">Achieved $3B in<br/> Customer Cost Savings</p>
                            </div>
                            <div className="ml-0 lg:ml-[5vw] mt-[12vw] lg:mt-0 w-[41vw] lg:w-auto">
                                <h2 className="lg:text-[4.3vw] text-[18vw]">97%</h2>
                                <p className="mt-[1vw] lg:text-[.75vw] text-[4vw]">Customer Satisfaction Rating</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="mt-16 lg:mb-[-8rem] lg:px-12 px-4">
                <h1 className="text-4xl font-bold">Take action. Start building.</h1>
                <div className="bg-rose-100 rounded-[20px] flex lg:flex-row flex-col mt-8 lg:h-[30rem] divide-y-2 lg:divide-x-2 lg:divide-y-0 divide-slate-50">
                    <div className="flex flex-col justify-between lg:w-1/3 items-start p-8 about-action rounded-t-[20px] lg:rounded-l-[20px] lg:rounded-tr-none gap-y-9 lg:gap-y-0">
                        <img src="/icon/article.png" className="lg:w-[48px] lg:h-[48px] w-[36px] h-[36px]"/>
                        <div className="pr-20 flex flex-col gap-x-2">
                            <h2 className="text-2xl font-semibold about-action-h">For Companies</h2>
                            <p className="text-sm pt-2">Start building your team and hire the most motivated remote tech talents in the world.</p>
                        </div>
                        <a href="#"><button className="rounded-full border-2 px-3 py-1 border-black hover:bg-black hover:text-white">Hire a team</button></a>

                    </div>
                    <div className="flex flex-col justify-between lg:w-1/3 items-start p-8 about-action gap-y-9 lg:gap-y-0">
                        <img src="/icon/article.png" className="lg:w-[48px] lg:h-[48px] w-[36px] h-[36px]"/>
                        <div className="pr-20 flex flex-col gap-x-2">
                            <h2 className="text-2xl font-semibold about-action-h">For Talent</h2>
                            <p className="text-sm pt-2">For the next era of work you get to be in control. Freedom, ownership and belonging.</p>
                        </div>
                        <a href="#"><button className="rounded-full border-2 px-3 py-1 border-black hover:bg-black hover:text-white">Hire a team</button></a>

                    </div>
                    <div className="flex flex-col justify-between lg:w-1/3 items-start p-8 about-action rounded-b-[20px] lg:rounded-r-[20px] lg:rounded-bl-none gap-y-9 lg:gap-y-0">
                        <img src="/icon/article.png" className="lg:w-[48px] lg:h-[48px] w-[36px] h-[36px]"/>
                        <div className="pr-20 flex flex-col gap-x-2">
                            <h2 className="text-2xl font-semibold about-action-h">Society</h2>
                            <p className="text-sm pt-2">Token-based, member-owned society that is built around every member’s best interest.</p>
                        </div>
                        <a href="#" className="underline underline-offset-8 decoration-2 hover:no-underline moveRight">Explore <img src="/arrow.png" className="inline"/></a>

                    </div>
                
                </div>

            </section>
            <Footer></Footer>
        </main>
        
    )
}