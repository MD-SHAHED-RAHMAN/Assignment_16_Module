import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import hpp from 'hpp';
import mongoose from 'mongoose';

import routers from "../Assignment_16_Module/routers/api.js"
import {MOONGOOSE,PORT,JSON_MAX_SIZE,URL_ENCODED,WEB_CACHE,REQUEST_LIMIT_TIME,REQUEST_LIMIT_NUMBER} from ".//app/config/config.js"

const app = express();



//GLOBAL APPLICATION MIDDLEWARE
app.use(cors())
app.use(express.json({limit:JSON_MAX_SIZE}));
app.use(express.urlencoded({extended:URL_ENCODED}));
app.use(cookieParser())
app.use(helmet())
app.use(hpp())



//Rate limiters
const limit=rateLimit({windowMs:REQUEST_LIMIT_TIME, max:REQUEST_LIMIT_NUMBER})
app.use(limit)



//WEB CACHING 
app.set("etag", WEB_CACHE)




// Set API Routes
app.use("/api", routers)



// Set Application Storage
app.use(express.static("stroage"))


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

