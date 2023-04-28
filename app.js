import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routing/user-routes';
import postRouter from './routing/post-routes';
import cors from 'cors'
import connectDB from './config/db';
const app=express();
dotenv.config();
app.use(cors());

//database config
connectDB();

//middlewares
app.use(express.json());
app.use("/users",userRouter)
app.use("/posts",postRouter)


//PORT
const PORT=process.env.PORT||8010

//RUN LISTEN
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})


