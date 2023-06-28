import express from 'express';
import cors from 'cors';
var app=express();
// body parser npm install body-parser
app.use(cors());
import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



import userRouter from './routes/user.router.js';
app.use("/user",userRouter);


app.listen(3002);
