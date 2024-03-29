"use server"

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose"
import { clerkClient } from "@clerk/nextjs";

interface Params {
    userId: string,
    name: string,
    university: string,
    number: string,
    iMessage: string,
    uniEmail: string,
    x: string,
    instagram: string,
    path: string
}


export async function updateUser(
        // object of type params 
        {
            userId,
            name,
            university,
            number,
            iMessage,
            uniEmail,
            x,
            instagram,
            path
        }: Params 
    )
    : 
    // returns a promise to update the user
    Promise<void> {
        connectToDB();

        try {
            // creates findOneAndUpdate query
            await User.findOneAndUpdate(
                // search by id
                { id: userId },
                {
                    name,
                    university,
                    number,
                    iMessage,
                    uniEmail,
                    x,
                    instagram,
                    onboarded: true,
                },
                // upsert = update if exists & insert if doesn't exist
                {upsert: true}
            );

            await clerkClient.users.updateUserMetadata(userId, {
                unsafeMetadata:{
                    Socials: [{x}, {instagram}],
                    University: university,
                }
            })

            const EmailParams = {
                userId: userId,
                emailAddress: uniEmail
            }

            const PhoneParams = {
                userId: userId,
                phoneNumber: number
            }
            
            clerkClient.emailAddresses.createEmailAddress(EmailParams)
            //clerkClient.phoneNumbers.createPhoneNumber(PhoneParams) //TODO: not updating email


            if(path === '/profile/edit'){
                // Allows you to revalidate data associated with a specific path
                // useful for updating cached data
                revalidatePath(path);
            }


        } catch (error: any) {
            throw new Error(`Failed to create/update user: ${error.message}`)
        }
    }