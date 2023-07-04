import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
var app=express();

app.use(fileUpload());
// body parser npm install body-parser
app.use(cors());
import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



import userRouter from './routes/user.router.js';
app.use("/user",userRouter);
import categoryRouter from './routes/category.router.js'
app.use("/category",categoryRouter);


app.listen(3002);
