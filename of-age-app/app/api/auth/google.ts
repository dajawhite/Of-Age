// pages/api/auth/google.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import OAuth2Client from '@/lib/googleOAuth';

//API route to generate the Authorization URL
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const url = OAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://mail.google.com/'],
    });

    res.redirect(url);
}
