import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routing/user-routes';
import postRouter from './routing/post-routes';
import cors from 'cors'
const app=express();
dotenv.config();
app.use(cors());
const username=process.env.Db_name;
const password=process.env.Db_password;

//middlewares
app.use(express.json());
app.use("/users",userRouter)
app.use("/posts",postRouter)
//connections
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.pvgxw4g.mongodb.net/blogApp?retryWrites=true&w=majority`
).then(()=>app.listen(5000,()=>{
    console.log(`Connection Sucessful and listening to local Port ${5000}`)
})).catch((error)=>console.log(error));


