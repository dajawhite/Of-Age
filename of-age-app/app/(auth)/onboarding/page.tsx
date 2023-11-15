import AccountProfile from "@/components/forms/AccountProfile"
import { currentUser } from "@clerk/nextjs"

// onboarding happens AFTER sign in

async function Page(){
    //because of this await, the function must be async
    const user = await currentUser();

    //later on this will be fetched from the database
    const userInfo = {};

    //'?' checks that it exists
    const userData = {
        id: user?.id || '',
        objectId: userInfo?._id,
        name: userInfo?.name || (user?.firstName + " " + user?.lastName)|| "",
        university: userInfo?.university || '',
        number: userInfo?.number || '',
        iMessage: userInfo?.iMessage || '',
        uniEmail: user?.email || userInfo?.email || '',
        x: userInfo?.x || '',
        instagram: userInfo?.instagram || '',
    }

    return(
        <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
            <h1 className="text-black text-3xl font-semibold">Welcome to Of Age</h1>
            <p className="mt-3 text-black text-base-regular">We're super simple. Just provide the info you want others to use to connect with you.</p>

            <section className="p-10">
                <AccountProfile 
                    user={userData} 
                    btnTitle="Continue"/>
            </section>
        </main>
    )
}

export default Page