import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import https from "https";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import http from "http";
dotenv.config();


const cert = process.env.CERT;
const key = process.env.PRIVATE_KEY;
console.log(cert + "CERT AND KEY" + key)


const options = {
  key: fs.readFileSync(key), 
  cert: fs.readFileSync(cert,)
}

import records from "./routes/record.mjs";
import users from "./routes/user.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use((reg,res,next)=>
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
})

app.use("/record", records);
app.use("/user", users);

let server = http.createServer(app)

app.get('/',(req,res)=>{
  res.send('HTTPS in ExpressJS')
})

app.get('/record',(req,res)=>{
  res.send('HTTPS in ExpressJS YASSSSSS')
})


server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});