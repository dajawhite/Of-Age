import Image from "next/image";
import Footer from "../../../components/Footer";
import NavBar from "@/components/NavBar1";

export default function About(){
    return(
        <main className='text-black overflow-hidden'>
            <NavBar></NavBar>
            <div className="px-2 mt-2">
            <div className="bg-[--bgA1] rounded-[20px] pb-16">
                <div className="px-8 lg:px-16 pb-10">
                    <div className="text-white">
                        <h1 className="uppercase text-6xl lg:pt-24 pt-16 montserrat bold-text ">Our story.</h1>
                        <div className="mt-16 text-3xl lg:text-5xl/tight oswald">
                            <p className="">As an ed-tech company uniquely designed for students rather than institutions, Of Age is here to enhance your university journey. Often, universities offer numerous resources for launching startups or tech ventures, but many students only discover these opportunities post-graduation. Our mission? To help you uncover and utilize the resources available at your current or future universities.<br/><br/>Why do we do this? We&apos;re students too, and we&apos;ve noticed that traditional degree and course structures don&apos;t always align with the pace of learning and collaboration needed in today&apos;s world - a world you&apos;re either about to enter or are already shaping. To kickstart our mission, we&apos;re focusing on spotlighting & connecting students who are actively utilizing school resources. Next on our agenda is addressing a critical question: how can we replicate the seamless collaboration found between engineering, design, and business sectors in the professional world within academic environments? This challenge forms the core of our roadmap and guides our efforts in reshaping educational experiences.<br/><br/>In summary, our philosophy & motivation is simple: you&apos;re already &apos;Of Age&apos; to start making an impact. Why wait? We aim to empower educators to adopt more collaborative, relevant, and engaging teaching methods. Imagine learning in an environment that mirrors the teamwork and innovation seen in top companies like Google. That&apos;s the future we&apos;re building towards with Of Age.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            <div className="mt-2">
                <Footer></Footer>
            </div>
            
        </main>
        
    )
}