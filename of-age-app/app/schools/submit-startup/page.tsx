import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar1";
import StartupProfile from "@/components/forms/StartupProfile";
import { currentUser } from "@clerk/nextjs/server";

interface User{
    firstName: string | null | undefined
    lastName: string | null | undefined
    id: string | null | undefined
    email: string | null | undefined
}

export default async function page() {

    const clerkUser = await currentUser()
    const user: User = {
        firstName: clerkUser?.firstName,
        lastName: clerkUser?.lastName,
        id: clerkUser?.id,
        email: clerkUser?.emailAddresses[0].emailAddress
    }
    
  return (
    <>
      <NavBar></NavBar>
      <div className="justify-center px-48 py-24 text-black space-y-8">
        <h1 className="font-bold text-3xl">Submit your startup</h1>
        <StartupProfile user={user} btnTitle="" />
      </div>
      <Footer></Footer>
    </>
    
  )
}
