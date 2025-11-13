import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser";

const app=express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}))//configuration to accept json text
app.use(express.urlencoded({extended:true,limit:"16kb"}))//configuration to figure out information form url
app.use(express.static("public"))
app.use(cookieParser())
export {app }