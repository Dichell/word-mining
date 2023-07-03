import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' });

export const config = {
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
    OPEN_AI_ORGANIZATION: process.env.OPEN_AI_ORGANIZATION,
    OPEN_AI_KEY: process.env.OPEN_AI_KEY,
    GOOGLE_OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
    GOOGLE_OAUTH_CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    GOOGLE_OAUTH_REDIRECT_URL: process.env.GOOGLE_OAUTH_REDIRECT_URL,
}
