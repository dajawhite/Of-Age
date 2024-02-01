import { google } from 'googleapis'

//configure the OAuth2 client
const OAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI // This should match the URI set in the Google Cloud Console
);

export default OAuth2Client;
