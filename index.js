import express from "express"
import dotenv from "dotenv";
import core from "cors";
import env from './chatbot';
import bodyparser from 'body-parser';

dotenv.config();

const app = express();
app.use(core())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


const Route = "/chat";

app.post(Route + "/env" , async (req,res) =>{
  try{
    const {qun} = req.body;
    if(!qun)
    {
        return res.status(400).json([{'erro' : 'yes'},{'success' : 'no'},{'message' : 'input is missig'}]);
    }
    const answer = await env(qun)
    res.status(200).json([{'error' : 'no'},{'success' : 'yes'},{'message' : answer}]);

  }
  catch(e){
    console.log(e);
  }
});