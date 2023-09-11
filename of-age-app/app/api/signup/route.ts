import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../models/User';  // Adjust the path based on your project structure
import * as yup from 'yup';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const { email, firstName, lastName } = req.body;

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        firstName: yup.string().required(),
        lastName: yup.string().required()
    });
    
    // Later in your code, before database insertion:
    const isValid = await schema.isValid(req.body);
    if (!isValid) {
        return res.status(400).json({ success: false, message: 'Invalid input.' });
    }

    try {
        const { client } = await connectToDatabase();
        const db = client.db();

        // Check if user already exists
        const existingUser = await db.collection('users').findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already in use.' });
        }

        // Insert the new user
        await db.collection('users').insertOne({ email, firstName, lastName });
        
        return res.status(200).json({ success: true, message: 'Successfully signed up!' });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};
