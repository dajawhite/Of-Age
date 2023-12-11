import Image from "next/image";
import Footer from "../../components/Footer";
import { ArrowRight, Newspaper} from "lucide-react";

export default function About(){
    return(
        <main className='text-black overflow-hidden'>
            <section className=" bg-black lg:px-[5vw] px-[6vw] pb-16">
                <div className="text-white">
                    <h1 className="uppercase text-6xl font-extrabold lg:pt-24 pt-16">Our story.</h1>
                    <div className="lg:mt-[10.5vw] mt-[21vw] text-[7vw] lg:text-[3vw] leading-tight">
                        <p className="">Capital Group is a management consulting firm with more than a decade of experience in providing effective and innovative consulting services to public and private sector clients. Our projects have saved clients over $3 billion since our inception.<br/><br/>Each day we earn the trust of our clients through solving complex program management and systems engineering challenges, while carefully managing risks. Our capabilities are rooted in experienced program management, strong technical competencies, and results that matter for our clients.
                        </p>
                    </div>
                </div>
                <div className="lg:mt-[10.5vw] relative mt-[11vw] lg:flex lg:flex-row lg:items-start lg:justify-items-center text-white">
                    <div className="lg:w-[41vw] w-full">
                        <h2 className="lg:text-[3vw] text-[7vw] leading-tight">We&apos;re not your average consulting firm.</h2>
                        <p className="mt-[6.4vw] lg:mt-[2vw] text-[5vw] lg:text-[1.3vw]">Since 2011, Capital Group has assisted clients in achieving their business objectives. Our team&apos;s diverse background and extensive experience in both the public and private sector brings our ingenuity and pragmatism together to deliver actionable strategies for clients.</p>
                    </div>
                    <div className=" lg:mt-0 mt-[17vw] h-96">
                        <Image src="/events.jpg" alt='' fill={true} className="rounded-lg"/>
                    </div>
                </div>

            </section>
            
            <Footer></Footer>
        </main>
        
    )
}