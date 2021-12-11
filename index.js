import { TwitterApi } from 'twitter-api-v2';
import dotenv from 'dotenv'

dotenv.config();

const user_context = {
    appKey: process.env.API_KEY,
    appSecret: process.env.API_SECRET_KEY,
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_SECRET_TOKEN
};

const twitterClient = new TwitterApi(user_context);

await twitterClient.v1.tweet('hello bot');


