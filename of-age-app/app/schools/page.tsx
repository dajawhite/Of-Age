import StartupProfile from "@/components/forms/StartupProfile";

export default function Page(){
    return(
        <>
            <h1 className="text-black">This is the page where our directory of schools will be.</h1>
            <p>Register a startup at your school.</p>
            <StartupProfile
                user={} 
                btnTitle="Continue"
            />
        </>
    )
}

//TODO: POPULATE OF LIST OF REGISTERED SCHOOLS