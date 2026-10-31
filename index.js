import express from "express"
import dotenv from "dotenv";
import core from "cors";
 import envment from "./chatbot.js";
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
    const answer = await envment(qun)
    return res.status(200).json([{'error' : 'no'},{'success' : 'yes'},{'message' : answer}]);
  }
  catch(e){
    console.log(e);
    return res.status(500).json([{'error' : 'yes'},{'success' : 'no'},{'message' : 'somthing is wrong'}]);
  }
});

const port = 5000;
app.listen(port ,() =>{
    console.log(`server is runnig ${port}`)
})