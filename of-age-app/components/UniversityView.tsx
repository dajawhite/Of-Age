import { clerkClient } from "@clerk/nextjs"
import Link from "next/link"


export default async function UniversityView(){
    const universities = await clerkClient.organizations.getOrganizationList()

    return(
        <>  
            <div className="space-y-4 text-center mt-8">
                <h1 className="text-black font-bold text-3xl">Our Universities</h1>
                <p className="text-black">{`We currently have ${universities.length} active universities. If you don't see your university, submit your startup!`}</p>
                <Link href={'/schools/submit-startup'} className="text-white bg-blue-800 p-2 rounded-md inline-block ">
                    Submit startup
                </Link>
                
                
            </div>
            <div className="flex flex-wrap gap-7 mt-8 mb-48 justify-center">
                {universities.map((university) =>{
                    return <div key={university.id} className="cursor-pointer relative group w-64 mb-2 hover:bg-blue-500 rounded-md p-4 bg-blue-800 ">
                        <div className=' h-44 mb-4 bg-blue-300 rounded-md'></div>
                        <p className='text-base text-white mb-1 w-48 '>{university.name}</p>
                    </div>
                })}
                
            </div>

        </>
    )
}