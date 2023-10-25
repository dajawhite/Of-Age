"use server"

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose"

interface Params {
    userId: string,
    name: string,
    university: string,
    number: string,
    iMessage: string,
    email: string,
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
            email,
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
                { id: userId},
                {
                    name,
                    university,
                    number,
                    iMessage,
                    email,
                    x,
                    instagram,
                    onboarded: true,
                },
                // upsert = update if exists & insert if doesn't exist
                {upsert: true}
            );

            if(path === '/profile/edit'){
                // Allows you to revalidate data associated with a specific path
                // useful for updating cached data
                revalidatePath(path);
            }
        } catch (error: any) {
            throw new Error(`Failed to create/update user: ${error.message}`)
        }
    }