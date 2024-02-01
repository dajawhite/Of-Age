// pages/api/auth/google-callback.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import OAuth2Client from '@/lib/googleOAuth';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { code } = req.query;

    try {
        const { tokens } = await OAuth2Client.getToken(code as string);
        // Here you would store the tokens securely
        // For example, in your database or session

        // Redirect to a success page or homepage after successful authentication
        res.redirect('/success');
    } catch (error) {
        // Handle errors, such as displaying an error page
        console.error('Error during OAuth2 callback:', error);
        res.redirect('/error');
    }
}
