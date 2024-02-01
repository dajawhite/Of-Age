import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type RequestBody = {
    name: string;
    email: string;
    message: string;
};

type ResponseData = {
    message: string;
    error?: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === 'POST') {
        // Extract the form data from the request body
        const { name, email, message } = req.body as RequestBody;

        // Set up your email transporter configuration
        const transporter = nodemailer.createTransport({
            // Transporter configuration
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                type: "OAUTH2",
                user: process.env.GOOGLE_USER,
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                refreshToken:,
                accessToken:,
                expires:,
            },
        });

        // Email options
        const mailOptions = {
            from: email, // Sender address
            to: 'recipient@example.com', // Your email where you'll receive messages
            subject: `New Message from ${name}`,
            text: message,
        };

        // Send the email
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error sending email', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
