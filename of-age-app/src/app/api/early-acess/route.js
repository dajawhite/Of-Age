// pages/api/subscribe.js

import axios from 'axios';

export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const data = {
      email_address: email,
      status: 'subscribed',
    };

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const server = apiKey.split('-')[1];

    const response = await axios.post(
      `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
      data,
      {
        headers: {
          Authorization: `apikey ${apiKey}`,
        },
      }
    );

    return res.status(200).json({ error: '' });
  } 
  catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};