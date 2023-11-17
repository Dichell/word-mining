import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' });

export const config = {
    SERVER_HOST: process.env.SERVER_HOST || 'localhost',
    SERVER_PORT: parseInt(process.env.SERVER_PORT || '3000', 10),
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
    FRONT_URL: process.env.FRONT_URL,
    MS_AZURE_KEY: process.env.MS_AZURE_KEY,
    MS_AZURE_LOCATION: process.env.MS_AZURE_LOCATION,
    MS_AZURE_ENDPOINT: process.env.MS_AZURE_ENDPOINT,
    MS_BING_HOST: process.env.MS_BING_HOST,
    // OPEN_AI_ORGANIZATION: process.env.OPEN_AI_ORGANIZATION,
    // OPEN_AI_KEY: process.env.OPEN_AI_KEY,
    // GOOGLE_OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
    // GOOGLE_OAUTH_CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    // GOOGLE_OAUTH_REDIRECT_URL: process.env.GOOGLE_OAUTH_REDIRECT_URL,
    SECRET: process.env.SECRET,
}
